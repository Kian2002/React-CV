import React from "react";
import styles from "../styles/output.module.css";

const PersonalOutput = ({ personalInfo }) => {
  return (
    <div className={styles.personalMain}>
      <h3>Personal Details</h3>
      <div>
        <span>{personalInfo.address}</span>
        <span>{personalInfo.number}</span>
        <span>{personalInfo.email}</span>
      </div>
    </div>
  );
};

export default PersonalOutput;
