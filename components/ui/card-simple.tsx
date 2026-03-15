import { cn } from "@/utils/cn";
import { ComponentPropsWithoutRef } from "react";
import { H3, P } from "./typography";

function Card({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      {...props}
      className={cn(
        "rounded-lg border border-border bg-background text-foreground shadow-sm",
        className,
      )}
    />
  );
}

function Header({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      {...props}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
    />
  );
}

function Title({ className, ...props }: ComponentPropsWithoutRef<"h3">) {
  return (
    <H3
      {...props}
      className={cn("font-semibold leading-none tracking-tight", className)}
    />
  );
}

function Description({ className, ...props }: ComponentPropsWithoutRef<"p">) {
  return (
    <P {...props} className={cn("text-sm text-neutral-content", className)} />
  );
}

function Content({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div {...props} className={cn("p-6", className)} />;
}

function Footer({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div {...props} className={cn("flex items-center p-6", className)} />;
}

Card.Header = Header;
Card.Title = Title;
Card.Description = Description;
Card.Content = Content;
Card.Footer = Footer;

export default Card;
