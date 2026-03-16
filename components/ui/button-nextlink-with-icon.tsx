import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ComponentPropsWithoutRef, ReactNode } from "react";

const button = cva(
  [
    "relative inline-flex items-center font-semibold border rounded-md transition-all",
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
        medium: ["text-base", "py-2", "px-4", "pr-9"],
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
        className: "hover:brightness-110 active:brightness-95",
      },

      {
        intent: "secondary",
        disabled: false,
        className: "hover:brightness-110 active:brightness-95",
      },

      {
        intent: "accent",
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

export type ButtonNextlinkWithIconProps = ComponentPropsWithoutRef<
  typeof Link
> &
  VariantProps<typeof button> & {
    icon?: ReactNode;
  };

function ButtonNextlinkWithIcon({
  children,
  intent,
  className,
  size,
  icon = <ArrowRight strokeWidth={2.5} />,
  ...props
}: ButtonNextlinkWithIconProps) {
  return (
    <Link {...props} className={cn(button({ intent, size }), className)}>
      {children}

      <span className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center size-4 opacity-80 [&>svg]:size-4">
        {icon}
      </span>
    </Link>
  );
}

export default ButtonNextlinkWithIcon;
