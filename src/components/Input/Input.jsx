import React, { Fragment } from "react";
import PersonalInformation from "./PersonalInformation";
import Experience from "./Experience";
import Education from "./Education";

const Input = () => {
  return (
    <form>
      <PersonalInformation />
      <Experience />
      <Education />
    </form>
  );
};

export default Input;
