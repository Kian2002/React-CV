import React from "react";
import PersonalInformation from "./Input/PersonalInformation";
import Experience from "./Input/Experience";
import Education from "./Input/Education";
import styles from "./styles/home.module.css";
import Output from "./output/Output";
import DefaultStates from "./Input/DefaultStates";

const Home = () => {
  const {
    personalInfo,
    setPersonalInfo,
    experienceInfo,
    setExperienceInfo,
    educationInfo,
    setEducationInfo,
  } = DefaultStates();

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
        <Education
          educationInfo={educationInfo}
          setEducationInfo={setEducationInfo}
        />
      </div>
      <Output
        personalInfo={personalInfo}
        experienceInfo={experienceInfo}
        educationInfo={educationInfo}
      />
    </main>
  );
};

export default Home;
