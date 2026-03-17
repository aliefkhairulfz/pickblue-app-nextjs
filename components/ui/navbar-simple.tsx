import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";
import { getLocale } from "next-intl/server";

export default async function NavbarSimple() {
  const locale = await getLocale();

  return (
    <nav className="fixed top-0 z-10 w-full border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-6 md:px-0 flex h-16 items-center justify-between">
        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="text-xl font-semibold tracking-tight"
        >
          <span className="text-primary">Pick</span>
          <span className="text-foreground">Blue</span>
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-8 text-sm text-foreground/60">
          <Link
            href={`/${locale}/explore`}
            className="transition-colors hover:text-foreground"
          >
            Explore
          </Link>

          <Link
            href={`/${locale}/dashboard`}
            className="transition-colors hover:text-foreground"
          >
            Dashboard
          </Link>

          <Link
            href={`/${locale}/cart`}
            className="transition-colors hover:text-foreground"
          >
            <ShoppingCart size={20} />
          </Link>

          <Link
            href={`/${locale}/sign-in`}
            className="flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <User size={18} />
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}
