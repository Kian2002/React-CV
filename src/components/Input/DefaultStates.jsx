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

  const [experienceInfo, setExperienceInfo] = useState([
    {
      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
    },
  ]);

  return { personalInfo, setPersonalInfo, experienceInfo, setExperienceInfo };
};

export default DefaultStates;