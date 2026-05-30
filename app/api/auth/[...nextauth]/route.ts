import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/db";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "login",
      credentials: {
        email: { label: "Email", type: "text" }
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email }
        });

        if (!user) return null;
        return user;
      }
    })
  ],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET
});

export { handler as GET, handler as POST };