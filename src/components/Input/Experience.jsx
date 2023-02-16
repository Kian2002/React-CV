import React, { useState } from "react";
import styles from "../styles/home.module.css";
import ExperienceItems from "./ExperienceItems";
import { v4 as uuidv4 } from "uuid";

const Experience = ({ experienceInfo, setExperienceInfo }) => {
  const [inputList, setInputList] = useState([
    <ExperienceItems
      key={uuidv4()}
      experienceInfo={experienceInfo}
      setExperienceInfo={setExperienceInfo}
    />,
  ]);

  const handleAdd = () => {
    setInputList([
      ...inputList,
      <ExperienceItems
        key={uuidv4()}
        experienceInfo={experienceInfo}
        setExperienceInfo={setExperienceInfo}
      />,
    ]);
  };

  const handleDelete = (e) => {
    const id = e.target.id;
    const newList = inputList.filter((item) => item.key !== id);
    setInputList(newList);
  };

  return (
    <div className={styles.wrapper}>
      <h1>Experience</h1>
      {inputList.map((item) => {
        return (
          <div key={item.key} className={styles["input-wrapper"]}>
            {item}
            <button id={item.key} onClick={handleDelete}>
              Delete
            </button>
          </div>
        );
      })}
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Experience;
