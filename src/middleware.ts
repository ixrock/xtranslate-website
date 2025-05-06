import { NextResponse, type NextRequest } from "next/server";
import { auth } from "@/auth"

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

  // TODO: verify if the user has valid stripe subscription
  const session = await auth();
  if (!session) {
    return NextResponse.json({ message: 'Unauthorized', }, { status: 401 });
  }

  return NextResponse.next();
}
