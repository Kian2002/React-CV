import React from "react";
import styles from "../styles/output.module.css";
import EducationOutput from "./EducationOutput";
import { ExperienceOutput } from "./ExperienceOutput";
import PersonalOutput from "./PersonalOutput";

const Output = React.forwardRef(
  ({ personalInfo, experienceInfo, educationInfo }, ref) => {
    return (
      <div className={styles.main} ref={ref}>
        <header className={styles.header}>
          <h3>
            {personalInfo.fName} {personalInfo.lName}
          </h3>
          <span>{personalInfo.title}</span>
        </header>

        <div className={styles.wrapper}>
          <div className={styles["wrapper__main"]}>
            <h3 className={styles["wrapper__h3"]}>Description</h3>
            <p>{personalInfo.description}</p>
          </div>

          <ExperienceOutput experienceInfo={experienceInfo} />
          <EducationOutput educationInfo={educationInfo} />
        </div>
        <PersonalOutput personalInfo={personalInfo} />
      </div>
    );
  }
);

Output.displayName = "Output";

export default Output;
