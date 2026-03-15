import { cn } from "@/utils/cn";
import { ComponentPropsWithoutRef } from "react";

type SeparatorProps = ComponentPropsWithoutRef<"div"> & {
  orientation?: "horizontal" | "vertical";
};

export default function Separator({
  className,
  orientation = "horizontal",
  ...props
}: SeparatorProps) {
  return (
    <div
      {...props}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-px w-full" : "w-px h-full",
        className,
      )}
    />
  );
}
