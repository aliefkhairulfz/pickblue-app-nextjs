import { cn } from "@/utils/cn";
import Image from "next/image";
import { ComponentPropsWithoutRef } from "react";

function Root({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      {...props}
      className={cn(
        "w-full overflow-hidden rounded-xl border border-border bg-background/60 backdrop-blur hover:shadow-lg hover:shadow-primary/10 transition-all duration-800 hover:border-primary/50 cursor-pointer",
        className,
      )}
    />
  );
}

function ImageWrapper({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-[260px] w-full overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover hover:scale-110 transition-all duration-600"
      />
    </div>
  );
}

function Content({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div {...props} className={cn("flex flex-col gap-3 p-4", className)} />
  );
}

function Header({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      {...props}
      className={cn("flex items-start justify-between", className)}
    />
  );
}

function Title({ className, ...props }: ComponentPropsWithoutRef<"h3">) {
  return <h3 {...props} className={cn("text-lg font-semibold", className)} />;
}

function Author({ className, ...props }: ComponentPropsWithoutRef<"p">) {
  return (
    <p {...props} className={cn("text-sm text-foreground/50", className)} />
  );
}

function Price({ className, ...props }: ComponentPropsWithoutRef<"span">) {
  return (
    <span
      {...props}
      className={cn("text-lg font-semibold text-primary", className)}
    />
  );
}

function Category({ className, ...props }: ComponentPropsWithoutRef<"span">) {
  return (
    <span
      {...props}
      className={cn(
        "w-fit rounded-md bg-neutral px-2 py-1 text-xs text-neutral-content",
        className,
      )}
    />
  );
}

const ArtworkCard = Object.assign(Root, {
  Image: ImageWrapper,
  Content,
  Header,
  Title,
  Author,
  Price,
  Category,
});

export default ArtworkCard;
