import React, { useState } from "react";
import classes from "./Sizes.module.scss";
import SizesModal from "./SizesModal";

const sizes = [
  "UK 5.5",
  "UK 6",
  "UK 6.5",
  "UK 7",
  "UK 7.5",
  "UK 8",
  "UK 8.5",
  "UK 9",
  "UK 9.5",
  "UK 10",
  "UK 10.5",
  "UK 11",
  "UK 11.5",
  "UK 12",
  "UK 13",
  "UK 14",
];

const Sizes = ({ selectSize }) => {
  const [showGuide, setShowGuide] = useState(false);

  const handleClick = (size) => {
    selectSize(size);
  };

  return (
    <>
      <div className={classes["sizes"]}>
        <div className={classes["sizes-title"]}>
          <span>Select Size</span>
          <span
            className={classes["guide"]}
            onClick={() => {
              setShowGuide(true);
            }}
          >
            Size Guide
          </span>
        </div>
        <ul className={classes["sizes-list"]}>
          {sizes.map((size) => (
            <li
              key={size}
              className={classes["size"]}
              onClick={() => {
                handleClick(size);
              }}
            >
              {size}
            </li>
          ))}
        </ul>
      </div>
      <SizesModal
        show={showGuide}
        closeModalHandler={() => {
          setShowGuide(false);
        }}
      />
    </>
  );
};

export default Sizes;
