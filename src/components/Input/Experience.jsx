import React, { useState } from "react";
import styles from "../styles/home.module.css";
import ExperienceItems from "./ExperienceItems";
import { v4 as uuidv4 } from "uuid";

const Experience = ({ experienceInfo, setExperienceInfo }) => {
  const id = uuidv4();

  const [inputList, setInputList] = useState([
    <ExperienceItems key={id} id={id} setExperienceInfo={setExperienceInfo} />,
  ]);

  const handleAdd = () => {
    const id = uuidv4();
    setInputList([
      ...inputList,
      <ExperienceItems
        key={id}
        id={id}
        setExperienceInfo={setExperienceInfo}
      />,
    ]);
  };

  const handleDelete = (e) => {
    const newInputList = inputList.filter((item) => item.key !== e.target.id);
    setInputList(newInputList);
    const newExperienceInfo = experienceInfo.filter(
      (item) => item.id !== e.target.id
    );
    setExperienceInfo(newExperienceInfo);
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
