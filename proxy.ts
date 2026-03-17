import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export async function proxy(request: NextRequest) {
  // const session = request.cookies.get("session");
  // const { pathname } = request.nextUrl;

  // /** CATCH LOCALE */
  // const segments = pathname.split("/");
  // const locale = segments[1];

  // /** ROUTES */
  // const signIn = `/${locale}/sign-in`;
  // const signUp = `/${locale}/sign-up`;
  // const dashboard = `/${locale}/me`;
  // const explore = `/${locale}/explore`;
  // const artworkId = `/${locale}/artwork`;
  // const home = `/${locale}`;

  // const pubRoutes = [signIn, signUp, home, explore, artworkId];
  // const pivRoutes = [dashboard];

  // console.log("locale:", locale);

  // /** CASE NO SESSION */
  // if (
  //   !session &&
  //   pubRoutes.some((p) => p === pathname || pathname.startsWith(artworkId))
  // ) {
  //   return intlMiddleware(request);
  // }

  // if (!session && pathname !== signIn && pathname !== signUp) {
  //   return NextResponse.redirect(new URL(signIn, request.url));
  // }

  // /** CASE HAVE SESSION */
  // if (session && pubRoutes.some((p) => p === pathname)) {
  //   return NextResponse.redirect(new URL(pivRoutes[0], request.url));
  // }

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  ],
};
