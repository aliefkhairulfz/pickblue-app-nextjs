import NavbarSimple from "@/components/ui/navbar-simple";
import { routing } from "@/i18n/routing";
import { cn } from "@/utils/cn";
import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import PickblueFooter from "@/components/ui/pickblue-footer";

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
          <header>
            <NavbarSimple />
          </header>
          <main>{children}</main>
          <footer className="px-6 md:px-0 mt-20 w-full border-t border-border">
            <PickblueFooter />
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
