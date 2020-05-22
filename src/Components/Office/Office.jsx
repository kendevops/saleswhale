import React from "react";
import Styles from "./Office.module.css";
import Cards from "./Cards";

const Office = () => {
  return (
    <div className={Styles.container}>
      <h1>Our Offices</h1>
      <div className={Styles.cards}>
        <Cards />
        <Cards />
      </div>
    </div>
  );
};

export default Office;
