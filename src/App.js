import React from "react";
import styles from "./App.module.css";

import {
  Header,
  Mission,
  Timeline,
  Office,
  Investors,
  Future,
  Footer,
} from "./Components";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Mission />
      <Timeline />
      <Office />
      <Investors />
      <Future />
      <Footer />
    </div>
  );
}

export default App;
