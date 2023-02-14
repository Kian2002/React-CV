import React from "react";

const Input = ({ type, placeholder, id }) => {
  return <input key={id} type={type} placeholder={placeholder}></input>;
};

export default Input;
