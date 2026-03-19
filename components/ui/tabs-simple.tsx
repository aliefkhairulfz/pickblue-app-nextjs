"use client";

import { cn } from "@/utils/cn";

const tabs = ["products", "upload", "sales", "payout"];

type DashboardTabs = {
  active: string;
  setActive: (args: string) => void;
};

export default function DashboardTabs({ active, setActive }: DashboardTabs) {
  return (
    <div className="flex items-center gap-2 p-1.5 rounded-xl bg-muted/40 w-fit border border-border bg-neutral/20">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={cn(
            "px-4 py-2 rounded-md text-sm",
            active === tab
              ? "bg-background text-foreground shadow ring ring-border"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {tab.split("")[0].toUpperCase() + tab.slice(1, tab.length)}
        </button>
      ))}
    </div>
  );
}
