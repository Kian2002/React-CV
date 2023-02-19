import React from "react";
import PersonalInformation from "./Input/PersonalInformation";
import Experience from "./Input/Experience";
import Education from "./Input/Education";
import styles from "./styles/home.module.css";
import Output from "./output/Output";
import DefaultStates from "./Input/DefaultStates";
import { useReactToPrint } from "react-to-print";

const Home = () => {
  const {
    personalInfo,
    setPersonalInfo,
    experienceInfo,
    setExperienceInfo,
    educationInfo,
    setEducationInfo,
  } = DefaultStates();

  const componentRef = React.useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,

    pageStyle: `

    @page {
      size: A4;
      margin: 0;
    }
    @media print {
      html, body {
        width: 210mm;
        height: 297mm;
      }
    }
    `,

    documentTitle: "CV",
  });

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
        <button className={styles.button} onClick={handlePrint}>
          Print
        </button>
      </div>
      <Output
        personalInfo={personalInfo}
        experienceInfo={experienceInfo}
        educationInfo={educationInfo}
        ref={componentRef}
      />
    </main>
  );
};

export default Home;
