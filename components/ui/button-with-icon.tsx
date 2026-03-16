import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { ArrowRight } from "lucide-react";
import { ComponentPropsWithoutRef, ReactNode } from "react";

const button = cva(
  [
    "relative inline-flex items-center justify-center",
    "font-semibold border rounded-md",
    "transition-all",
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
        large: ["text-lg", "py-3", "px-6", "pr-10"],
      },

      disabled: {
        false: null,
        true: ["opacity-50", "cursor-not-allowed"],
      },
    },

    compoundVariants: [
      {
        intent: ["primary", "secondary", "accent"],
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

export type ButtonWithIconProps = ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof button> & {
    icon?: ReactNode;
  };

function ButtonWithIcon({
  children,
  intent,
  className,
  size,
  icon = <ArrowRight strokeWidth={2.5} />,
  ...props
}: ButtonWithIconProps) {
  return (
    <button
      {...props}
      className={cn(button({ intent, size }), "group", className)}
    >
      {children}

      <span className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center size-4 opacity-80 transition-transform group-hover:translate-x-0.5 [&>svg]:size-4">
        {icon}
      </span>
    </button>
  );
}

export default ButtonWithIcon;
