import { cva, VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef } from "react";

const input = cva(
  [
    "w-full",
    "rounded-md",
    "border",
    "px-3",
    "py-2",
    "text-sm",
    "bg-background",
    "text-foreground",
    "outline-none",
    "transition-colors",
    "placeholder:text-neutral-content/60",
    "focus-visible:ring-2",
    "focus-visible:ring-primary",
    "focus-visible:border-primary",
  ],
  {
    variants: {
      intent: {
        base: ["border-border"],
        error: ["border-error", "focus-visible:ring-error"],
        success: ["border-success", "focus-visible:ring-success"],
      },
      size: {
        small: ["h-8"],
        medium: ["h-10"],
        large: ["h-12"],
      },
      disabled: {
        false: null,
        true: ["opacity-50", "cursor-not-allowed"],
      },
    },
    defaultVariants: {
      intent: "base",
      size: "medium",
      disabled: false,
    },
  },
);

export type InputProps = ComponentPropsWithoutRef<"textarea"> &
  VariantProps<typeof input>;

function Input({ intent, size, ...props }: InputProps) {
  return <textarea className={input({ intent, size })} {...props} />;
}

export default Input;
