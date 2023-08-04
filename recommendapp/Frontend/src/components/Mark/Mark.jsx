/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Mark = ({ blur = "/img/blur-26.png" }) => {
  return (
    <div className="mark">
      <img className="blur" alt="Blur" src={blur} />
    </div>
  );
};

Mark.propTypes = {
  blur: PropTypes.string,
};
