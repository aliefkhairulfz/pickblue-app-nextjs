import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";
import { ComponentPropsWithoutRef, ReactNode } from "react";

const button = cva(
  ["relative font-semibold border rounded-md transition-colors"],
  {
    variants: {
      intent: {
        primary: [
          "bg-primary",
          "text-primary-content",
          "border-transparent",
          "shadow-xl",
          "shadow-primary/20",
        ],
        secondary: ["bg-secondary", "text-secondary-content", "border-border"],
        outline: ["bg-transparent", "text-foreground", "border-border"],
        ghost: ["bg-transparent", "text-foreground", "border-transparent"],
      },
      size: {
        small: ["text-sm", "py-1", "px-2"],
        medium: ["text-base", "py-2", "px-4"],
      },
      disabled: {
        false: null,
        true: ["opacity-50", "cursor-not-allowed"],
      },
    },
    compoundVariants: [
      {
        intent: "primary",
        disabled: false,
        className: "hover:opacity-90",
      },
      {
        intent: "secondary",
        disabled: false,
        className: "hover:bg-neutral hover:text-neutral-content",
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
  VariantProps<typeof button> & {
    icon?: ReactNode;
  };

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
