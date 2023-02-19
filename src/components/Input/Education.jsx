import React, { useState } from "react";
import styles from "../styles/home.module.css";
import { v4 as uuidv4 } from "uuid";
import EducationItems from "./EducationItems";

const Education = ({ educationInfo, setEducationInfo }) => {
  const id = uuidv4();
  const [inputList, setInputList] = useState([
    <EducationItems key={id} id={id} setEducationInfo={setEducationInfo} />,
  ]);

  const handleAdd = () => {
    const id = uuidv4();
    setInputList([
      ...inputList,
      <EducationItems key={id} id={id} setEducationInfo={setEducationInfo} />,
    ]);
  };

  const handleDelete = (e) => {
    const id = e.target.id;
    const newList = inputList.filter((item) => item.key !== id);
    setInputList(newList);

    const newEducationInfo = educationInfo.filter((item) => {
      item.id !== id;
    });

    setEducationInfo(newEducationInfo);
  };

  return (
    <div className={styles.wrapper}>
      <h3>Education</h3>
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

export default Education;
