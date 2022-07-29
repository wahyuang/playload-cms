import React from "react";
import { LeafButton } from "payload/components/rich-text";

const IconLeft = () => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <desc></desc>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <line x1="4" y1="6" x2="20" y2="6"></line>
    <line x1="4" y1="12" x2="14" y2="12"></line>
    <line x1="4" y1="18" x2="18" y2="18"></line>
  </svg>
);

const IconRight = () => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <desc></desc>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <line x1="4" y1="6" x2="20" y2="6"></line>
    <line x1="10" y1="12" x2="20" y2="12"></line>
    <line x1="6" y1="18" x2="20" y2="18"></line>
  </svg>
);

const IconCenter = () => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <desc></desc>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <line x1="4" y1="6" x2="20" y2="6"></line>
    <line x1="8" y1="12" x2="16" y2="12"></line>
    <line x1="6" y1="18" x2="18" y2="18"></line>
  </svg>
);

const Icons = {
  left: IconLeft,
  right: IconRight,
  center: IconCenter,
};

const TextAlignButton = ({ option = "left" }) => (
  <LeafButton format={`align-text-${option}`}>
    {React.createElement(Icons[option])}
  </LeafButton>
);

export default TextAlignButton;
