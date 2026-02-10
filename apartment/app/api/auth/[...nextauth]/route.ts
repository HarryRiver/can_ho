import NextAuth, { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        try {
          // Gọi đến API thực của bạn
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
            method: 'POST',
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password
            }),
            headers: { "Content-Type": "application/json" }
          });

          const data = await res.json();

          // Kiểm tra nếu API trả về thành công (thường là có token hoặc user data)
          // Giả sử API trả về object user hoặc token. Bạn cần điều chỉnh tùy theo response thực tế.
          if (res.ok && data) {
            // Trả về object user cho NextAuth xử lý tiếp
            // Nếu API trả về token, bạn nên gán vào đây để lưu vào session
            return {
              id: data.user?.id || data.id || 'userid', 
              name: data.user?.name || data.name || credentials.email.split('@')[0],
              email: data.user?.email || credentials.email,
              image: data.user?.image || null,
              accessToken: data.access_token || data.token, // Lưu token nếu có
            }
          }
          
          return null; // Đăng nhập thất bại

        } catch (error) {
          console.error("Login error:", error);
          return null;
        }
      }
    })
  ],
  pages: {
    signIn: '/dang-nhap',
    error: '/dang-nhap', 
  },
  callbacks: {
    async jwt({ token, user }) {
      // Khi đăng nhập thành công lần đầu, user sẽ có dữ liệu từ hàm authorize trả về
      if (user) {
        token.accessToken = user.accessToken as string;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      // Chuyền dữ liệu từ token vào session để client có thể dùng
      if (session.user) {
        session.user.id = token.id;
        session.user.accessToken = token.accessToken;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET, 
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
