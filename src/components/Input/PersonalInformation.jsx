import React from "react";
import styles from "../styles/home.module.css";

const PersonalInformation = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Personal Information</h1>
      <div className={styles["input-wrapper"]}>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="Title" />
        <input type="file" placeholder="Photo" />
        <input type="address" placeholder="Address" />
        <input type="number" placeholder="Phone Number" maxLength="10" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Description"></input>
      </div>
    </div>
  );
};

export default PersonalInformation;
