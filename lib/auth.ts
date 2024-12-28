import refreshAccessToken from '@/lib/services/refresh-access-token'
import NextAuth from 'next-auth'
import type { AdapterUser } from 'next-auth/adapters'
import Spotify from 'next-auth/providers/spotify'

export const { auth, handlers } = NextAuth({
  providers: [
    Spotify({
      authorization: `https://accounts.spotify.com/authorize?scope=user-top-read`,
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      if (account && user) {
        return {
          access_token: account.access_token,
          refresh_token: account.refresh_token,
          access_token_expires: account.expires_at! * 1000,
          user,
        }
      }
      if (
        token.access_token_expires &&
        Date.now() < token.access_token_expires
      ) {
        return token
      }
      const newToken = await refreshAccessToken(token)
      return newToken
    },
    async session({ session, token }) {
      session.accessToken = token.access_token as string
      session.user = token.user as AdapterUser
      return session
    },
  },
  pages: {
    signIn: '/login',
  },
})
