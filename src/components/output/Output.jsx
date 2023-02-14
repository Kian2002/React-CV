import React from "react";
import styles from "../styles/output.module.css";
import PersonalOutput from "./PersonalOutput";

const Output = ({ personalInfo }) => {
  return (
    <div>
      <header className={styles.header}> </header>
      <div className={styles.main}>
        <div>
          <div>
            <h1>Description</h1>
            <p>lorem</p>
          </div>
          <div>
            <h1>Experience</h1>
            <span>From - To</span>
            <span>Position-Company-City</span>
          </div>
          <div>
            <h1>Education</h1>
            <span>From - To</span>
            <span>Name-City</span>
            <span>Degree</span>
            <span>Subject</span>
          </div>
        </div>

        <PersonalOutput personalInfo={personalInfo} />
      </div>
    </div>
  );
};

export default Output;
