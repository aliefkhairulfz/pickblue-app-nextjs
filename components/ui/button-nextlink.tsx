import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

const button = cva(
  [
    "inline-flex items-center justify-center",
    "font-semibold border rounded-md",
    "transition-all",
    "focus:outline-none focus:ring-2 focus:ring-primary/40",
  ],
  {
    variants: {
      intent: {
        primary: [
          "bg-primary",
          "text-primary-content",
          "border-transparent",
          "shadow-lg",
          "shadow-primary/20",
        ],

        secondary: [
          "bg-secondary",
          "text-secondary-content",
          "border-transparent",
        ],

        accent: ["bg-accent", "text-accent-content", "border-transparent"],

        outline: ["bg-transparent", "text-foreground", "border-border"],

        ghost: ["bg-transparent", "text-foreground", "border-transparent"],
      },

      size: {
        small: ["text-sm", "py-1", "px-2"],
        medium: ["text-base", "py-2", "px-4"],
        large: ["text-lg", "py-3", "px-6"],
      },

      disabled: {
        false: null,
        true: ["opacity-50", "cursor-not-allowed"],
      },
    },

    compoundVariants: [
      {
        intent: ["primary", "secondary", "accent"],
        disabled: false,
        className: "hover:brightness-110 active:brightness-95",
      },

      {
        intent: "outline",
        disabled: false,
        className: "hover:bg-neutral hover:text-neutral-content",
      },

      {
        intent: "ghost",
        disabled: false,
        className: "hover:bg-neutral/50",
      },
    ],

    defaultVariants: {
      intent: "primary",
      size: "medium",
      disabled: false,
    },
  },
);

export type ButtonNextlinkProps = ComponentPropsWithoutRef<typeof Link> &
  VariantProps<typeof button>;

function ButtonNextlink({
  children,
  intent,
  className,
  size,
  ...props
}: ButtonNextlinkProps) {
  return (
    <Link {...props} className={cn(button({ intent, size }), className)}>
      {children}
    </Link>
  );
}

export default ButtonNextlink;
