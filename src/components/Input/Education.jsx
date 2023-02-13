import React from "react";
import styles from "../styles/input.module.css";

const Education = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Education</h1>
      <div className={styles["input-wrapper"]}>
        <input type="text" placeholder="University Name" />
        <input type="text" placeholder="City" />
        <input type="text" placeholder="Degree" />
        <input type="text" placeholder="Subject" />
        <input type="text" placeholder="From" />
        <input type="text" placeholder="To" />
      </div>
    </div>
  );
};

export default Education;
