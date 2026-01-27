export { default } from "next-auth/middleware"

export const config = { matcher: ["/tai-khoan/:path*", "/dang-tin/:path*"] }
