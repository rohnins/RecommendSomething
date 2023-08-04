import React from "react";
import { Footers } from "../../components/Footers";
import { Navigation } from "../../components/Navigation";
import "./style.css";

export const Desktop = () => {
  return (
    <div className="desktop">
      <div className="div-5">
        <div className="overlap">
          <Navigation
            buttonPrimaryButtonPrimaryClassName="design-component-instance-node"
            className="navigation-instance"
            hasLinks={false}
            menuClassName="navigation-2"
            simpleDivClassName="navigation-3"
            simpleLabelClassName="navigation-3"
            simpleLabelClassNameOverride="navigation-3"
            style="nine"
          />
          <h1 className="h-1">RECOMMENDSOMETHING</h1>
        </div>
        <div className="overlap-group">
          <Footers
            className="footers-instance"
            dividerClassName="footers-4"
            hasText={false}
            simpleDivClassName="footers-5"
            simpleDivClassNameOverride="footers-5"
            simpleLabel="Contact"
            simpleLabelClassName="footers-3"
            simpleLabelClassNameOverride="footers-5"
            simpleSizeMdStyleStrokeClassName="footers-2"
            style="nine"
          />
          <img className="linkedin" alt="Linkedin" src="/img/linkedin.svg" />
          <img className="github" alt="Github" src="/img/github.svg" />
        </div>
      </div>
    </div>
  );
};
