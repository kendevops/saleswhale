import React from "react";
// import image from "../../img/envelop.png";
import Styles from "./Timeline.module.css";

const Details = (props) => {
  return (
    <li>
      <div className={Styles.detail}>
        <span>{props.date}</span>
        <div className={Styles.info}>{props.description}</div>
      </div>
    </li>
  );
};

export default Details;
