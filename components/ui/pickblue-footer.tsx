function PickblueFooter() {
  return (
    <div className="container mx-auto py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-primary">PickBlue</h3>
          <p className="text-sm text-foreground/50 max-w-[260px]">
            The marketplace for digital creators. Sell your art, grow your
            audience.
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
  );
}

export default PickblueFooter;
