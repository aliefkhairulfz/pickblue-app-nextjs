import { ComponentPropsWithoutRef, ReactNode } from "react";
import NextImage from "./next-image";
import { cn } from "@/utils/cn";

type CardHorizontalProps = ComponentPropsWithoutRef<"div">;

function CardHorizontal({
  children,
  className,
  ...props
}: CardHorizontalProps) {
  return (
    <div
      {...props}
      data-slot="card-horizontal"
      className={cn(
        "relative flex items-center gap-4",
        "bg-neutral/20 rounded-2xl overflow-hidden border border-border",
        "hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5",
        "transition-all duration-500",
        "p-3",
        className,
      )}
    >
      {children}
    </div>
  );
}

function CardImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      data-slot="card-image"
      className="relative w-[120px] h-[90px] shrink-0 overflow-hidden rounded-xl"
    >
      <NextImage src={src} alt={alt} className="object-cover" />
    </div>
  );
}

type CardContent = ComponentPropsWithoutRef<"div">;

function CardContent({ children, ...props }: CardContent) {
  return (
    <div
      {...props}
      data-slot="card-content"
      className={cn("flex flex-col flex-1 gap-1", props.className)}
    >
      {children}
    </div>
  );
}

function CardTitle({ children }: { children: ReactNode }) {
  return (
    <div data-slot="card-title" className="font-semibold text-sm line-clamp-1">
      {children}
    </div>
  );
}

function CardDescription({ children }: { children: ReactNode }) {
  return (
    <div data-slot="card-description" className="text-xs text-muted-foreground">
      {children}
    </div>
  );
}

function CardFooter({ children }: { children: ReactNode }) {
  return (
    <div
      data-slot="card-footer"
      className="flex items-center justify-between mt-2"
    >
      {children}
    </div>
  );
}

function CardAction({ children }: { children: ReactNode }) {
  return (
    <div data-slot="card-action" className="absolute top-2 right-2">
      {children}
    </div>
  );
}

CardHorizontal.Image = CardImage;
CardHorizontal.Content = CardContent;
CardHorizontal.Title = CardTitle;
CardHorizontal.Description = CardDescription;
CardHorizontal.Footer = CardFooter;
CardHorizontal.Action = CardAction;

export default CardHorizontal;
