import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, ReactNode } from "react";

const link = cva(
  [
    "inline-flex",
    "items-center",
    "gap-1",
    "font-medium",
    "transition-colors",
    "underline-offset-4",
    "hover:underline",
  ],
  {
    variants: {
      intent: {
        primary: "text-primary hover:opacity-80",
        secondary: "text-secondary hover:opacity-80",
        accent: "text-accent hover:opacity-80",
        neutral: "text-neutral-content hover:opacity-80",
      },
      size: {
        small: "text-sm",
        medium: "text-base",
        large: "text-lg",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "medium",
    },
  },
);

export type LinkProps = ComponentPropsWithoutRef<typeof Link> &
  VariantProps<typeof link> & {
    icon?: ReactNode;
    iconPosition?: "left" | "right";
  };

function NextLink({
  children,
  intent,
  size,
  icon,
  iconPosition = "left",
  className,
  ...props
}: LinkProps) {
  return (
    <Link {...props} className={link({ intent, size, className })}>
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </Link>
  );
}

export default NextLink;
