import { cn } from "~/lib/utils";

interface ImageFrameProps {
  src: string;
  alt?: string;
  className?: string;
  classNames?: {
    base?: string;
    image?: string;
  };
}

const ImageFrame = ({
  src,
  className,
  classNames,
  alt
}: ImageFrameProps) => {
  return (
    <div className={cn("overflow-hidden", className, classNames?.base)}>
      <img
        src={src}
        alt={alt}
        className={cn("h-full w-full object-cover", classNames?.image)}
      />
    </div>
  );
};

export default ImageFrame;
