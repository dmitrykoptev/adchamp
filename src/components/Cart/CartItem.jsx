import React from "react";
import classes from "./CartItem.module.scss";
const CartItem = ({ picture, name, size, total }) => {
  return (
    <div className={classes["cartItem"]}>
      <img src={picture} alt="Your item" />
      <div className={classes["info"]}>
        <p>{name}</p>
        <p>
          Size: <span>{size}</span>
        </p>
        <p>
          Total: <span>$ {total}</span>
        </p>
      </div>
    </div>
  );
};

export default CartItem;
