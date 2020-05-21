import React from "react";
import Styles from "./Mission.module.css";
import Culture from "./Culture";

const Mission = () => {
  return (
    <section className={Styles.container}>
      <div className={Styles.heading}>
        <h1>Our Culture</h1>
        <h3>
          At Saleswhale, we encourage everyone to grow and innovate, while
          having fun in the process.
        </h3>
      </div>
      <div className={Styles.cultures}>
        <Culture
          name="Building for the future"
          description="We always challenge the status quo and work hard innovating on a product that not only works, but changes the game for our users."
        />
        <Culture
          name="Building for the future"
          description="We always challenge the status quo and work hard innovating on a product that not only works, but changes the game for our users."
        />
        <Culture
          name="Building for the future"
          description="We always challenge the status quo and work hard innovating on a product that not only works, but changes the game for our users."
        />
      </div>
    </section>
  );
};

export default Mission;
