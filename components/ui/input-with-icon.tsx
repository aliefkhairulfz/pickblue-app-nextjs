import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { Search } from "lucide-react";
import { ComponentPropsWithoutRef, ReactNode } from "react";

const input = cva(
  [
    "w-full",
    "rounded-md",
    "border",
    "pr-3",
    "pl-9", // need this for icons on the left
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

export type InputProps = ComponentPropsWithoutRef<"input"> &
  VariantProps<typeof input> & {
    icon?: ReactNode;
  };

function InputWithIcon({
  intent,
  size,
  className,
  icon = <Search />,
  ...props
}: InputProps) {
  return (
    <div className="relative w-full">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center size-4 opacity-50 [&>svg]:size-4">
        {icon}
      </span>

      <input className={cn(input({ intent, size }), className)} {...props} />
    </div>
  );
}

export default InputWithIcon;
