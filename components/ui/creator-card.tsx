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
        "group flex cursor-pointer flex-col items-center text-center w-fit",
        "gap-1",
        className,
      )}
    >
      {children}
    </div>
  );
}

/* AVATAR */
type AvatarProps = ComponentPropsWithoutRef<"div"> & {
  src: string;
  alt: string;
};

function Avatar({ src, alt, className, children, ...props }: AvatarProps) {
  return (
    <div
      {...props}
      className={cn(
        "relative size-20 overflow-hidden rounded-full border border-border",
        "transition-all duration-500",
        "group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="80px"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {children}
    </div>
  );
}

/* BADGE SLOT (optional) */
function AvatarBadge({
  className,
  ...props
}: ComponentPropsWithoutRef<"span">) {
  return (
    <span
      {...props}
      className={cn(
        "absolute bottom-0 right-0 size-4 rounded-full border-2 border-background bg-primary",
        className,
      )}
    />
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
        "text-sm font-semibold",
        "group-hover:text-primary transition-colors",
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
    <p {...props} className={cn("text-xs text-foreground/50", className)}>
      {children}
    </p>
  );
}

/* EXPORT */
const CreatorCard = Object.assign(Root, {
  Avatar,
  AvatarBadge,
  Name,
  Followers,
});

export default CreatorCard;
