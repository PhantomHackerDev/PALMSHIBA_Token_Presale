import React from "react";
import styled from "styled-components";

type ImageProps = {
  className?: string;
} & React.ImgHTMLAttributes<HTMLImageElement>;

const Image = (props: ImageProps) => {
  const { className } = props;
  return (
    <ImageComp
      {...props}
      className={`object-contain ${className}`}
      decoding="async"
    />
  );
};

const ImageComp = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

export default Image;
