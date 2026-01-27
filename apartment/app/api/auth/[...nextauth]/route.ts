import NextAuth, { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text", placeholder: "email@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // This is a demo environment without a real database.
        // We will accept any valid-looking login to allow you to test the flow.
        const email = credentials?.email;
        const password = credentials?.password;

        if (email && password && password.length >= 6) {
           // Simulate a user based on the email
           const name = email.split('@')[0];
           const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
           
           return { 
            id: email, // Use email as ID for demo
            name: formattedName, 
            email: email,
            image: `https://ui-avatars.com/api/?name=${formattedName}&background=random`
          }
        }
        
        return null
      }
    })
  ],
  pages: {
    signIn: '/dang-nhap',
    error: '/dang-nhap', // Error code passed in query string as ?error=
  },
  callbacks: {
    async session({ session, token }) {
      return session
    },
    async jwt({ token, user }) {
      return token
    }
  },
  secret: process.env.NEXTAUTH_SECRET || "supersecretkey123", // In production, use a real secret env var
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
