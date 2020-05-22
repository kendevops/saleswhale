import React from "react";
import Styles from "./Investor.module.css";
import Card from "./Card";

const Investor = () => {
  return (
    <div className={Styles.container}>
      <h1>Investor</h1>
      <Card />
    </div>
  );
};

export default Investor;
