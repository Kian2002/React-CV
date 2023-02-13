import React from "react";
import styles from "../styles/home.module.css";

const Experience = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Experience</h1>
      <div className={styles["input-wrapper"]}>
        <input type="text" placeholder="Position" />
        <input type="text" placeholder="Company" />
        <input type="text" placeholder="City" />
        <input type="text" placeholder="From" />
        <input type="text" placeholder="To" />
      </div>
    </div>
  );
};

export default Experience;
