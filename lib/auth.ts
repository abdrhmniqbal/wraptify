import NextAuth, { type DefaultSession } from 'next-auth'
import Spotify from 'next-auth/providers/spotify'

declare module 'next-auth' {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /**
       * By default, TypeScript merges new interface properties and overwrites existing ones.
       * In this case, the default session user properties will be overwritten,
       * with the new ones defined above. To keep the default session user properties,
       * you need to add them back into the newly declared interface.
       */
    } & DefaultSession['user']
  }
}

export const { auth, handlers } = NextAuth({
  providers: [Spotify],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.access_token = account.access_token
      }
      return token
    },
    async session({ session, token }) {
      return {
        ...session,
        token,
      }
    },
  },
  pages: {
    signIn: '/login',
  },
})
