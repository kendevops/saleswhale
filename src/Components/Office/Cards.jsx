import React from "react";
import Styles from "./Office.module.css";
import image from "../../img/sinon.png";

const Cards = (props) => {
  return (
    <div className={Styles.cardDetails}>
      <img src={image} alt="sinon" />
      <h2>Singapore</h2>
      <h4>155B Telok Ayer Street Singapore, 068611</h4>
    </div>
  );
};

export default Cards;
