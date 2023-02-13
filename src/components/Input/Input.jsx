import React, { Fragment } from "react";
import PersonalInformation from "./PersonalInformation";
import Experience from "./Experience";
import Education from "./Education";
import styles from "../styles/input.module.css";

const Input = () => {
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

export default Input;
