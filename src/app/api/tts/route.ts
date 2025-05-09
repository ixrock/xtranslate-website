import { auth } from "@/auth";
import { NextResponse } from "next/server";

// TODO: implement TTS
export const GET = auth(async function GET(req) {
  if (!req.auth) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 })
  }

  return NextResponse.json(req.auth);
});
