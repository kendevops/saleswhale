import React from "react";

import Styles from "./Investors.module.css";

const Card = (props) => {
  return (
    <div className={Styles.cardDetail}>
      <img src={props.image} alt={props.alt} />
    </div>
  );
};

export default Card;
