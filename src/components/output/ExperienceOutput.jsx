import React from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "../styles/output.module.css";

export const ExperienceOutput = ({ experienceInfo }) => {
  return (
    <div className={styles.experience}>
      <h3>Experience</h3>
      {experienceInfo.map((item) => {
        return (
          <div key={uuidv4()} className={styles.experienceItems}>
            <div className={styles.fromTo}>
              {item.from} {item.position != "" && "-"} {item.to}
            </div>

            <div className={styles.experiencePosition}>
              <div>{item.position}</div>
              <div>
                <span>{item.company}</span>
                <span>{item.city}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
