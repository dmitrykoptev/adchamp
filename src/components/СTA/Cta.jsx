import React from "react";
import classes from "./Cta.module.scss";
import MainButton from "../Buttons/MainButton";
import cartPicture from "../../assets/images/sneaker1.png";

const Cta = ({ selectedSize, clearSize, addItem }) => {
  const buyNowHandler = () => {
    if (selectedSize === null) {
      return;
    }

    const newItem = {
      name: "AIR JORDAN 1 RETRO HIGH",
      picture: cartPicture,
      size: selectedSize,
      total: 2,
    };

    addItem(newItem);

    clearSize();
  };

  return (
    <div className={classes["cta"]}>
      <MainButton title="BUY NOW" modifier="buyNow" />
      <MainButton
        title="Add to cart"
        modifier="addToCart"
        onClick={buyNowHandler}
      />
    </div>
  );
};

export default Cta;
