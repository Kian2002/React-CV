import React from "react";
import styles from "../styles/output.module.css";

const Output = () => {
  return (
    <div>
      <header className={styles.header}> </header>
      <div className={styles.main}>
        <div>
          <div>Experience</div>
          <div>Education</div>
        </div>
        <div>PersonalInformation</div>
      </div>
    </div>
  );
};

export default Output;
