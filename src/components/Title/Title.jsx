import React from "react";
import classes from "./Title.module.scss";
const Title = () => {
  return (
    <div>
      <h1>AIR JORDAN 1 RETRO HIGH "UNIVERSITY BLUE"</h1>
      <div className={classes["price"]}>
        <span className={classes["previous"]}>$ 55</span>
        <span className={classes["current"]}>$ 2</span>
        <div className={classes["discount"]}>98% sale</div>
      </div>
    </div>
  );
};

export default Title;
