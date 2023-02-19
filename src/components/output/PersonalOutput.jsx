import React from "react";
import styles from "../styles/output.module.css";

const PersonalOutput = ({ personalInfo }) => {
  return (
    <div className={styles["personal-main"]}>
      <div className={styles["personal-details"]}>
        <h3 className={styles["wrapper__h3"]}>Personal Details</h3>
        <div className={styles["wrapper__content__main"]}>
          <div>
            <h4>Address: </h4>
            {personalInfo.address}
          </div>
          <div>
            <h4>Phone Number: </h4>
            {personalInfo.number}
          </div>
          <div>
            <h4>Email: </h4>
            {personalInfo.email}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalOutput;
