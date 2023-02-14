import React from "react";
import Input from "./Input";

const ExperienceItems = () => {
  return (
    <>
      <Input type="text" name="universityName" placeholder="Position" />
      <Input type="text" name="city" placeholder="Company" />
      <Input type="text" name="degree" placeholder="City" />
      <Input type="text" name="subject" placeholder="From" />
      <Input type="text" name="from" placeholder="To" />
    </>
  );
};

export default ExperienceItems;
