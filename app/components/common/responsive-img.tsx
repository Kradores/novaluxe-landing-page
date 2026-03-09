interface ResponsiveImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "srcSet"> {
  path: string;
  fileName: string;
  fileExtension: string;
  sizesSet: number[];
}

const ResponsiveImage = ({ path, fileName, fileExtension, sizesSet, sizes = "100vw", ...props }: ResponsiveImageProps) => {
  return (
    <img
      sizes={sizes}
      srcSet={sizesSet.map((size) => `${path}/${fileName}-${size}.${fileExtension} ${size}w`).join(", ")}
      {...props}
    />
  );
}

export { ResponsiveImage };