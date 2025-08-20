import { auth } from "@/auth";

// TODO: use cache and serve from CDN
//  e.g https://supabase.com/storage
//  e.g https://www.cloudflare.com/developer-platform/products/r2/

export async function GET(req: Request): Promise<Response> {
  const session = await auth();

  if (!session) {
    return Response.json({ message: "Not authenticated" }, { status: 401 });
  }

  // TODO: stream audio file from storage
  return new Response("Audio file streaming not implemented yet", {
    status: 204
  });
}
