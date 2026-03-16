import { cva, VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/utils/cn";

const buttonBadge = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all [&>svg]:size-3.5",
  {
    variants: {
      variant: {
        default:
          "border border-border text-foreground/70 hover:border-primary/40 hover:text-primary",

        active:
          "border border-primary text-primary bg-primary/15 shadow-lg shadow-primary/10",
      },
    },

    defaultVariants: {
      variant: "default",
    },
  },
);

type ButtonBadgeProps = ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof buttonBadge>;

export default function ButtonBadge({
  className,
  variant,
  children,
  ...props
}: ButtonBadgeProps) {
  return (
    <button {...props} className={cn(buttonBadge({ variant }), className)}>
      {children}
    </button>
  );
}
