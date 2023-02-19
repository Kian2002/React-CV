import React from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "../styles/output.module.css";

export const ExperienceOutput = ({ experienceInfo }) => {
  return (
    <div className={styles["wrapper__main"]}>
      <h3 className={styles["wrapper__h3"]}>Experience</h3>
      {experienceInfo.map((item) => {
        return (
          <div key={uuidv4()} className={styles["wrapper__content"]}>
            <h4 className={styles["wrapper__content__date"]}>
              {item.from} - {item.to}
            </h4>

            <div className={styles["wrapper__content__main"]}>
              <h4>{item.position}</h4>
              <div>
                {item.company}, {item.city}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
