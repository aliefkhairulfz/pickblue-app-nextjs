import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef } from "react";

const label = cva(
  [
    "text-sm",
    "font-medium",
    "leading-none",
    "text-foreground",
    "peer-disabled:cursor-not-allowed",
    "peer-disabled:opacity-50",
  ],
  {
    variants: {
      intent: {
        base: null,
        error: "text-error",
        success: "text-success",
      },
      size: {
        small: "text-xs",
        medium: "text-sm",
        large: "text-base",
      },
    },
    defaultVariants: {
      intent: "base",
      size: "medium",
    },
  },
);

export type LabelProps = ComponentPropsWithoutRef<"label"> &
  VariantProps<typeof label>;

function Label({ intent, className, size, ...props }: LabelProps) {
  return (
    <label {...props} className={cn(label({ intent, size }), className)} />
  );
}

export default Label;
