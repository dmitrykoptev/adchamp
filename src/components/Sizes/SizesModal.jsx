import React from "react";
import classes from "./SizesModal.module.scss";
import ModalContainer from "../Modals/ModalContainer";
import sizes from "../../assets/images/sizes.png";

const SizesModal = ({ show, closeModalHandler }) => {
  return (
    <ModalContainer show={show} closeModalHandler={closeModalHandler}>
      <h2 className={classes.title}>Size guide</h2>

      <div className={classes.container}>
        <img src={sizes} alt="Size guide" />
      </div>
    </ModalContainer>
  );
};

export default SizesModal;
