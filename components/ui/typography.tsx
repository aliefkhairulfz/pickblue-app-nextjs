import { cn } from "@/utils/cn";
import { ComponentPropsWithoutRef } from "react";

export function H1({ className, ...props }: ComponentPropsWithoutRef<"h1">) {
  return (
    <h1
      {...props}
      className={cn(
        "text-4xl font-bold tracking-tight text-foreground",
        className,
      )}
    />
  );
}

export function H2({ className, ...props }: ComponentPropsWithoutRef<"h2">) {
  return (
    <h2
      {...props}
      className={cn(
        "text-3xl font-semibold tracking-tight text-foreground",
        className,
      )}
    />
  );
}

export function H3({ className, ...props }: ComponentPropsWithoutRef<"h3">) {
  return (
    <h3
      {...props}
      className={cn(
        "text-2xl font-semibold tracking-tight text-foreground",
        className,
      )}
    />
  );
}

export function H4({ className, ...props }: ComponentPropsWithoutRef<"h4">) {
  return (
    <h4
      {...props}
      className={cn("text-xl font-semibold text-foreground", className)}
    />
  );
}

export function H5({ className, ...props }: ComponentPropsWithoutRef<"h5">) {
  return (
    <h5
      {...props}
      className={cn("text-lg font-medium text-foreground", className)}
    />
  );
}

export function P({ className, ...props }: ComponentPropsWithoutRef<"p">) {
  return (
    <p
      {...props}
      className={cn("text-sm leading-relaxed text-neutral-content", className)}
    />
  );
}
