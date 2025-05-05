import { NextResponse, type NextRequest } from "next/server";
import { auth } from "@/auth-edge"

export const config = {
  matcher: ["/api/:path*"]
};

const skipAuthPaths = [
  "/api/auth/",
  "/api/webhooks/",
]

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  if (skipAuthPaths.some(prefix => path.startsWith(prefix))) {
    return NextResponse.next(); // skip middleware
  }

  const session = await auth();
  if (!session) {
    return NextResponse.json({ message: 'Unauthorized', }, { status: 401 });
  }

  return NextResponse.next();
}
