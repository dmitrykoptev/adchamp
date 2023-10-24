import React from "react";
import { CSSTransition } from "react-transition-group";
import classes from "./ModalContainer.module.scss";

const ModalContainer = ({ show, closeModalHandler, children }) => {
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={show}
      timeout={300}
      classNames={{
        enter: "",
        enterActive: classes["openModal"],
        exit: "",
        exitActive: classes["closeModal"],
      }}
    >
      <div onClick={closeModalHandler} className={classes["backdrop"]}>
        <div onClick={(e) => e.stopPropagation()} className={classes["modal"]}>
          <span onClick={closeModalHandler} className={classes["close"]} />
          <div>{children}</div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default ModalContainer;
