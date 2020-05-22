import React from "react";
import Styles from "./Investors.module.css";
import Card from "./Card";
import Ylogo from "../../img/YC logo.png";
import Slogo from "../../img/STRIVE_logo.png";
import Wlogo from "../../img/wavemaker-350.png";
import Mlogo from "../../img/MHV-logo.png";

const Investor = () => {
  return (
    <div className={Styles.container}>
      <h1>Our Investors</h1>
      <div className={Styles.card}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Investor;
