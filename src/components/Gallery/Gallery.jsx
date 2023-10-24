import React from "react";
import classes from "./Gallery.module.scss";
import image1 from "../../assets/images/smallSneaker2.png";
import image2 from "../../assets/images/smallSneaker3.png";
import image3 from "../../assets/images/smallSneaker4.png";

const Gallery = () => {
  const images = [image1, image2, image3];

  return (
    <div className={classes["gallery"]}>
      <h3>Lifestyle</h3>
      <div className={classes["gallery-pictures"]}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Lifestyle ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
