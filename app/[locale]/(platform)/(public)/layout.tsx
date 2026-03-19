import NavbarSimple from "@/components/ui/navbar-simple";
import PickblueFooter from "@/components/ui/pickblue-footer";
import { routing } from "@/i18n/routing";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

type PublicLayout = Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>;

async function PublicLayout({ children, params }: PublicLayout) {
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
      <footer className="px-6 md:px-0 mt-20 w-full border-t border-border">
        <PickblueFooter />
      </footer>
    </>
  );
}

export default PublicLayout;
