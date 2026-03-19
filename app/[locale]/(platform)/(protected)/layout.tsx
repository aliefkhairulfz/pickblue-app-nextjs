import NavbarSimple from "@/components/ui/navbar-simple";
import { routing } from "@/i18n/routing";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

type ProtectedLayout = Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>;

async function ProtectedLayout({ children, params }: ProtectedLayout) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <>
      <header>
        <NavbarSimple locale={locale} />
      </header>
      <main>{children}</main>
    </>
  );
}

export default ProtectedLayout;
