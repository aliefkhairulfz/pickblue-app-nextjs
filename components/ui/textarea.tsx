import { cva, VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef } from "react";

const textarea = cva(
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
    "resize-none",
    "transition-colors",
    "placeholder:text-neutral-content/60",
    "focus-visible:ring-2",
    "focus-visible:ring-primary",
    "focus-visible:border-primary",
  ],
  {
    variants: {
      intent: {
        base: "border-border",
        error: "border-error focus-visible:ring-error",
        success: "border-success focus-visible:ring-success",
      },
      size: {
        small: "min-h-[80px]",
        medium: "min-h-[120px]",
        large: "min-h-[160px]",
      },
      disabled: {
        false: null,
        true: "opacity-50 cursor-not-allowed",
      },
    },
    defaultVariants: {
      intent: "base",
      size: "small",
      disabled: false,
    },
  },
);

export type TextareaProps = ComponentPropsWithoutRef<"textarea"> &
  VariantProps<typeof textarea>;

function Textarea({ intent, size, ...props }: TextareaProps) {
  return <textarea {...props} className={textarea({ intent, size })} />;
}

export default Textarea;
