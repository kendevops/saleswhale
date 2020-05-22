import React from "react";
import Styles from "./Office.module.css";
import Cards from "./Cards";

const Office = () => {
  return (
    <div className={Styles.container}>
      <h1>Our Offices</h1>
      <div className={Styles.cards}>
        <Cards
          name="Singapore"
          address="155B Telok Ayer Street Singapore, 068611"
        />
        <Cards
          name="Washington DC"
          address="1701 Rhode Island Ave NW Washington, DC 20036"
        />
      </div>
    </div>
  );
};

export default Office;
