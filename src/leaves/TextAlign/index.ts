import Button from "./Button";
import Leaf from "./Leaf";
import React from "react";

const TextAlignLeaves = (options: Array<string>) => {
  return options.map((option) => ({
    name: `text-align-${option}`,
    Button: () => React.createElement(Button, { option }),
    Leaf,
  }));
};

const TextAlign = TextAlignLeaves(["left", "center", "right"]);

export default TextAlign;
