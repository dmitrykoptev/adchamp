import React from "react";
import classes from "./Cart.module.scss";
import CartMobile from "./CartMobile";
import CartDesktop from "./CartDesktop";

const Cart = ({ show, closeModalHandler, cart, clearCart }) => {
  const checkout = () => {
    clearCart();
    closeModalHandler();
  };

  const summary = cart.reduce((acc, cur) => {
    return acc + cur.total;
  }, 0);

  return (
    <>
      <div className={classes["desktop"]}>
        <CartDesktop
          show={show}
          closeModalHandler={closeModalHandler}
          cart={cart}
          checkout={checkout}
          summary={summary}
        />
      </div>
      <div className={classes["mobile"]}>
        <CartMobile
          show={show}
          cart={cart}
          checkout={checkout}
          summary={summary}
        />
      </div>
    </>
  );
};

export default Cart;
