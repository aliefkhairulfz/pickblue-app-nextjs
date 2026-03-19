import createMiddleware from "next-intl/middleware";
import { type NextRequest } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export async function proxy(request: NextRequest) {
  // const session = request.cookies.get("session");
  // const { pathname } = request.nextUrl;

  // /** CATCH LOCALE */
  // const segments = pathname.split("/");
  // const locale = segments[1];

  // /** STATIC ROUTES */
  // const signIn = `/${locale}/sign-in`;
  // const signUp = `/${locale}/sign-up`;
  // const dashboard = `/${locale}/me`;
  // const home = `/${locale}`;

  // /** DYNAMIC ROUTES */
  // const explore = `/${locale}/explore`;
  // const search = `/${locale}/search`;
  // const artworkId = `/${locale}/artwork`;

  // const pubRoutes = [signIn, signUp, home];
  // const pivRoutes = [dashboard];

  // /** CASE NO SESSION */
  // if (
  //   !session &&
  //   pubRoutes.some(
  //     (p) =>
  //       p === pathname ||
  //       pathname.startsWith(explore) ||
  //       pathname.startsWith(search) ||
  //       pathname.startsWith(artworkId),
  //   )
  // ) {
  //   if (pathname === explore) {
  //     return NextResponse.redirect(new URL(`${explore}/all`, request.url));
  //   }
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
