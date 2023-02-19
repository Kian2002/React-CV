import React from "react";
import styles from "../styles/output.module.css";
import EducationOutput from "./EducationOutput";
import { ExperienceOutput } from "./ExperienceOutput";
import PersonalOutput from "./PersonalOutput";

const Output = ({ personalInfo, experienceInfo, educationInfo }) => {
  return (
    <div className={styles.main}>
      <header className={styles.header}>
        <h3>
          {personalInfo.fName} {personalInfo.lName}
        </h3>
        <span>{personalInfo.title}</span>
      </header>

      <div className={styles.wrapper}>
        <div>
          <h3>Description</h3>
          <p>{personalInfo.description}</p>
        </div>

        <ExperienceOutput experienceInfo={experienceInfo} />
        <EducationOutput educationInfo={educationInfo} />
      </div>
      <PersonalOutput personalInfo={personalInfo} />
    </div>
  );
};

export default Output;
