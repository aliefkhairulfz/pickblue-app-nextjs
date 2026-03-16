import { cn } from "@/utils/cn";
import Image from "next/image";
import { ComponentPropsWithoutRef } from "react";
import Badge from "./badge";
import { H5 } from "./typography";

/* ROOT */
function Root({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      {...props}
      className={cn(
        "w-[425px] overflow-clip rounded-2xl border border-border bg-neutral/20",
        "group cursor-pointer transition-all duration-700",
        "hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10",
        className,
      )}
    >
      {children}
    </div>
  );
}

/* IMAGE */
function ArtworkImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-[300px] overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-all duration-700 group-hover:scale-110"
      />
    </div>
  );
}

/* BODY */
function Body({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      {...props}
      className={cn("flex items-start justify-between p-4.5", className)}
    >
      {children}
    </div>
  );
}

/* CONTENT */
function Content({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      {...props}
      className={cn("flex flex-col items-start gap-2.5", className)}
    >
      {children}
    </div>
  );
}

/* TITLE */
function Title({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"h3">) {
  return (
    <H5 {...props} className={cn(className)}>
      {children}
    </H5>
  );
}

/* DESCRIPTION */
function Description({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"p">) {
  return (
    <p {...props} className={cn("text-sm text-foreground/50", className)}>
      {children}
    </p>
  );
}

/* BADGE */
function ArtworkBadge({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<typeof Badge>) {
  return (
    <Badge {...props} className={cn(className)}>
      {children}
    </Badge>
  );
}

/* PRICE */
function Price({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"span">) {
  return (
    <H5 {...props} className={cn("text-primary", className)}>
      {children}
    </H5>
  );
}

/* EXPORT COMPOUND */
const ArtworkCard = Object.assign(Root, {
  Image: ArtworkImage,
  Body,
  Content,
  Title,
  Description,
  Badge: ArtworkBadge,
  Price,
});

export default ArtworkCard;
