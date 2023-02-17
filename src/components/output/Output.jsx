import React from "react";
import styles from "../styles/output.module.css";
import { ExperienceOutput } from "./ExperienceOutput";
import PersonalOutput from "./PersonalOutput";

const Output = ({ personalInfo, experienceInfo }) => {
  return (
    <div className={styles.main}>
      <header className={styles.header}>
        <h1>
          {personalInfo.fName} {personalInfo.lName}
        </h1>
        <span>{personalInfo.title}</span>
      </header>

      <div className={styles.wrapper}>
        <div>
          <h1>Description</h1>
          <p>lorem</p>
        </div>

        <ExperienceOutput experienceInfo={experienceInfo} />

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
  );
};

export default Output;
