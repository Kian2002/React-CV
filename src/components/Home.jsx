import React from "react";
import PersonalInformation from "./Input/PersonalInformation";
import Experience from "./Input/Experience";
import Education from "./Input/Education";
import styles from "./styles/home.module.css";
import Output from "./output/Output";

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.input}>
        <PersonalInformation />
        <Experience />
        <Education />
      </div>
      <div className={styles.output}>
        <Output />
      </div>
    </main>
  );
};

export default Home;
