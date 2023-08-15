import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import * as jwt from "jose";

export const authOptions: NextAuthOptions = {
  pages: { signIn: "/login", error: "/login" },
  providers: [
    CredentialsProvider({
      credentials: {},
      async authorize(credentials, req) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
          }
        );

        const user = await response.json();

        if (user.status) {
          const { payload } = await jwt.jwtVerify(
            user.access_token,
            new TextEncoder().encode(process.env.NEXTAUTH_SECRET)
          );

          user.expires_in = payload.exp;

          return user;
        }

        return null; // if credentials are invalid, return error
      },
    }),
  ],
  session: { strategy: "jwt", maxAge: 60 * 15 }, // match server expiry
  callbacks: {
    async session({ session, token }) {
      session.access_token = token.access_token; // pass access token with basic user info to session
      return session;
    },
    async jwt({ token, user }) {
      // console.log("token", token);

      // Save the tokens in the JWT on the initial login
      if (user) {
        token.access_token = user.access_token;
        token.refresh_token = user.refresh_token;
        token.expires_in = user.expires_in;
      } else if (Date.now() < token.expires_in * 1000) {
        return token; // If the access token has not expired yet, return it as normal
      } else {
        // try and refresh the access token using refresh_token
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/refresh`,
            {
              method: "POST",
              headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token.refresh_token}`,
              },
            }
          );

          console.log("Refresh access token response", await response.json());
        } catch (err) {
          console.log(err);
        }
      }

      return token;
    },
  },
};
export default NextAuth(authOptions);
