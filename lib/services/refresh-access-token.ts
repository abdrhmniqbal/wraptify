import type { JWT } from 'next-auth/jwt'

async function refreshAccessToken(token: JWT) {
  try {
    const basicAuth = Buffer.from(
      `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`,
    ).toString('base64')

    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basicAuth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: token.refresh_token!,
      }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`)
    }

    const data = await response.json()

    return {
      ...token,
      access_token: data.access_token,
      access_token_expires: Date.now() + data.expires_in * 1000,
    }
  } catch (error) {
    return {
      ...token,
      error,
    }
  }
}

export default refreshAccessToken