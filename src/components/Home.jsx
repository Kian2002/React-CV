import React from "react";
import PersonalInformation from "./Input/PersonalInformation";
import Experience from "./Input/Experience";
import Education from "./Input/Education";
import styles from "./styles/home.module.css";
import Output from "./output/Output";
import DefaultStates from "./Input/DefaultStates";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const { personalInfo, setPersonalInfo, experienceInfo, setExperienceInfo } =
    DefaultStates();

  return (
    <main className={styles.main}>
      <div className={styles.input}>
        <PersonalInformation
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
        />
        <Experience
          experienceInfo={experienceInfo}
          setExperienceInfo={setExperienceInfo}
        />
        <Education />
      </div>
      <div className={styles.output}>
        <Output personalInfo={personalInfo} />
        {experienceInfo.map((item) => {
          return (
            <div key={uuidv4()}>
              <span>{item.position}</span>
              <span>{item.company}</span>
              <span>{item.city}</span>
              <span>{item.from}</span>
              <span>{item.to}</span>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Home;
