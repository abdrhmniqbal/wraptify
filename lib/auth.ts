import NextAuth from 'next-auth'
import Spotify from 'next-auth/providers/spotify'

export const { auth, handlers } = NextAuth({
  providers: [
    Spotify({
      authorization: `https://accounts.spotify.com/authorize?scope=user-top-read`,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.access_token = account.access_token
      }
      return token
    },
    async session({ session, token }) {
      session.accessToken = token.access_token as string
      return session
    },
  },
  pages: {
    signIn: '/login',
  },
})
