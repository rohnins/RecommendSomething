/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Logo } from "../Logo";
import { Mark } from "../Mark";
import { Simple } from "../Simple";
import "./style.css";

export const Footers = ({
  style,
  className,
  simpleLabel = "Link",
  simpleSizeMdStyleStrokeClassName,
  simpleLabelClassName,
  dividerClassName,
  simpleLabelClassNameOverride,
  simpleDivClassName,
  simpleDivClassNameOverride,
  hasText = true,
}) => {
  return (
    <div className={`footers style-2-${style} ${className}`}>
      {(style === "eleven" ||
        style === "fifteen" ||
        style === "one" ||
        style === "seventeen" ||
        style === "sixteen" ||
        style === "thirteen" ||
        style === "three" ||
        style === "twelve") && (
        <div className="columns">
          {["eleven", "twelve"].includes(style) && (
            <>
              <div className="column">
                <Simple
                  className="link-2"
                  label="List"
                  labelClassName="link-3"
                  showEndIcon={false}
                  showStartIcon={false}
                  size="lg"
                  stateProp="rested"
                  style="ghost"
                />
                <Simple
                  className="link-2"
                  label="Link"
                  labelClassName="simple-2"
                  showEndIcon={false}
                  showStartIcon={false}
                  size="lg"
                  stateProp="rested"
                  style="ghost"
                />
                <Simple
                  className="link-2"
                  label="Link"
                  labelClassName="simple-2"
                  showEndIcon={false}
                  showStartIcon={false}
                  size="lg"
                  stateProp="rested"
                  style="ghost"
                />
                <Simple
                  className="link-2"
                  label="Link"
                  labelClassName="simple-2"
                  showEndIcon={false}
                  showStartIcon={false}
                  size="lg"
                  stateProp="rested"
                  style="ghost"
                />
              </div>
              <div className="column">
                <Simple
                  className="link-2"
                  label="List"
                  labelClassName="link-3"
                  showEndIcon={false}
                  showStartIcon={false}
                  size="lg"
                  stateProp="rested"
                  style="ghost"
                />
                <Simple
                  className="link-2"
                  label="Link"
                  labelClassName="simple-2"
                  showEndIcon={false}
                  showStartIcon={false}
                  size="lg"
                  stateProp="rested"
                  style="ghost"
                />
                <Simple
                  className="link-2"
                  label="Link"
                  labelClassName="simple-2"
                  showEndIcon={false}
                  showStartIcon={false}
                  size="lg"
                  stateProp="rested"
                  style="ghost"
                />
                <Simple
                  className="link-2"
                  label="Link"
                  labelClassName="simple-2"
                  showEndIcon={false}
                  showStartIcon={false}
                  size="lg"
                  stateProp="rested"
                  style="ghost"
                />
              </div>
              <div className="column">
                <Simple
                  className="link-2"
                  label="List"
                  labelClassName="link-3"
                  showEndIcon={false}
                  showStartIcon={false}
                  size="lg"
                  stateProp="rested"
                  style="ghost"
                />
                <Simple
                  className="link-2"
                  label="Link"
                  labelClassName="simple-2"
                  showEndIcon={false}
                  showStartIcon={false}
                  size="lg"
                  stateProp="rested"
                  style="ghost"
                />
                <Simple
                  className="link-2"
                  label="Link"
                  labelClassName="simple-2"
                  showEndIcon={false}
                  showStartIcon={false}
                  size="lg"
                  stateProp="rested"
                  style="ghost"
                />
                <Simple
                  className="link-2"
                  label="Link"
                  labelClassName="simple-2"
                  showEndIcon={false}
                  showStartIcon={false}
                  size="lg"
                  stateProp="rested"
                  style="ghost"
                />
              </div>
              <div className="column">
                <Simple
                  className="link-2"
                  label="List"
                  labelClassName="link-3"
                  showEndIcon={false}
                  showStartIcon={false}
                  size="lg"
                  stateProp="rested"
                  style="ghost"
                />
                <Simple
                  className="link-2"
                  label="Link"
                  labelClassName="simple-2"
                  showEndIcon={false}
                  showStartIcon={false}
                  size="lg"
                  stateProp="rested"
                  style="ghost"
                />
                <Simple
                  className="link-2"
                  label="Link"
                  labelClassName="simple-2"
                  showEndIcon={false}
                  showStartIcon={false}
                  size="lg"
                  stateProp="rested"
                  style="ghost"
                />
                <Simple
                  className="link-2"
                  label="Link"
                  labelClassName="simple-2"
                  showEndIcon={false}
                  showStartIcon={false}
                  size="lg"
                  stateProp="rested"
                  style="ghost"
                />
              </div>
              <div className="column">
                <Simple
                  className="link-2"
                  label="List"
                  labelClassName="link-3"
                  showEndIcon={false}
                  showStartIcon={false}
                  size="lg"
                  stateProp="rested"
                  style="ghost"
                />
                <Simple
                  className="link-2"
                  label="Link"
                  labelClassName="simple-2"
                  showEndIcon={false}
                  showStartIcon={false}
                  size="lg"
                  stateProp="rested"
                  style="ghost"
                />
                <Simple
                  className="link-2"
                  label="Link"
                  labelClassName="simple-2"
                  showEndIcon={false}
                  showStartIcon={false}
                  size="lg"
                  stateProp="rested"
                  style="ghost"
                />
                <Simple
                  className="link-2"
                  label="Link"
                  labelClassName="simple-2"
                  showEndIcon={false}
                  showStartIcon={false}
                  size="lg"
                  stateProp="rested"
                  style="ghost"
                />
              </div>
            </>
          )}

          {["seventeen", "sixteen", "thirteen", "three"].includes(style) && (
            <Logo
              className="logo-2"
              markBlur="/img/blur-26.png"
              zero={style === "three" ? "/img/zero-23.svg" : "/img/zero-12.svg"}
            />
          )}

          {["one", "seventeen", "sixteen", "thirteen", "three"].includes(style) && (
            <div className="left">
              {["sixteen", "three"].includes(style) && (
                <>
                  <div className="column">
                    <Simple
                      className="link-2"
                      label="List"
                      labelClassName="link-3"
                      showEndIcon={false}
                      showStartIcon={false}
                      size="lg"
                      stateProp="rested"
                      style="ghost"
                    />
                    <Simple
                      className="link-2"
                      label="Link"
                      labelClassName="simple-2"
                      showEndIcon={false}
                      showStartIcon={false}
                      size="lg"
                      stateProp="rested"
                      style="ghost"
                    />
                    <Simple
                      className="link-2"
                      label="Link"
                      labelClassName="simple-2"
                      showEndIcon={false}
                      showStartIcon={false}
                      size="lg"
                      stateProp="rested"
                      style="ghost"
                    />
                    <Simple
                      className="link-2"
                      label="Link"
                      labelClassName="simple-2"
                      showEndIcon={false}
                      showStartIcon={false}
                      size="lg"
                      stateProp="rested"
                      style="ghost"
                    />
                  </div>
                  <div className="column">
                    <Simple
                      className="link-2"
                      label="List"
                      labelClassName="link-3"
                      showEndIcon={false}
                      showStartIcon={false}
                      size="lg"
                      stateProp="rested"
                      style="ghost"
                    />
                    <Simple
                      className="link-2"
                      label="Link"
                      labelClassName="simple-2"
                      showEndIcon={false}
                      showStartIcon={false}
                      size="lg"
                      stateProp="rested"
                      style="ghost"
                    />
                    <Simple
                      className="link-2"
                      label="Link"
                      labelClassName="simple-2"
                      showEndIcon={false}
                      showStartIcon={false}
                      size="lg"
                      stateProp="rested"
                      style="ghost"
                    />
                    <Simple
                      className="link-2"
                      label="Link"
                      labelClassName="simple-2"
                      showEndIcon={false}
                      showStartIcon={false}
                      size="lg"
                      stateProp="rested"
                      style="ghost"
                    />
                  </div>
                  <div className="column">
                    <Simple
                      className="link-2"
                      label="List"
                      labelClassName="link-3"
                      showEndIcon={false}
                      showStartIcon={false}
                      size="lg"
                      stateProp="rested"
                      style="ghost"
                    />
                    <Simple
                      className="link-2"
                      label="Link"
                      labelClassName="simple-2"
                      showEndIcon={false}
                      showStartIcon={false}
                      size="lg"
                      stateProp="rested"
                      style="ghost"
                    />
                    <Simple
                      className="link-2"
                      label="Link"
                      labelClassName="simple-2"
                      showEndIcon={false}
                      showStartIcon={false}
                      size="lg"
                      stateProp="rested"
                      style="ghost"
                    />
                    <Simple
                      className="link-2"
                      label="Link"
                      labelClassName="simple-2"
                      showEndIcon={false}
                      showStartIcon={false}
                      size="lg"
                      stateProp="rested"
                      style="ghost"
                    />
                  </div>
                  <div className="column-2">
                    <Simple
                      className="link-2"
                      label="List"
                      labelClassName="link-3"
                      showEndIcon={false}
                      showStartIcon={false}
                      size="lg"
                      stateProp="rested"
                      style="ghost"
                    />
                    {style === "three" && (
                      <>
                        <Simple
                          className="link-2"
                          label="Link"
                          labelClassName="simple-2"
                          showEndIcon={false}
                          showStartIcon={false}
                          size="lg"
                          stateProp="rested"
                          style="ghost"
                        />
                        <Simple
                          className="link-2"
                          label="Link"
                          labelClassName="simple-2"
                          showEndIcon={false}
                          showStartIcon={false}
                          size="lg"
                          stateProp="rested"
                          style="ghost"
                        />
                        <Simple
                          className="link-2"
                          label="Link"
                          labelClassName="simple-2"
                          showEndIcon={false}
                          showStartIcon={false}
                          size="lg"
                          stateProp="rested"
                          style="ghost"
                        />
                      </>
                    )}

                    {style === "sixteen" && (
                      <div className="socials">
                        <div className="socials-icon" />
                        <div className="socials-icon" />
                        <div className="socials-icon" />
                      </div>
                    )}
                  </div>
                </>
              )}

              {style === "thirteen" && (
                <div className="field">
                  <div className="placeholder" />
                </div>
              )}

              {["one", "seventeen", "thirteen"].includes(style) && (
                <Simple
                  className={`${style === "thirteen" ? "button" : "link-2"}`}
                  label={style === "thirteen" ? "Button" : "Link"}
                  labelClassName="simple-2"
                  showEndIcon={false}
                  showStartIcon={false}
                  size="lg"
                  stateProp="rested"
                  style={style === "thirteen" ? "accent" : "ghost"}
                />
              )}

              {["one", "seventeen"].includes(style) && (
                <>
                  <Simple
                    className="link-2"
                    label="Link"
                    labelClassName="simple-2"
                    showEndIcon={false}
                    showStartIcon={false}
                    size="lg"
                    stateProp="rested"
                    style="ghost"
                  />
                  <Simple
                    className="link-2"
                    label="Link"
                    labelClassName="simple-2"
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

          {style === "fifteen" && (
            <>
              <div className="left-2">
                <Logo className="logo-2" markBlur="/img/blur-26.png" zero="/img/zero-12.svg" />
                <div className="div-2">
                  <div className="field">
                    <div className="placeholder" />
                  </div>
                  <Simple
                    className="button"
                    label="Button"
                    labelClassName="simple-2"
                    showEndIcon={false}
                    showStartIcon={false}
                    size="lg"
                    stateProp="rested"
                    style="accent"
                  />
                </div>
              </div>
              <div className="columns-2">
                <div className="column">
                  <Simple
                    className="link-2"
                    label="List"
                    labelClassName="link-3"
                    showEndIcon={false}
                    showStartIcon={false}
                    size="lg"
                    stateProp="rested"
                    style="ghost"
                  />
                  <Simple
                    className="link-2"
                    label="Link"
                    labelClassName="simple-2"
                    showEndIcon={false}
                    showStartIcon={false}
                    size="lg"
                    stateProp="rested"
                    style="ghost"
                  />
                  <Simple
                    className="link-2"
                    label="Link"
                    labelClassName="simple-2"
                    showEndIcon={false}
                    showStartIcon={false}
                    size="lg"
                    stateProp="rested"
                    style="ghost"
                  />
                  <Simple
                    className="link-2"
                    label="Link"
                    labelClassName="simple-2"
                    showEndIcon={false}
                    showStartIcon={false}
                    size="lg"
                    stateProp="rested"
                    style="ghost"
                  />
                </div>
                <div className="column">
                  <Simple
                    className="link-2"
                    label="List"
                    labelClassName="link-3"
                    showEndIcon={false}
                    showStartIcon={false}
                    size="lg"
                    stateProp="rested"
                    style="ghost"
                  />
                  <Simple
                    className="link-2"
                    label="Link"
                    labelClassName="simple-2"
                    showEndIcon={false}
                    showStartIcon={false}
                    size="lg"
                    stateProp="rested"
                    style="ghost"
                  />
                  <Simple
                    className="link-2"
                    label="Link"
                    labelClassName="simple-2"
                    showEndIcon={false}
                    showStartIcon={false}
                    size="lg"
                    stateProp="rested"
                    style="ghost"
                  />
                  <Simple
                    className="link-2"
                    label="Link"
                    labelClassName="simple-2"
                    showEndIcon={false}
                    showStartIcon={false}
                    size="lg"
                    stateProp="rested"
                    style="ghost"
                  />
                </div>
                <div className="column">
                  <Simple
                    className="link-2"
                    label="List"
                    labelClassName="link-3"
                    showEndIcon={false}
                    showStartIcon={false}
                    size="lg"
                    stateProp="rested"
                    style="ghost"
                  />
                  <Simple
                    className="link-2"
                    label="Link"
                    labelClassName="simple-2"
                    showEndIcon={false}
                    showStartIcon={false}
                    size="lg"
                    stateProp="rested"
                    style="ghost"
                  />
                  <Simple
                    className="link-2"
                    label="Link"
                    labelClassName="simple-2"
                    showEndIcon={false}
                    showStartIcon={false}
                    size="lg"
                    stateProp="rested"
                    style="ghost"
                  />
                  <Simple
                    className="link-2"
                    label="Link"
                    labelClassName="simple-2"
                    showEndIcon={false}
                    showStartIcon={false}
                    size="lg"
                    stateProp="rested"
                    style="ghost"
                  />
                </div>
                <div className="column">
                  <Simple
                    className="link-2"
                    label="List"
                    labelClassName="link-3"
                    showEndIcon={false}
                    showStartIcon={false}
                    size="lg"
                    stateProp="rested"
                    style="ghost"
                  />
                  <Simple
                    className="link-2"
                    label="Link"
                    labelClassName="simple-2"
                    showEndIcon={false}
                    showStartIcon={false}
                    size="lg"
                    stateProp="rested"
                    style="ghost"
                  />
                  <Simple
                    className="link-2"
                    label="Link"
                    labelClassName="simple-2"
                    showEndIcon={false}
                    showStartIcon={false}
                    size="lg"
                    stateProp="rested"
                    style="ghost"
                  />
                  <Simple
                    className="link-2"
                    label="Link"
                    labelClassName="simple-2"
                    showEndIcon={false}
                    showStartIcon={false}
                    size="lg"
                    stateProp="rested"
                    style="ghost"
                  />
                </div>
              </div>
            </>
          )}

          {style === "seventeen" && (
            <div className="div-2">
              <div className="field">
                <div className="placeholder" />
              </div>
              <Simple
                className="button"
                label="Button"
                labelClassName="simple-2"
                showEndIcon={false}
                showStartIcon={false}
                size="lg"
                stateProp="rested"
                style="accent"
              />
            </div>
          )}

          {style === "one" && (
            <>
              <Logo className="logo-2" markBlur="/img/blur-7.png" zero="/img/zero.svg" />
              <div className="div-3">
                <Simple
                  className="link-2"
                  label="Link"
                  labelClassName="simple-2"
                  showEndIcon={false}
                  showStartIcon={false}
                  size="lg"
                  stateProp="rested"
                  style="ghost"
                />
                <Simple
                  className="link-2"
                  label="Link"
                  labelClassName="simple-2"
                  showEndIcon={false}
                  showStartIcon={false}
                  size="lg"
                  stateProp="rested"
                  style="ghost"
                />
                <Simple
                  className="link-2"
                  label="Link"
                  labelClassName="simple-2"
                  showEndIcon={false}
                  showStartIcon={false}
                  size="lg"
                  stateProp="rested"
                  style="ghost"
                />
              </div>
            </>
          )}
        </div>
      )}

      {["fifteen", "one", "seventeen", "sixteen", "thirteen", "three"].includes(style) && (
        <div className={`divider ${dividerClassName}`} />
      )}

      {style === "two" && (
        <>
          <p className="text">©2023 madeofzero. All rights reserved.</p>
          <div className={`div-4 ${dividerClassName}`}>
            <Simple
              className="link-2"
              label="Link"
              labelClassName={simpleLabelClassNameOverride}
              showEndIcon={false}
              showStartIcon={false}
              size="lg"
              stateProp="rested"
              style="ghost"
            />
            <Simple
              className="link-2"
              label="Link"
              labelClassName={simpleDivClassName}
              showEndIcon={false}
              showStartIcon={false}
              size="lg"
              stateProp="rested"
              style="ghost"
            />
            <Simple
              className="link-2"
              label="Link"
              labelClassName={simpleDivClassNameOverride}
              showEndIcon={false}
              showStartIcon={false}
              size="lg"
              stateProp="rested"
              style="ghost"
            />
          </div>
        </>
      )}

      {(style === "fifteen" ||
        style === "one" ||
        style === "seventeen" ||
        style === "sixteen" ||
        style === "thirteen" ||
        style === "three" ||
        style === "two") && (
        <>
          <>
            {hasText && (
              <>
                <>
                  {["one", "seventeen", "sixteen"].includes(style) && (
                    <p className="p">©2023 madeofzero. All rights reserved.</p>
                  )}

                  {["fifteen", "thirteen", "three", "two"].includes(style) && (
                    <div className="row-3">
                      {["fifteen", "three"].includes(style) && (
                        <p className="text-2">©2023 madeofzero. All rights reserved.</p>
                      )}

                      {["fifteen", "thirteen", "three"].includes(style) && (
                        <div className="socials-2">
                          {style === "three" && (
                            <>
                              <div className="socials-icon" />
                              <div className="socials-icon" />
                              <div className="socials-icon" />
                            </>
                          )}

                          {["fifteen", "thirteen"].includes(style) && (
                            <>
                              <Simple
                                className="link-2"
                                label="Link"
                                labelClassName="simple-2"
                                showEndIcon={false}
                                showStartIcon={false}
                                size="lg"
                                stateProp="rested"
                                style="ghost"
                              />
                              <Simple
                                className="link-2"
                                label="Link"
                                labelClassName="simple-2"
                                showEndIcon={false}
                                showStartIcon={false}
                                size="lg"
                                stateProp="rested"
                                style="ghost"
                              />
                              <Simple
                                className="link-2"
                                label="Link"
                                labelClassName="simple-2"
                                showEndIcon={false}
                                showStartIcon={false}
                                size="lg"
                                stateProp="rested"
                                style="ghost"
                              />
                            </>
                          )}

                          {style === "thirteen" && (
                            <>
                              <Simple
                                className="link-2"
                                label="Link"
                                labelClassName="simple-2"
                                showEndIcon={false}
                                showStartIcon={false}
                                size="lg"
                                stateProp="rested"
                                style="ghost"
                              />
                              <Simple
                                className="link-2"
                                label="Link"
                                labelClassName="simple-2"
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

                      {style === "thirteen" && (
                        <div className="div-2">
                          <div className="socials-icon" />
                          <div className="socials-icon" />
                          <div className="socials-icon" />
                        </div>
                      )}

                      {style === "two" && (
                        <>
                          <Simple
                            className="link-2"
                            label="Link"
                            labelClassName="simple-2"
                            showEndIcon={false}
                            showStartIcon={false}
                            size="lg"
                            stateProp="rested"
                            style="ghost"
                          />
                          <Simple
                            className="link-2"
                            label="Link"
                            labelClassName="simple-2"
                            showEndIcon={false}
                            showStartIcon={false}
                            size="lg"
                            stateProp="rested"
                            style="ghost"
                          />
                          <Simple
                            className="link-2"
                            label="Link"
                            labelClassName="simple-2"
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
                </>
              </>
            )}
          </>
        </>
      )}

      {["eleven", "four", "seven"].includes(style) && (
        <Logo
          className={`${style === "seven" ? "class-10" : style === "eleven" ? "logo-2" : "class-11"}`}
          markBlur={style === "eleven" ? "/img/blur-7.png" : "/img/blur-26.png"}
          zero={style === "eleven" ? "/img/zero-7.svg" : "/img/zero-23.svg"}
        />
      )}

      {["four", "seven"].includes(style) && (
        <div className={`links-3 ${dividerClassName}`}>
          {style === "four" && (
            <>
              <Simple
                className="link-2"
                label="Link"
                labelClassName="simple-2"
                showEndIcon={false}
                showStartIcon={false}
                size="lg"
                stateProp="rested"
                style="ghost"
              />
              <Simple
                className="link-2"
                label="Link"
                labelClassName="simple-2"
                showEndIcon={false}
                showStartIcon={false}
                size="lg"
                stateProp="rested"
                style="ghost"
              />
              <Simple
                className="link-2"
                label="Link"
                labelClassName="simple-2"
                showEndIcon={false}
                showStartIcon={false}
                size="lg"
                stateProp="rested"
                style="ghost"
              />
              <Simple
                className="link-2"
                label="Link"
                labelClassName="simple-2"
                showEndIcon={false}
                showStartIcon={false}
                size="lg"
                stateProp="rested"
                style="ghost"
              />
              <Simple
                className="link-2"
                label="Link"
                labelClassName="simple-2"
                showEndIcon={false}
                showStartIcon={false}
                size="lg"
                stateProp="rested"
                style="ghost"
              />
            </>
          )}

          {style === "seven" && (
            <>
              <div className="socials-icon" />
              <div className="socials-icon" />
              <div className="socials-icon" />
            </>
          )}
        </div>
      )}

      {["eleven", "four", "seven"].includes(style) && (
        <>
          <>
            {hasText && (
              <>
                <>
                  {["eleven", "seven"].includes(style) && (
                    <p className="text-3">©2023 madeofzero. All rights reserved.</p>
                  )}

                  {style === "four" && (
                    <div className="socials-3">
                      <div className="socials-icon" />
                      <div className="socials-icon" />
                      <div className="socials-icon" />
                    </div>
                  )}
                </>
              </>
            )}
          </>
        </>
      )}

      {style === "five" && (
        <>
          <p className="text-4">©2023 madeofzero. All rights reserved.</p>
          <Logo className="logo-2" markBlur="/img/blur-3.png" zero="/img/zero-3.svg" />
        </>
      )}

      {style === "six" && <p className="text-5">©2023 madeofzero. All rights reserved.</p>}

      {["eight", "ten"].includes(style) && (
        <div className="top">
          {style === "eight" && (
            <>
              <div className="left-2">
                <Logo className="logo-2" markBlur="/img/blur-26.png" zero="/img/zero-23.svg" />
                <p className="text-6">©2023 madeofzero. All rights reserved.</p>
                <div className="div-2">
                  <div className="socials-icon" />
                  <div className="socials-icon" />
                  <div className="socials-icon" />
                </div>
              </div>
              <div className="columns-3">
                <div className="column">
                  <Simple
                    className="link-2"
                    label="List"
                    labelClassName="link-3"
                    showEndIcon={false}
                    showStartIcon={false}
                    size="lg"
                    stateProp="rested"
                    style="ghost"
                  />
                  <Simple
                    className="link-2"
                    label="Link"
                    labelClassName="simple-2"
                    showEndIcon={false}
                    showStartIcon={false}
                    size="lg"
                    stateProp="rested"
                    style="ghost"
                  />
                  <Simple
                    className="link-2"
                    label="Link"
                    labelClassName="simple-2"
                    showEndIcon={false}
                    showStartIcon={false}
                    size="lg"
                    stateProp="rested"
                    style="ghost"
                  />
                  <Simple
                    className="link-2"
                    label="Link"
                    labelClassName="simple-2"
                    showEndIcon={false}
                    showStartIcon={false}
                    size="lg"
                    stateProp="rested"
                    style="ghost"
                  />
                </div>
                <div className="column">
                  <Simple
                    className="link-2"
                    label="List"
                    labelClassName="link-3"
                    showEndIcon={false}
                    showStartIcon={false}
                    size="lg"
                    stateProp="rested"
                    style="ghost"
                  />
                  <Simple
                    className="link-2"
                    label="Link"
                    labelClassName="simple-2"
                    showEndIcon={false}
                    showStartIcon={false}
                    size="lg"
                    stateProp="rested"
                    style="ghost"
                  />
                  <Simple
                    className="link-2"
                    label="Link"
                    labelClassName="simple-2"
                    showEndIcon={false}
                    showStartIcon={false}
                    size="lg"
                    stateProp="rested"
                    style="ghost"
                  />
                  <Simple
                    className="link-2"
                    label="Link"
                    labelClassName="simple-2"
                    showEndIcon={false}
                    showStartIcon={false}
                    size="lg"
                    stateProp="rested"
                    style="ghost"
                  />
                </div>
                <div className="column">
                  <Simple
                    className="link-2"
                    label="List"
                    labelClassName="link-3"
                    showEndIcon={false}
                    showStartIcon={false}
                    size="lg"
                    stateProp="rested"
                    style="ghost"
                  />
                  <Simple
                    className="link-2"
                    label="Link"
                    labelClassName="simple-2"
                    showEndIcon={false}
                    showStartIcon={false}
                    size="lg"
                    stateProp="rested"
                    style="ghost"
                  />
                  <Simple
                    className="link-2"
                    label="Link"
                    labelClassName="simple-2"
                    showEndIcon={false}
                    showStartIcon={false}
                    size="lg"
                    stateProp="rested"
                    style="ghost"
                  />
                  <Simple
                    className="link-2"
                    label="Link"
                    labelClassName="simple-2"
                    showEndIcon={false}
                    showStartIcon={false}
                    size="lg"
                    stateProp="rested"
                    style="ghost"
                  />
                </div>
                <div className="column">
                  <Simple
                    className="link-2"
                    label="List"
                    labelClassName="link-3"
                    showEndIcon={false}
                    showStartIcon={false}
                    size="lg"
                    stateProp="rested"
                    style="ghost"
                  />
                  <Simple
                    className="link-2"
                    label="Link"
                    labelClassName="simple-2"
                    showEndIcon={false}
                    showStartIcon={false}
                    size="lg"
                    stateProp="rested"
                    style="ghost"
                  />
                  <Simple
                    className="link-2"
                    label="Link"
                    labelClassName="simple-2"
                    showEndIcon={false}
                    showStartIcon={false}
                    size="lg"
                    stateProp="rested"
                    style="ghost"
                  />
                  <Simple
                    className="link-2"
                    label="Link"
                    labelClassName="simple-2"
                    showEndIcon={false}
                    showStartIcon={false}
                    size="lg"
                    stateProp="rested"
                    style="ghost"
                  />
                </div>
              </div>
            </>
          )}

          {style === "ten" && (
            <>
              <Logo className="logo-2" markBlur="/img/blur-6.png" zero="/img/zero-23.svg" />
              <p className="text-5">©2023 madeofzero. All rights reserved.</p>
              <div className="div-3">
                <Simple
                  className="link-2"
                  label="Link"
                  labelClassName="simple-2"
                  showEndIcon={false}
                  showStartIcon={false}
                  size="lg"
                  stateProp="rested"
                  style="ghost"
                />
                <Simple
                  className="link-2"
                  label="Link"
                  labelClassName="simple-2"
                  showEndIcon={false}
                  showStartIcon={false}
                  size="lg"
                  stateProp="rested"
                  style="ghost"
                />
                <Simple
                  className="link-2"
                  label="Link"
                  labelClassName="simple-2"
                  showEndIcon={false}
                  showStartIcon={false}
                  size="lg"
                  stateProp="rested"
                  style="ghost"
                />
              </div>
            </>
          )}
        </div>
      )}

      {style === "nine" && (
        <>
          <Simple
            className={simpleSizeMdStyleStrokeClassName}
            label={simpleLabel}
            labelClassName={simpleLabelClassName}
            showEndIcon={false}
            showStartIcon={false}
            size="lg"
            stateProp="rested"
            style="ghost"
          />
          <div className={`div-4 ${dividerClassName}`}>
            <Simple
              className="link-2"
              label="Link"
              labelClassName={simpleLabelClassNameOverride}
              showEndIcon={false}
              showStartIcon={false}
              size="lg"
              stateProp="rested"
              style="ghost"
            />
            <Simple
              className="link-2"
              label="Link"
              labelClassName={simpleDivClassName}
              showEndIcon={false}
              showStartIcon={false}
              size="lg"
              stateProp="rested"
              style="ghost"
            />
            <Simple
              className="link-2"
              label="Link"
              labelClassName={simpleDivClassNameOverride}
              showEndIcon={false}
              showStartIcon={false}
              size="lg"
              stateProp="rested"
              style="ghost"
            />
          </div>
          <>
            {hasText && (
              <div className="socials-4">
                <div className="socials-icon" />
                <div className="socials-icon" />
                <div className="socials-icon" />
              </div>
            )}
          </>
        </>
      )}

      {style === "twelve" && (
        <div className="row-2">
          <Logo className="logo-3" markBlur="/img/blur-26.png" zero="/img/zero-23.svg" />
          <p className="text-7">©2023 madeofzero. All rights reserved.</p>
          <div className="socials-5">
            <div className="socials-icon" />
            <div className="socials-icon" />
            <div className="socials-icon" />
          </div>
        </div>
      )}

      {style === "fourteen" && (
        <>
          <div className="div-3">
            <Simple
              className="link-2"
              label="Link"
              labelClassName="simple-2"
              showEndIcon={false}
              showStartIcon={false}
              size="lg"
              stateProp="rested"
              style="ghost"
            />
            <Simple
              className="link-2"
              label="Link"
              labelClassName="simple-2"
              showEndIcon={false}
              showStartIcon={false}
              size="lg"
              stateProp="rested"
              style="ghost"
            />
            <Simple
              className="link-2"
              label="Link"
              labelClassName="simple-2"
              showEndIcon={false}
              showStartIcon={false}
              size="lg"
              stateProp="rested"
              style="ghost"
            />
          </div>
          <Mark blur="/img/blur-26.png" />
          <>
            {hasText && (
              <div className="div-3">
                <Simple
                  className="link-2"
                  label="Link"
                  labelClassName="simple-2"
                  showEndIcon={false}
                  showStartIcon={false}
                  size="lg"
                  stateProp="rested"
                  style="ghost"
                />
                <Simple
                  className="link-2"
                  label="Link"
                  labelClassName="simple-2"
                  showEndIcon={false}
                  showStartIcon={false}
                  size="lg"
                  stateProp="rested"
                  style="ghost"
                />
                <Simple
                  className="link-2"
                  label="Link"
                  labelClassName="simple-2"
                  showEndIcon={false}
                  showStartIcon={false}
                  size="lg"
                  stateProp="rested"
                  style="ghost"
                />
              </div>
            )}
          </>
        </>
      )}
    </div>
  );
};

Footers.propTypes = {
  style: PropTypes.oneOf([
    "fourteen",
    "thirteen",
    "sixteen",
    "seven",
    "seventeen",
    "fifteen",
    "two",
    "ten",
    "twelve",
    "three",
    "nine",
    "four",
    "eleven",
    "one",
    "five",
    "eight",
    "six",
  ]),
  simpleLabel: PropTypes.string,
  hasText: PropTypes.bool,
};
