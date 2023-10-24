import React from "react";
import classes from "./HeaderMenu.module.scss";
import { CSSTransition } from "react-transition-group";

const HeaderMenu = ({ show, closeMenuHandler }) => {
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={show}
      timeout={200}
      classNames={{
        enter: "",
        enterActive: classes["menuOpen"],
        exit: "",
        exitActive: classes["menuClose"],
      }}
    >
      <div className={classes["menu"]} onClick={closeMenuHandler}>
        <div className="container">
          <ul
            className={classes["menuList"]}
            onClick={(event) => event.stopPropagation()}
          >
            <li className={classes["menuList--item"]}>
              <a href="/">Home</a>
            </li>
            <li className={classes["menuList--item"]}>
              <a href="/">Order</a>
            </li>
            <li className={classes["menuList--item"]}>
              <a href="/">Contact</a>
            </li>
            <li className={classes["menuList--item"]}>
              <a href="/">Track My Order</a>
            </li>
          </ul>
        </div>
      </div>
    </CSSTransition>
  );
};

export default HeaderMenu;
