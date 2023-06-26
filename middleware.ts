import { NextResponse, type NextRequest } from "next/server";

function check_jwt_expiration() {
  pass
}

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // check if we have a session
  const accessToken = req.cookies.get("accessToken");
  const refreshToken = req.cookies.get("refreshToken");

  if (accessToken || refreshToken) {
    return res; // if there is a session, forward request to protected route
  }

  // if no session, redirect to landing page
  const redirectUrl = req.nextUrl.clone();
  redirectUrl.pathname = "/";
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
