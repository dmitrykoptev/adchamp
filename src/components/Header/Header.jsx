import React, { useEffect, useState } from "react";
import classes from "./Header.module.scss";
import logo from "../../assets/images/logo.png";
import IconButton from "../Buttons/IconButton";
import Cart from "../Cart/Cart";
import HeaderMenu from "./HeaderMenu";

const Header = ({ cart, checkout }) => {
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleCart = () => {
    if (showMenu === false && showCart === false) {
      setShowCart(true);
    } else if (showMenu === true && showCart === false) {
      setShowMenu(!showMenu);
      setShowCart(true);
    }
  };

  const toggleMenu = () => {
    if (showMenu === false && showCart === false) {
      setShowMenu(!showMenu);
    } else if (showMenu === false && showCart === true) {
      setShowCart(!showCart);
    } else if (showMenu === true) {
      setShowMenu(!showMenu);
    }
  };

  const [mobile, setMobile] = useState(window.innerWidth < 700);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 700);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className={classes["header"]}>
        <div className="container">
          <nav>
            <div className={classes["logoSide"]}>
              <IconButton
                icon={
                  <div
                    className={`${classes["menuIcon"]} ${
                      (!showMenu && !showCart) || (!mobile && showCart)
                        ? classes["menuIcon--burger"]
                        : classes["menuIcon--close"]
                    }`}
                  ></div>
                }
                onClick={toggleMenu}
              />
              <img src={logo} alt="Foot locker" />
            </div>
            <IconButton
              icon={
                <div
                  className={`${classes["menuIcon"]} ${classes["menuIcon--cart"]}`}
                >
                  {cart.length > 0 && (
                    <div className={classes["cartCount"]}>{cart.length}</div>
                  )}
                </div>
              }
              onClick={toggleCart}
            />
          </nav>
        </div>
      </header>
      <HeaderMenu
        show={showMenu}
        closeMenuHandler={() => {
          setShowMenu(false);
        }}
      />
      <Cart
        show={showCart}
        closeModalHandler={() => {
          setShowCart(false);
        }}
        cart={cart}
        clearCart={checkout}
      />
    </>
  );
};

export default Header;
