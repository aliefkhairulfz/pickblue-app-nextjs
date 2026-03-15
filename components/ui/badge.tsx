import { cva, VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/utils/cn";

const badge = cva(
  "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium border-[0.1px] shadow-xl shadow-primary/10 [&>svg]:size-3.5",
  {
    variants: {
      variant: {
        primary: "bg-primary/15 text-primary",
        secondary: "bg-secondary/15 text-secondary",
        accent: "bg-accent/15 text-accent",
        neutral: "bg-neutral/20 text-neutral-content",
        success: "bg-success/15 text-success",
        warning: "bg-warning/15 text-warning",
        error: "bg-error/15 text-error",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

type BadgeProps = ComponentPropsWithoutRef<"span"> &
  VariantProps<typeof badge> & {
    icon?: ReactNode;
  };

export default function Badge({
  className,
  variant,
  icon,
  children,
  ...props
}: BadgeProps) {
  return (
    <span {...props} className={cn(badge({ variant }), className)}>
      {icon}
      {children}
    </span>
  );
}
