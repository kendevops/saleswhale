import React from "react";
import Ylogo from "../../img/YC logo.png";

import Styles from "./Investors.module.css";

const Card = () => {
  return (
    <div className={Styles.cardDetail}>
      <img src={Ylogo} alt="Y Combinator Logo" />
    </div>
  );
};

export default Card;
