import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";

export default function NavbarSimple() {
  return (
    <nav className="fixed top-0 z-10 w-full border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-6 md:px-0 flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold tracking-tight">
          <span className="text-primary">Pick</span>
          <span className="text-foreground">Blue</span>
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-8 text-sm text-foreground/60">
          <Link
            href="/browse"
            className="transition-colors hover:text-foreground"
          >
            Browse
          </Link>

          <Link
            href="/dashboard"
            className="transition-colors hover:text-foreground"
          >
            Dashboard
          </Link>

          <Link
            href="/cart"
            className="transition-colors hover:text-foreground"
          >
            <ShoppingCart size={20} />
          </Link>

          <Link
            href="/sign-in"
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
