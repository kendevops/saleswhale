/* eslint-disable jsx-a11y/anchor-is-valid */
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
          name="Promoting trust & transparency"
          description="We remain completely open, honest and transparent with everyone. This has allowed us to build strong relationships with each other."
        />
        <Culture
          name="Achieving our very best"
          description="We believe the success of the company lies within our employees and we constantly challenge each other to learn and level up."
        />
      </div>
      <div className={Styles.join}>
        <p>
          If you are excited by our vision of the future, and want to solve
          meaningful problems, talk to us!
        </p>
        <a href="#">Join the team</a>
      </div>
    </section>
  );
};

export default Mission;
