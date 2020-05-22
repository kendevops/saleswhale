import React from "react";
import Card from "./Card";
import Ylogo from "../../img/YC logo.png";
import Slogo from "../../img/STRIVE_logo.png";
import Wlogo from "../../img/wavemaker-350.png";
import Mlogo from "../../img/MHV-logo.png";

import Styles from "./Investors.module.css";

const Investor = () => {
  return (
    <div className={Styles.container}>
      <h1>Our Investors</h1>
      <div className={Styles.card}>
        <Card image={Ylogo} alt="Y Combinator Logo" />
        <Card image={Mlogo} alt="Monk's Hill Logo" />
        <Card image={Slogo} alt="Strive Logo" />
        <Card image={Wlogo} alt="Wave Maker Logo" />
      </div>
    </div>
  );
};

export default Investor;
