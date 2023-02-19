import React from "react";
import styles from "../styles/output.module.css";

const EducationOutput = ({ educationInfo }) => {
  return (
    <div className={styles["wrapper__main"]}>
      <h3 className={styles["wrapper__h3"]}>Education</h3>
      {educationInfo.map((item) => {
        return (
          <div key={item.id} className={styles["wrapper__content"]}>
            <div className={styles["wrapper__content__date"]}>
              {item.from} - {item.to}
            </div>
            <div className={styles["wrapper__content__main"]}>
              <div>
                <h4>
                  {item.universityName}, {item.city}
                </h4>

                <span>Degree: {item.degree}</span>
                <span>Subject: {item.subject}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EducationOutput;
