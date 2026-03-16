import Image from "next/image";
import { cn } from "@/utils/cn";
import { ComponentPropsWithoutRef } from "react";

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
        "relative flex items-center justify-between gap-6 rounded-2xl",
        "border border-border bg-neutral/20 px-4 py-2 backdrop-blur",
        "hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-700",
        className,
      )}
    >
      {children}
    </div>
  );
}

/* LEFT SECTION */
function Left({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div {...props} className={cn("flex items-center gap-5", className)}>
      {children}
    </div>
  );
}

/* THUMBNAIL */
function Thumbnail({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative size-20 overflow-hidden rounded-xl">
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}

/* INFO */
function Info({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div {...props} className={cn("flex flex-col gap-1", className)}>
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
    <h3 {...props} className={cn("text-lg font-semibold", className)}>
      {children}
    </h3>
  );
}

/* SIZE */
function Size({
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

/* QUANTITY WRAPPER */
function Quantity({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div {...props} className={cn("mt-2 flex items-center gap-3", className)}>
      {children}
    </div>
  );
}

/* BUTTON */
function QtyButton({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"button">) {
  return (
    <button
      {...props}
      className={cn(
        "flex size-9 items-center justify-center rounded-md",
        "border border-border text-sm",
        "hover:border-primary/40 hover:text-primary",
        "transition",
        className,
      )}
    >
      {children}
    </button>
  );
}

/* VALUE */
function QtyValue({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"span">) {
  return (
    <span
      {...props}
      className={cn("w-6 text-center text-base font-medium", className)}
    >
      {children}
    </span>
  );
}

/* PRICE */
function Price({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"span">) {
  return (
    <span
      {...props}
      className={cn("text-2xl font-semibold text-primary", className)}
    >
      {children}
    </span>
  );
}

/* REMOVE BUTTON */
function Remove({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"button">) {
  return (
    <button
      {...props}
      className={cn(
        "absolute right-5 top-4 text-foreground/40",
        "hover:text-red-400 transition",
        className,
      )}
    >
      {children}
    </button>
  );
}

const CartCard = Object.assign(Root, {
  Left,
  Thumbnail,
  Info,
  Title,
  Size,
  Quantity,
  QtyButton,
  QtyValue,
  Price,
  Remove,
});

export default CartCard;
