import React from "react";
import Input from "./Input";

const EducationItems = () => {
  return (
    <>
      <Input type="text" name="universityName" placeholder="University name" />
      <Input type="text" name="city" placeholder="City" />
      <Input type="text" name="degree" placeholder="Degree" />
      <Input type="text" name="subject" placeholder="Subject" />
      <Input type="text" name="from" placeholder="From" />
      <Input type="text" name="to" placeholder="To" />
    </>
  );
};

export default EducationItems;
