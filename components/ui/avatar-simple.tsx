import Image from "next/image";
import { cn } from "@/utils/cn";
import { ComponentPropsWithoutRef } from "react";

function Root({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      {...props}
      className={cn(
        "flex flex-col items-center gap-0.5 text-center cursor-pointer group",
        className,
      )}
    />
  );
}

function Avatar({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative size-20 rounded-full border border-border overflow-hidden hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-800",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover group-hover:scale-110 transition-all duration-800"
      />
    </div>
  );
}

function Name({ className, ...props }: ComponentPropsWithoutRef<"p">) {
  return <p {...props} className={cn("font-semibold text-md", className)} />;
}

function Followers({ className, ...props }: ComponentPropsWithoutRef<"p">) {
  return (
    <p {...props} className={cn("text-xs text-foreground/50", className)} />
  );
}

const CreatorCard = Object.assign(Root, {
  Avatar,
  Name,
  Followers,
});

export default CreatorCard;
