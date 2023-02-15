import React, { useState } from "react";
import PersonalInformation from "./Input/PersonalInformation";
import Experience from "./Input/Experience";
import Education from "./Input/Education";
import styles from "./styles/home.module.css";
import Output from "./output/Output";
import DefaultStates from "./Input/DefaultStates";
const Home = () => {
  const { personalInfo, setPersonalInfo } = DefaultStates();
  return (
    <main className={styles.main}>
      <div className={styles.input}>
        <PersonalInformation
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
        />
        <Experience />
        <Education />
      </div>
      <div className={styles.output}>
        <Output personalInfo={personalInfo} />
      </div>
    </main>
  );
};

export default Home;
