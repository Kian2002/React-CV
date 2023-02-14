import React from "react";

const PersonalOutput = ({ personalInfo }) => {
  return (
    <div>
      <h1>Personal Information</h1>
      <div>
        <span>{personalInfo.address}</span>
        <span>{personalInfo.number}</span>
        <span>{personalInfo.email}</span>
      </div>
    </div>
  );
};

export default PersonalOutput;
