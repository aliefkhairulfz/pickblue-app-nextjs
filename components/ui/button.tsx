import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef } from "react";

const button = cva(
  ["font-semibold", "border", "rounded-md", "transition-colors"],
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

export type ButtonProps = ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof button>;

function Button({ children, intent, className, size, ...props }: ButtonProps) {
  return (
    <button {...props} className={cn(button({ intent, size }), className)}>
      {children}
    </button>
  );
}

export default Button;
