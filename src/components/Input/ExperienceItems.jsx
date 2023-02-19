import React, { useEffect, useState } from "react";

const ExperienceItems = ({ setExperienceInfo, id }) => {
  const [experienceItems, setExperienceItems] = useState({
    id: id,
    position: "",
    company: "",
    city: "",
    from: "",
    to: "",
  });

  useEffect(() => {
    setExperienceInfo((prevExperienceInfo) => {
      const index = prevExperienceInfo.findIndex((item) => item.id === id);
      if (index !== -1) {
        const updatedExperienceInfo = [...prevExperienceInfo];
        updatedExperienceInfo[index] = experienceItems;
        return updatedExperienceInfo;
      } else {
        return [...prevExperienceInfo, experienceItems];
      }
    });
  }, [experienceItems]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperienceItems((prevExperienceItems) => {
      return { ...prevExperienceItems, [name]: value };
    });
  };

  return (
    <>
      <input
        type="text"
        name="position"
        placeholder="Position"
        onChange={handleChange}
        value={experienceItems.position}
      />
      <input
        type="text"
        name="company"
        placeholder="Company"
        onChange={handleChange}
        value={experienceItems.company}
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        onChange={handleChange}
        value={experienceItems.city}
      />
      <input
        type="text"
        name="from"
        placeholder="from"
        onChange={handleChange}
        value={experienceItems.from}
      />
      <input
        type="text"
        name="to"
        placeholder="to"
        onChange={handleChange}
        value={experienceItems.to}
      />
    </>
  );
};

export default ExperienceItems;
