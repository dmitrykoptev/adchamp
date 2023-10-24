import React from "react";
import { CSSTransition } from "react-transition-group";
import classes from "./CartMobile.module.scss";
import CartItem from "./CartItem";
import MainButton from "../Buttons/MainButton";

const CartMobile = ({ show, cart, summary, checkout }) => {
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={show}
      timeout={200}
      classNames={{
        enter: "",
        enterActive: classes.cartOpen,
        exit: "",
        exitActive: classes.cartClose,
      }}
    >
      <div className={classes["cart"]}>
        <div className={classes["container"]}>
          <h2 className={classes["title"]}>Your cart</h2>
          <ul className={classes["itemList"]}>
            {cart.length > 0 &&
              cart.map((item, index) => <CartItem key={index} {...item} />)}
          </ul>
          <div className={classes["modalFooter"]}>
            <div className={classes["estimated"]}>
              <span>Estimated total</span>
              <span>$ {summary}</span>
            </div>
            <MainButton
              title="CHECK OUT"
              modifier="checkout"
              onClick={checkout}
            />
            <p>Tax included. Shipping and discount calculated at checkout.</p>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default CartMobile;
