import React, { useEffect, useState } from "react";

const EducationItems = ({ setEducationInfo, id }) => {
  const [educationItems, setEducationItems] = useState({
    id: id,
    universityName: "",
    city: "",
    degree: "",
    subject: "",
    from: "",
    to: "",
  });

  useEffect(() => {
    setEducationInfo((prevEducationInfo) => {
      const index = prevEducationInfo.findIndex((item) => item.id === id);
      if (index !== -1) {
        const updatedEducationInfo = [...prevEducationInfo];
        updatedEducationInfo[index] = educationItems;
        return updatedEducationInfo;
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
        value={educationItems.universityName}
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        onChange={handleChange}
        value={educationItems.city}
      />
      <input
        type="text"
        name="degree"
        placeholder="Degree"
        onChange={handleChange}
        value={educationItems.degree}
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        onChange={handleChange}
        value={educationItems.subject}
      />
      <input
        type="text"
        name="from"
        placeholder="From"
        onChange={handleChange}
        value={educationItems.from}
      />
      <input
        type="text"
        name="to"
        placeholder="To"
        onChange={handleChange}
        value={educationItems.to}
      />
    </>
  );
};

export default EducationItems;
