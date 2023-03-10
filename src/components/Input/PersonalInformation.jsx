import React from "react";
import styles from "../styles/home.module.css";

const PersonalInformation = ({ personalInfo, setPersonalInfo }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({
      ...personalInfo,
      [name]: value,
    });
  };

  return (
    <div className={styles.wrapper}>
      <h3>Personal Information</h3>
      <div className={styles["input-wrapper"]}>
        <input
          type="text"
          placeholder="First Name"
          name="fName"
          onChange={handleChange}
          value={personalInfo.fName}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lName"
          onChange={handleChange}
          value={personalInfo.lName}
        />
        <input
          type="text"
          placeholder="Title"
          name="title"
          onChange={handleChange}
          value={personalInfo.title}
        />
        <input
          type="address"
          placeholder="Address"
          name="address"
          onChange={handleChange}
          value={personalInfo.address}
        />
        <input
          type="number"
          placeholder="Phone Number"
          maxLength="10"
          name="number"
          onChange={handleChange}
          value={personalInfo.number}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={personalInfo.email}
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          onChange={handleChange}
          value={personalInfo.description}
        />
      </div>
    </div>
  );
};

export default PersonalInformation;
