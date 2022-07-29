import React from "react";

const TextAlign: React.FC<any> = ({ attributes, children }) => {
  return React.createElement("em", { ...attributes }, children);
};

export default TextAlign;
