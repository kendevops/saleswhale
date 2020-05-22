import React from "react";
import Styles from "./Footer.module.css";

const List = (props) => {
  return (
    <div className={Styles.list}>
      <h3>{props.header}</h3>
      <ul>
        <li>{props.item1}</li>
        <li>{props.item2}</li>
        <li>{props.item3}</li>
        <li>{props.item4}</li>
        <li>{props.item5}</li>
        <li>{props.item6}</li>
      </ul>
    </div>
  );
};

export default List;
