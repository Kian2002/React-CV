import React, { useState } from "react";
import styles from "../styles/home.module.css";
import { v4 as uuidv4 } from "uuid";
import EducationItems from "./EducationItems";

const Education = () => {
  const [inputList, setInputList] = useState([
    <EducationItems key={uuidv4()} />,
  ]);

  const handleAdd = () => {
    setInputList([...inputList, <EducationItems key={uuidv4()} />]);
  };

  const handleDelete = (e) => {
    const id = e.target.id;
    const newList = inputList.filter((item) => item.key !== id);
    setInputList(newList);
  };

  return (
    <div className={styles.wrapper}>
      <h1>Education</h1>
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
