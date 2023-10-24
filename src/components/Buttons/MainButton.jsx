import React from "react";
import classes from "./MainButton.module.scss";

const MainButton = ({ title, onClick, modifier }) => {
  return (
    <button
      className={`${classes["main-button"]} ${
        classes[`main-button--${modifier}`]
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default MainButton;
