import { cva, VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/utils/cn";

const badge = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-all [&>svg]:size-3.5",
  {
    variants: {
      variant: {
        default: "bg-neutral text-neutral-content",
        primary: "bg-primary text-primary-content",
        secondary: "bg-secondary text-secondary-content",
        accent: "bg-accent text-accent-content",
        outline: "border border-border text-foreground",
        soft: "bg-neutral/40 text-neutral-content",
      },
    },
    defaultVariants: {
      variant: "default",
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
