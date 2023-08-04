/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ButtonPrimary } from "../ButtonPrimary";
import { Logo } from "../Logo";
import { Simple } from "../Simple";
import "./style.css";

export const Navigation = ({
  style,
  className,
  buttonPrimaryButtonPrimaryClassName,
  hasLinks = true,
  menuClassName,
  simpleLabelClassName,
  simpleLabelClassNameOverride,
  simpleDivClassName,
}) => {
  return (
    <div className={`navigation ${style} ${className}`}>
      {["five", "nine", "one", "seven", "ten", "two"].includes(style) && (
        <ButtonPrimary
          className={`${["ten", "two"].includes(style) ? "class-6" : buttonPrimaryButtonPrimaryClassName}`}
        />
      )}

      {["eleven", "four", "six", "ten", "three", "two"].includes(style) && (
        <div className="row">
          {style === "ten" && (
            <div className="menu">
              <img className="menu-2" alt="Menu" src="/img/menu-2.svg" />
            </div>
          )}

          {["eleven", "ten", "two"].includes(style) && (
            <Logo className="logo-instance" zero={["eleven", "ten"].includes(style) ? "/img/zero-23.svg" : undefined} />
          )}

          {["four", "six", "three"].includes(style) && (
            <>
              <Simple
                className="link"
                label="Link"
                labelClassName="simple-instance"
                showEndIcon={false}
                showStartIcon={false}
                size="lg"
                stateProp="rested"
                style="ghost"
              />
              <Simple
                className="link"
                label="Link"
                labelClassName="simple-instance"
                showEndIcon={false}
                showStartIcon={false}
                size="lg"
                stateProp="rested"
                style="ghost"
              />
              <Simple
                className="link"
                label="Link"
                labelClassName="simple-instance"
                showEndIcon={false}
                showStartIcon={false}
                size="lg"
                stateProp="rested"
                style="ghost"
              />
              <Simple
                className="link"
                label="Link"
                labelClassName="simple-instance"
                showEndIcon={false}
                showStartIcon={false}
                size="lg"
                stateProp="rested"
                style="ghost"
              />
              <Simple
                className="link"
                label="Link"
                labelClassName="simple-instance"
                showEndIcon={false}
                showStartIcon={false}
                size="lg"
                stateProp="rested"
                style="ghost"
              />
            </>
          )}

          {style === "four" && <ButtonPrimary />}

          {["eleven", "two"].includes(style) && (
            <div className="links">
              <Simple
                className="link"
                label="Link"
                labelClassName="simple-instance"
                showEndIcon={false}
                showStartIcon={false}
                size="lg"
                stateProp="rested"
                style="ghost"
              />
              <Simple
                className="link"
                label="Link"
                labelClassName="simple-instance"
                showEndIcon={false}
                showStartIcon={false}
                size="lg"
                stateProp="rested"
                style="ghost"
              />
              <Simple
                className="link"
                label="Link"
                labelClassName="simple-instance"
                showEndIcon={false}
                showStartIcon={false}
                size="lg"
                stateProp="rested"
                style="ghost"
              />
              <Simple
                className="link"
                label="Link"
                labelClassName="simple-instance"
                showEndIcon={false}
                showStartIcon={false}
                size="lg"
                stateProp="rested"
                style="ghost"
              />
              <Simple
                className="link"
                label="Link"
                labelClassName="simple-instance"
                showEndIcon={false}
                showStartIcon={false}
                size="lg"
                stateProp="rested"
                style="ghost"
              />
            </div>
          )}
        </div>
      )}

      {["eight", "four", "six", "three"].includes(style) && (
        <Logo
          className={`${style === "eight" ? "instance-node" : style === "six" ? "class-7" : "class-8"}`}
          zero="/img/zero-23.svg"
        />
      )}

      {["eight", "five", "nine", "one", "seven"].includes(style) && (
        <>
          <>
            {hasLinks && (
              <>
                <>
                  {["eight", "five", "one"].includes(style) && (
                    <div className="div">
                      {style === "one" && (
                        <>
                          <Simple
                            className="link"
                            label="Link"
                            labelClassName="simple-instance"
                            showEndIcon={false}
                            showStartIcon={false}
                            size="lg"
                            stateProp="rested"
                            style="ghost"
                          />
                          <Simple
                            className="link"
                            label="Link"
                            labelClassName="simple-instance"
                            showEndIcon={false}
                            showStartIcon={false}
                            size="lg"
                            stateProp="rested"
                            style="ghost"
                          />
                          <Simple
                            className="link"
                            label="Link"
                            labelClassName="simple-instance"
                            showEndIcon={false}
                            showStartIcon={false}
                            size="lg"
                            stateProp="rested"
                            style="ghost"
                          />
                          <Simple
                            className="link"
                            label="Link"
                            labelClassName="simple-instance"
                            showEndIcon={false}
                            showStartIcon={false}
                            size="lg"
                            stateProp="rested"
                            style="ghost"
                          />
                          <Simple
                            className="link"
                            label="Link"
                            labelClassName="simple-instance"
                            showEndIcon={false}
                            showStartIcon={false}
                            size="lg"
                            stateProp="rested"
                            style="ghost"
                          />
                        </>
                      )}

                      {style === "five" && <div className="label-i">Button</div>}

                      {style === "eight" && <img className="menu-2" alt="Menu" src="/img/menu-2.svg" />}
                    </div>
                  )}

                  {["nine", "seven"].includes(style) && <Logo className="instance-node" zero="/img/zero-23.svg" />}
                </>
              </>
            )}
          </>
        </>
      )}

      {style === "eight" && (
        <div className={`links-2 ${menuClassName}`}>
          <Simple
            className="link"
            label="Link"
            labelClassName={simpleLabelClassName}
            showEndIcon={false}
            showStartIcon={false}
            size="lg"
            stateProp="rested"
            style="ghost"
          />
          <Simple
            className="link"
            label="Link"
            labelClassName={simpleLabelClassNameOverride}
            showEndIcon={false}
            showStartIcon={false}
            size="lg"
            stateProp="rested"
            style="ghost"
          />
          <Simple
            className="link"
            label="Link"
            labelClassName={simpleDivClassName}
            showEndIcon={false}
            showStartIcon={false}
            size="lg"
            stateProp="rested"
            style="ghost"
          />
        </div>
      )}

      {["five", "one"].includes(style) && (
        <Logo
          className={`${style === "five" ? "instance-node" : "class-9"}`}
          zero={style === "five" ? "/img/zero-23.svg" : undefined}
        />
      )}

      {["nine", "seven"].includes(style) && (
        <div className={`menu-3 ${menuClassName}`}>
          {style === "seven" && <img className="menu-2" alt="Menu" src="/img/menu-2.svg" />}

          {style === "nine" && (
            <>
              <Simple
                className="link"
                label="Link"
                labelClassName={simpleLabelClassName}
                showEndIcon={false}
                showStartIcon={false}
                size="lg"
                stateProp="rested"
                style="ghost"
              />
              <Simple
                className="link"
                label="Link"
                labelClassName={simpleLabelClassNameOverride}
                showEndIcon={false}
                showStartIcon={false}
                size="lg"
                stateProp="rested"
                style="ghost"
              />
              <Simple
                className="link"
                label="Link"
                labelClassName={simpleDivClassName}
                showEndIcon={false}
                showStartIcon={false}
                size="lg"
                stateProp="rested"
                style="ghost"
              />
            </>
          )}
        </div>
      )}
    </div>
  );
};

Navigation.propTypes = {
  style: PropTypes.oneOf(["seven", "two", "ten", "three", "nine", "four", "eleven", "one", "five", "eight", "six"]),
  hasLinks: PropTypes.bool,
};
