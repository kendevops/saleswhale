import React from "react";
import Details from "./Details";
import Styles from "./Timeline.module.css";

const Timeline = () => {
  return (
    <section className={Styles.timeline}>
      <h1>Our Progress</h1>
      <div className={Styles.container}>
        <ul>
          <Details
            date="2015"
            description="Founded in Singapore by Gabriel Lim, Ethan Le, and Venus Wong"
          />
          <Details
            date="2016"
            description="Accepted into Y Combinator (S16) and moved to San Francisco"
          />
          <Details
            date="2017"
            description="Raised US$1.2M in seed funding and hired core engineers"
          />
          <Details
            date="2019"
            description="Raised US$5.3M in Series A and expanded team size"
          />
          <Details
            date="2020"
            description="Opened US office in Washington, DC and hired US sales team"
          />
        </ul>
      </div>
    </section>
  );
};

export default Timeline;
