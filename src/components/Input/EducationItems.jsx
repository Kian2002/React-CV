import React, { useEffect, useState } from "react";

const EducationItems = ({ setEducationInfo, id }) => {
  const [educationItems, setEducationItems] = useState([
    {
      id: id,
      universityName: "",
      city: "",
      degree: "",
      subject: "",
      from: "",
      to: "",
    },
  ]);

  useEffect(() => {
    setEducationInfo((prevEducationInfo) => {
      const index = prevEducationInfo.findIndex((item) => {
        item.id === id;
      });

      if (index !== -1) {
        const updatedExperienceInfo = [...prevEducationInfo];
        updatedExperienceInfo[index] = educationItems;
        return updatedExperienceInfo;
      } else {
        return [...prevEducationInfo, educationItems];
      }
    });
  }, [educationItems]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEducationItems({
      ...educationItems,
      [name]: value,
    });
  };
  return (
    <>
      <input
        type="text"
        name="universityName"
        placeholder="University name"
        onChange={handleChange}
      />
      <input type="text" name="city" placeholder="City" />
      <input type="text" name="degree" placeholder="Degree" />
      <input type="text" name="subject" placeholder="Subject" />
      <input type="text" name="from" placeholder="From" />
      <input type="text" name="to" placeholder="To" />
    </>
  );
};

export default EducationItems;
