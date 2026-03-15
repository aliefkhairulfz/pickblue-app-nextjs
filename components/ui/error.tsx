import { cn } from "@/utils/cn";
import { ComponentPropsWithoutRef } from "react";

type ErrorProps = ComponentPropsWithoutRef<"p">;

export default function Error({ className, ...props }: ErrorProps) {
  return (
    <p
      {...props}
      className={cn("text-sm text-error mt-1", className)}
      role="alert"
    />
  );
}
