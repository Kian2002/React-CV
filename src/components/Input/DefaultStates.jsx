import { useState } from "react";

const DefaultStates = () => {
  const [personalInfo, setPersonalInfo] = useState({
    fName: "",
    lName: "",
    title: "",
    address: "",
    number: "",
    email: "",
    description: "",
  });

  const [experienceInfo, setExperienceInfo] = useState([]);

  const [educationInfo, setEducationInfo] = useState([]);

  return {
    personalInfo,
    setPersonalInfo,
    experienceInfo,
    setExperienceInfo,
    educationInfo,
    setEducationInfo,
  };
};

export default DefaultStates;
