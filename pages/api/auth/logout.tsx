import type { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server'
import { serialize } from "cookie";
export default async function handler(
      req: NextApiRequest,
      res: NextApiResponse
  ) {
   try {
      const { cookies } = req;
      const jwt = cookies.accessToken;
      if (jwt) {
        const serialised = serialize("accessToken", "", {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          sameSite: "strict",
          maxAge: -1,
          path: "/",
        });
        res.setHeader("Set-Cookie", serialised);
      }
      res.status(200).json({
        success: true,
        message: "Logout successfully",
      });
      return NextResponse.redirect(new URL('/login', req.url))
   } catch (error) {
    res.status(403).json({ 
      success: false,
      message: 'Logout failed'
    });
   }

}
