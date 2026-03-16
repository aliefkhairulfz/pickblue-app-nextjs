import { ComponentPropsWithoutRef, ReactNode } from "react";
import NextImage from "./next-image";
import { cn } from "@/utils/cn";

type CardSimple = ComponentPropsWithoutRef<"div">;

function CardSimple({ children, className, ...props }: CardSimple) {
  return (
    <>
      {/** WRAPPER */}
      <div
        {...props}
        data-slot="card"
        className={cn(
          "relative bg-neutral/20 w-[400px] rounded-2xl overflow-hidden border border-border",
          "hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5",
          "transition-all duration-500",
          "cursor-pointer",
          "group",
          className,
        )}
      >
        {children}
      </div>
    </>
  );
}

function CardImage() {
  return (
    <>
      <div className="aspect-video" />
      <div className="absolute inset-0 aspect-video">
        <NextImage
          className="aspect-video group overflow-hidden"
          src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429"
          alt="dummy"
        />
      </div>
    </>
  );
}

function CardHeader({ children }: { children: ReactNode }) {
  return (
    <div data-slot="card-header" className="relative py-4 px-4">
      {children}
    </div>
  );
}

type CardTitle = ComponentPropsWithoutRef<"div">;

function CardTitle({ children, className, ...props }: CardTitle) {
  return (
    <div {...props} data-slot="card-title" className={cn(className)}>
      {children}
    </div>
  );
}

function CardDescription({ children }: { children: ReactNode }) {
  return <div data-slot="card-description">{children}</div>;
}

function CardAction({ children }: { children: ReactNode }) {
  return (
    <div data-slot="card-action" className="absolute top-[16px] right-[16px]">
      {children}
    </div>
  );
}

function CardContent({ children }: { children: ReactNode }) {
  return (
    <div data-slot="card-content" className="py-4 px-4">
      {children}
    </div>
  );
}

function CardFooter({ children }: { children: ReactNode }) {
  return (
    <div data-slot="card-footer" className="py-4 px-4">
      {children}
    </div>
  );
}

CardSimple.Image = CardImage;
CardSimple.Header = CardHeader;
CardSimple.Title = CardTitle;
CardSimple.Description = CardDescription;
CardSimple.Action = CardAction;
CardSimple.Content = CardContent;
CardSimple.Footer = CardFooter;

export default CardSimple;
