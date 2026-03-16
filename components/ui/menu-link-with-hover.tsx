import Link from "next/link";

type Item = {
  label: string;
  href: string;
};

type MenuLinkWithHover = {
  items: Item[];
};

export default function MenuLinkWithHover({ items }: MenuLinkWithHover) {
  return (
    <div className="relative w-56 group">
      {/* trigger */}
      <div className="cursor-pointer">Select option</div>

      {/* dropdown */}
      <ul
        className="absolute top-0 pt-8 left-0 w-full rounded-md bg-transparent shadow-md
        opacity-0 invisible group-hover:opacity-100 group-hover:visible cursor-pointer transition"
      >
        <div className="rounded-md border border-border overflow-clip shadow bg-background">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block cursor-pointer px-3 py-2 text-sm hover:bg-primary hover:text-primary-content"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
}
