import React, { FC } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

interface ImageProps {
  images: string[];
}

const ImageCarousel: FC<ImageProps> = (props) => {
  return (
    <Carousel showIndicators={false} swipeable={true} emulateTouch={true}>
      {props.images.map((image, index) => (
        <div key={index}>
          <img src={image} style={{ maxHeight: "800px", width: "auto" }} />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
