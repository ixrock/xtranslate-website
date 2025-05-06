import { DefaultSession } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      stripeCustomerId?: string;
    } & DefaultSession["user"];
  }

  interface User {
    stripeCustomerId?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    stripeCustomerId?: string;
  }
}
