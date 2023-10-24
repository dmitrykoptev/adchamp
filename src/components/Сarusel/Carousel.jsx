import React, { useState } from "react";
import classes from "./Carousel.module.scss";
import image1 from "../../assets/images/sneaker1.png";
import image2 from "../../assets/images/sneaker2.png";
import image3 from "../../assets/images/sneaker3.png";
import image4 from "../../assets/images/sneaker4.png";
import image5 from "../../assets/images/sneaker5.png";

export default function Carousel() {
  const images = [image1, image2, image3, image4, image5];

  const [current, setCurrent] = useState(0);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div className={classes["carousel"]}>
      <div className={classes["carousel-image"]}>
        <img src={images[current]} alt={`Sneakers ${current}`} />
      </div>
      <div className={classes["dots"]}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${classes["dot"]} ${
              index === current ? classes["dot--active"] : ""
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
