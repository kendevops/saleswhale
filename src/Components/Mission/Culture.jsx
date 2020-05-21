import React from "react";
import image from "../../img/you_glasses 4.png";
import Styles from "./Mission.module.css";

const Culture = (props) => {
  return (
    <div className={Styles.card}>
      <img src={image} alt="lady face" />
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </div>
  );
};

export default Culture;
