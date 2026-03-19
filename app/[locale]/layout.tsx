import { routing } from "@/i18n/routing";
import { cn } from "@/utils/cn";
import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Roboto_Slab } from "next/font/google";
import { notFound } from "next/navigation";
import "./globals.css";

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

type RootLayout = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>;

export default async function RootLayout({ children, params }: RootLayout) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={cn(robotoSlab.className, "antialiased")}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
