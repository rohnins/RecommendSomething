/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Mark } from "../Mark";
import "./style.css";

export const Logo = ({ className, zero = "/img/zero-24.svg", markBlur = "/img/blur-26.png" }) => {
  return (
    <div className={`logo ${className}`}>
      <Mark blur={markBlur} />
      <img className="zero" alt="Zero" src={zero} />
    </div>
  );
};

Logo.propTypes = {
  zero: PropTypes.string,
  markBlur: PropTypes.string,
};
