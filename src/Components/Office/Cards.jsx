import React from "react";
import Styles from "./Office.module.css";
import image from "../../img/sinon.png";

const Cards = (props) => {
  return (
    <div className={Styles.cardDetails}>
      <img src={image} alt="sinon" />
      <h2>{props.name}</h2>
      <div>
        <h4>{props.address}</h4>
      </div>
    </div>
  );
};

export default Cards;
