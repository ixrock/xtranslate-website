import { NextResponse, type NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export const config = {
  matcher: ["/api/:path*"]
};

const SKIP_LIST_PATHS = [
  "/api/auth/",
  "/api/webhooks/"
];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (SKIP_LIST_PATHS.some((skippingPath) => pathname.startsWith(skippingPath))) {
    return NextResponse.next();
  }

  const token = await getToken({ req, secret: process.env.AUTH_SECRET });
  if (!token) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  if (!token.stripeActive) {
    return NextResponse.json({ message: "Payment required" }, { status: 402 });
  }

  return NextResponse.next();
}
