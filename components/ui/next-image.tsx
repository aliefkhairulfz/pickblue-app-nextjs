import { cn } from "@/utils/cn";
import Image from "next/image";
import { ComponentPropsWithoutRef } from "react";

type NextImage = ComponentPropsWithoutRef<"div"> & {
  src: string;
  alt: string;
};

type NextImageProps = {
  className?: string;
  src: string;
  alt: string;
  sizes?: string;
} & React.ComponentPropsWithoutRef<"div">;

function NextImage({
  className,
  src,
  alt,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px",
  ...props
}: NextImageProps) {
  return (
    <div
      {...props}
      data-slot="next-image-wrapper"
      className={cn("relative size-full overflow-hidden", className)}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover group-hover:scale-110 transition-all duration-700"
      />
    </div>
  );
}

export default NextImage;
