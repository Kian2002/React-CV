import React, { useState } from "react";
import styles from "../styles/home.module.css";
import Input from "./Input";

const Education = () => {
  const [inputList, setInputList] = useState([
    <Input placeholder="Position" type="text" />,
    <Input placeholder="Position" type="text" />,
    <Input placeholder="Position" type="text" />,
    <Input placeholder="Position" type="text" />,
    <Input placeholder="Position" type="text" />,
    <Input placeholder="Position" type="text" />,
  ]);

  const handleAdd = () => {
    setInputList((prev) => {
      return [...prev, inputList];
    });
  };
  return (
    <div className={styles.wrapper}>
      <h1>Education</h1>
      <div className={styles["input-wrapper"]}>
        {inputList.map((i) => {
          return i;
        })}
        <button>Delete</button>
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
};

export default Education;
