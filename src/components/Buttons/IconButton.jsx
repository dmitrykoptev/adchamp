import React from "react";
import classes from "./IconButton.module.scss";

const IconButton = ({ icon, onClick }) => {
  return (
    <button className={classes["iconButton"]} onClick={onClick}>
      {icon}
    </button>
  );
};

export default IconButton;
