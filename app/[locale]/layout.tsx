import NavbarSimple from "@/components/ui/navbar-simple";
import { routing } from "@/i18n/routing";
import { cn } from "@/utils/cn";
import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

const robotoSlab = Roboto_Slab({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "PickBlue Selling-Platform",
  description: "Selling-Platform for Artwork/Images",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={cn(robotoSlab.className, "antialiased")}>
        <NextIntlClientProvider>
          {/** HEADER */}
          <header>
            <NavbarSimple />
          </header>

          {/** MAIN */}
          <main>{children}</main>

          {/* FOOTER */}
          <footer className="px-6 md:px-0 mt-20 w-full border-t border-border">
            <div className="container mx-auto py-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                {/* Brand */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-lg font-semibold text-primary">
                    PickBlue
                  </h3>
                  <p className="text-sm text-foreground/50 max-w-[260px]">
                    The marketplace for digital creators. Sell your art, grow
                    your audience.
                  </p>
                </div>

                {/* Marketplace */}
                <div className="flex flex-col gap-3">
                  <h4 className="font-semibold">Marketplace</h4>

                  <ul className="flex flex-col gap-2 text-sm text-foreground/50">
                    <li className="hover:text-foreground transition-colors cursor-pointer">
                      Browse Art
                    </li>
                    <li className="hover:text-foreground transition-colors cursor-pointer">
                      Categories
                    </li>
                    <li className="hover:text-foreground transition-colors cursor-pointer">
                      Trending
                    </li>
                  </ul>
                </div>

                {/* Creators */}
                <div className="flex flex-col gap-3">
                  <h4 className="font-semibold">Creators</h4>

                  <ul className="flex flex-col gap-2 text-sm text-foreground/50">
                    <li className="hover:text-foreground transition-colors cursor-pointer">
                      Start Selling
                    </li>
                    <li className="hover:text-foreground transition-colors cursor-pointer">
                      Dashboard
                    </li>
                  </ul>
                </div>

                {/* Company */}
                <div className="flex flex-col gap-3">
                  <h4 className="font-semibold">Company</h4>

                  <ul className="flex flex-col gap-2 text-sm text-foreground/50">
                    <li className="hover:text-foreground transition-colors cursor-pointer">
                      About
                    </li>
                    <li className="hover:text-foreground transition-colors cursor-pointer">
                      Terms
                    </li>
                    <li className="hover:text-foreground transition-colors cursor-pointer">
                      Privacy
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-full h-px bg-border my-10" />

              <div className="text-center text-sm text-foreground/40">
                © 2026 PickBlue. All rights reserved.
              </div>
            </div>
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
