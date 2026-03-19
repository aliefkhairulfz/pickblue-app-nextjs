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

type CardHeader = ComponentPropsWithoutRef<"div">;

function CardHeader({ children, className, ...props }: CardHeader) {
  return (
    <div
      {...props}
      data-slot="card-header"
      className={cn("relative py-4 px-4", className)}
    >
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

type CardContent = ComponentPropsWithoutRef<"div">;

function CardContent({ children, className, ...props }: CardContent) {
  return (
    <div
      {...props}
      data-slot="card-content"
      className={cn("py-4 px-4", className)}
    >
      {children}
    </div>
  );
}

type CardFooter = ComponentPropsWithoutRef<"div">;

function CardFooter({ children, ...props }: CardFooter) {
  return (
    <div
      {...props}
      data-slot="card-footer"
      className={cn("py-4 px-4", props.className)}
    >
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
