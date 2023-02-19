import React from "react";
import styles from "../styles/output.module.css";

const EducationOutput = ({ educationInfo }) => {
  return (
    <div className={styles["education-wrapper"]}>
      <h3 className={styles["education-wrapper--h3"]}>Education</h3>
      {educationInfo.map((item) => {
        return (
          <div key={item.id} className={styles["education-wrapper--content"]}>
            <div>
              {item.from} - {item.to}
            </div>
            <div>
              {item.universityName} {item.city}
            </div>
            <div>Degree: {item.degree}</div>
            <div>Subject: {item.subject}</div>
          </div>
        );
      })}
    </div>
  );
};

export default EducationOutput;
