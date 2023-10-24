import React from "react";
import classes from "./CartDesktop.module.scss";
import ModalContainer from "../Modals/ModalContainer";
import MainButton from "../Buttons/MainButton";
import CartItem from "./CartItem";

const CartDesktop = ({ show, closeModalHandler, cart, summary, checkout }) => {
  return (
    <>
      <ModalContainer show={show} closeModalHandler={closeModalHandler}>
        <h2 className={classes["title"]}>Your cart</h2>
        <div className={classes["container"]}>
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
      </ModalContainer>
    </>
  );
};

export default CartDesktop;
