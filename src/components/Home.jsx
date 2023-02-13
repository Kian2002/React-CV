import React, { Fragment } from "react";
import PersonalInformation from "./Input/PersonalInformation";
import Experience from "./Input/Experience";
import Education from "./Input/Education";
import styles from "./styles/home.module.css";

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.input}>
        <PersonalInformation />
        <Experience />
        <Education />
      </div>
    </main>
  );
};

export default Home;
