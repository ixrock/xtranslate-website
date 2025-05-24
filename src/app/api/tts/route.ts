import { auth } from "@/auth";
import { NextResponse } from "next/server";

// TODO: use cache and serve from CDN
//  e.g https://supabase.com/storage
//  e.g https://www.cloudflare.com/developer-platform/products/r2/

export const GET = auth(async function GET(req) {
  if (!req.auth) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 })
  }

  return NextResponse.json(req.auth);
});
