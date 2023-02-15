import React, { useState } from "react";

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

  return { personalInfo, setPersonalInfo };
};

export default DefaultStates;
