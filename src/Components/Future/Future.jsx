/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Styles from "./Future.module.css";

const Future = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.card}>
        <h1>See the future</h1>
        <div>
          <a href="#" className={Styles.demo}>
            Get a Demo
          </a>
          <a href="#" className={Styles.cases}>
            Read use cases
          </a>
        </div>
      </div>
    </div>
  );
};

export default Future;
