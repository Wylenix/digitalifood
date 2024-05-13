import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: "Ov23liHe8PvO44rnvjlp",
      clientSecret: "e1be9b4fd1e906a0248e3e0ab80051dfe3c1ef90",
    }),
  ],

  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60,
  },

  pages: {
    signIn: "/login",
    signOut: "/logout",
    error: "/login",
  },

  callbacks: {
    async onSession(session, user, context) {
      return { session, user };
    },
  },
});
