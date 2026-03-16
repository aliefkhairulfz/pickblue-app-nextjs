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
        "group flex items-center gap-4 h-fit p-4",
        "rounded-2xl border border-border",
        "bg-background/40 backdrop-blur-sm",
        "transition-all duration-300 cursor-pointer",
        "hover:border-primary/40 hover:bg-background/60",
        className,
      )}
    >
      {children}
    </div>
  );
}

/* AVATAR */
type AvatarProps = {
  src: string;
  alt: string;
} & ComponentPropsWithoutRef<"div">;

function Avatar({ src, alt, className, ...props }: AvatarProps) {
  return (
    <div
      {...props}
      className={cn(
        "relative size-14 shrink-0 overflow-hidden rounded-full border border-border",
        className,
      )}
    >
      <Image src={src} alt={alt} fill sizes="56px" className="object-cover" />
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
    <div {...props} className={cn("flex flex-col", className)}>
      {children}
    </div>
  );
}

/* NAME */
function Name({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"p">) {
  return (
    <p
      {...props}
      className={cn(
        "text-base font-semibold text-foreground transition-colors",
        "group-hover:text-primary",
        className,
      )}
    >
      {children}
    </p>
  );
}

/* FOLLOWERS */
function Followers({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"p">) {
  return (
    <p {...props} className={cn("text-sm text-foreground/60", className)}>
      {children}
    </p>
  );
}

/* EXPORT */
const CreatorCardLongSimple = Object.assign(Root, {
  Avatar,
  Content,
  Name,
  Followers,
});

export default CreatorCardLongSimple;
