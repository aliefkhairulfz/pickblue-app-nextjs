import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  const session = request.cookies.get("session");
  const { pathname } = request.nextUrl;
  console.log("middleware running, session is:", session);

  // CASE HAVE NO SESSION
  // if (!session && (pathname === "/sign-in" || pathname === "/sign-up")) {
  //   console.log("middleware if 1 checked");
  //   return NextResponse.next();
  // }

  // if (!session && pathname !== "/sign-in" && pathname !== "/sign-up") {
  //   console.log("middleware if 2 checked");
  //   return NextResponse.redirect(new URL("/sign-in", request.url));
  // }

  // // CASE HAVE SESSION
  // if (session && (pathname === "/sign-in" || pathname === "/sign-up")) {
  //   console.log("middleware if 3 checked");
  //   return NextResponse.redirect(new URL("/me", request.url));
  // }

  return NextResponse.next();
}

// CLERK MATCHER
export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  ],
};
