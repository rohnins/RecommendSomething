/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const GlyphsMachina = ({ className, glyphsMachina = "/img/glyphs-machina.svg" }) => {
  return <img className={`glyphs-machina ${className}`} alt="Glyphs machina" src={glyphsMachina} />;
};

GlyphsMachina.propTypes = {
  glyphsMachina: PropTypes.string,
};
