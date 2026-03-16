"use client";

import { useState } from "react";
import { cn } from "@/utils/cn";

type Option = {
  label: string;
  value: string;
};

type MenuSelectSimpleProps = {
  options: Option[];
  placeholder?: string;
};

export default function MenuSelectSimple({
  options,
  placeholder,
}: MenuSelectSimpleProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Option | null>(null);

  return (
    <div className="relative w-56">
      {/* trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full rounded-md border border-border bg-background px-3 py-2 text-left"
      >
        {selected?.label ?? placeholder ?? "Select option"}
      </button>

      {/* menu */}
      {open && (
        <ul className="absolute mt-2 w-full rounded-md overflow-clip border border-border bg-background shadow-md">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
              className={cn(
                "cursor-pointer px-3 py-2 text-sm",
                "hover:bg-primary hover:text-primary-content",
                "transition-colors",
              )}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
