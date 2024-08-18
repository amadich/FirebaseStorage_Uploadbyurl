import { NextAuthOptions } from "next-auth";

import Githubprovider from "next-auth/providers/github";
import Googleprovider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    Githubprovider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    Googleprovider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
};