import React from "react";

const EducationItems = ({ setEducationItem }) => {
  return (
    <>
      <input type="text" name="universityName" placeholder="University name" />
      <input type="text" name="city" placeholder="City" />
      <input type="text" name="degree" placeholder="Degree" />
      <input type="text" name="subject" placeholder="Subject" />
      <input type="text" name="from" placeholder="From" />
      <input type="text" name="to" placeholder="To" />
    </>
  );
};

export default EducationItems;
