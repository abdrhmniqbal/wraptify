/* eslint-disable @typescript-eslint/no-explicit-any */
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' // Define allowed HTTP methods
type FetchWebApiOptions = {
  token: string
  endpoint: string
  method: HttpMethod
  revalidate?: number
  body?: Record<string, any>
}

async function fetchWebApi<T = any>({
  token,
  endpoint,
  method,
  body,
}: FetchWebApiOptions): Promise<T> {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body: body ? JSON.stringify(body) : undefined,
  })

  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`)
  }

  return res.json()
}

export default fetchWebApi
