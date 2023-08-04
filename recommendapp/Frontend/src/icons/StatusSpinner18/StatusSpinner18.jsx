/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const StatusSpinner18 = ({ color = "black", className }) => {
  return (
    <svg
      className={`status-spinner-18 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M9 9V7H8V6H7V5H5V7H6V8H7V9H9Z" fill={color} />
      <path className="path" d="M11 2H13V7H11V2Z" fill={color} />
      <path className="path" d="M17 5H19V7H18V8H17V9H15V7H16V6H17V5Z" fill={color} />
      <path className="path" d="M17 11V13H22V11H17Z" fill={color} />
      <path className="path" d="M15 15H17V16H18V17H19V19H17V18H16V17H15V15Z" fill={color} />
      <path className="path" d="M11 17H13V22H11V17Z" fill={color} />
      <path className="path" d="M8 17H9V15H7V16H6V17H5V19H7V18H8V17Z" fill={color} />
      <path className="path" d="M7 11H2V13H7V11Z" fill={color} />
    </svg>
  );
};

StatusSpinner18.propTypes = {
  color: PropTypes.string,
};
