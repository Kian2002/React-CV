import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

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
      id: uuidv4(),
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
