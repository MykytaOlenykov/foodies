import { useState } from "react";
import placeholder from "../../assets/images/placeholder.svg";

const Image = ({ src, alt, className, ...props }) => {
  const [imgSrc, setImgSrc] = useState(src || placeholder);

  const handleError = () => {
    setImgSrc(placeholder);
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      {...props}
    />
  );
};

export { Image }
