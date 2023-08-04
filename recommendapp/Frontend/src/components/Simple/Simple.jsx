/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { StatusSpinner18 } from "../../icons/StatusSpinner18";
import { GlyphsMachina } from "../GlyphsMachina";
import "./style.css";

export const Simple = ({
  label = "Label",
  showEndIcon = true,
  showStartIcon = true,
  showLabel = true,
  size,
  style,
  stateProp,
  className,
  labelClassName,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    size: size || "md",
    style: style || "stroke",
    state: stateProp || "rested",
  });

  return (
    <div
      className={`simple ${state.size} ${state.state} ${state.style} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      {["disabled", "focused", "hovered", "pressed", "rested"].includes(state.state) && (
        <>
          <>
            {showStartIcon && (
              <>
                <>
                  {((state.size === "md" && state.state === "disabled" && state.style === "fill") ||
                    (state.size === "md" && state.style === "accent") ||
                    (state.size === "md" && state.style === "alternative") ||
                    (state.size === "md" && state.style === "ghost") ||
                    (state.size === "md" && state.style === "stroke") ||
                    (state.size === "sm" && state.state === "disabled" && state.style === "fill") ||
                    (state.size === "sm" && state.style === "accent") ||
                    (state.size === "sm" && state.style === "alternative") ||
                    (state.size === "sm" && state.style === "ghost") ||
                    (state.size === "sm" && state.style === "stroke") ||
                    (state.size === "x-sm" && state.state === "disabled" && state.style === "fill") ||
                    (state.size === "x-sm" && state.style === "accent") ||
                    (state.size === "x-sm" && state.style === "alternative") ||
                    (state.size === "x-sm" && state.style === "ghost") ||
                    (state.size === "x-sm" && state.style === "stroke")) && (
                    <GlyphsMachina
                      className={`${state.size === "x-sm" ? "class" : "class-2"}`}
                      glyphsMachina={
                        state.style === "stroke" && state.state === "hovered" && state.size === "md"
                          ? "/img/icon-2.svg"
                          : state.style === "stroke" && state.size === "md" && state.state === "pressed"
                          ? "/img/icon-4.svg"
                          : state.style === "stroke" && state.size === "md" && state.state === "focused"
                          ? "/img/icon-6.svg"
                          : state.style === "stroke" && state.size === "md" && state.state === "disabled"
                          ? "/img/icon-8.svg"
                          : state.style === "stroke" && state.state === "rested" && state.size === "sm"
                          ? "/img/icon-20.svg"
                          : state.style === "stroke" && state.state === "hovered" && state.size === "sm"
                          ? "/img/icon-22.svg"
                          : state.style === "stroke" && state.size === "sm" && state.state === "pressed"
                          ? "/img/icon-24.svg"
                          : state.style === "stroke" && state.size === "sm" && state.state === "focused"
                          ? "/img/icon-26.svg"
                          : state.style === "stroke" && state.state === "disabled" && state.size === "sm"
                          ? "/img/icon-28.svg"
                          : state.style === "stroke" && state.size === "x-sm" && state.state === "rested"
                          ? "/img/icon-30.svg"
                          : state.style === "stroke" && state.size === "x-sm" && state.state === "hovered"
                          ? "/img/icon-32.svg"
                          : state.style === "stroke" && state.size === "x-sm" && state.state === "pressed"
                          ? "/img/icon-34.svg"
                          : state.style === "stroke" && state.size === "x-sm" && state.state === "focused"
                          ? "/img/icon-36.svg"
                          : state.style === "stroke" && state.size === "x-sm" && state.state === "disabled"
                          ? "/img/icon-38.svg"
                          : state.state === "rested" && state.size === "md" && state.style === "ghost"
                          ? "/img/icon-40.svg"
                          : state.state === "hovered" && state.size === "md" && state.style === "ghost"
                          ? "/img/icon-42.svg"
                          : state.size === "md" && state.style === "ghost" && state.state === "pressed"
                          ? "/img/icon-44.svg"
                          : state.size === "md" && state.style === "ghost" && state.state === "focused"
                          ? "/img/icon-46.svg"
                          : state.size === "md" && state.state === "disabled" && state.style === "ghost"
                          ? "/img/icon-48.svg"
                          : state.state === "rested" && state.size === "sm" && state.style === "ghost"
                          ? "/img/icon-60.svg"
                          : state.state === "hovered" && state.size === "sm" && state.style === "ghost"
                          ? "/img/icon-62.svg"
                          : state.size === "sm" && state.style === "ghost" && state.state === "pressed"
                          ? "/img/icon-64.svg"
                          : state.size === "sm" && state.style === "ghost" && state.state === "focused"
                          ? "/img/icon-66.svg"
                          : state.style === "ghost" && state.state === "disabled" && state.size === "sm"
                          ? "/img/icon-68.svg"
                          : state.size === "x-sm" && state.state === "rested" && state.style === "ghost"
                          ? "/img/icon-70.svg"
                          : state.size === "x-sm" && state.state === "hovered" && state.style === "ghost"
                          ? "/img/icon-72.svg"
                          : state.size === "x-sm" && state.style === "ghost" && state.state === "pressed"
                          ? "/img/icon-74.svg"
                          : state.size === "x-sm" && state.style === "ghost" && state.state === "focused"
                          ? "/img/icon-76.svg"
                          : state.size === "x-sm" && state.state === "disabled" && state.style === "ghost"
                          ? "/img/icon-78.svg"
                          : state.style === "alternative" && state.state === "rested" && state.size === "md"
                          ? "/img/icon-80.svg"
                          : state.style === "alternative" && state.state === "hovered" && state.size === "md"
                          ? "/img/icon-82.svg"
                          : state.style === "alternative" && state.size === "md" && state.state === "pressed"
                          ? "/img/icon-84.svg"
                          : state.style === "alternative" && state.size === "md" && state.state === "focused"
                          ? "/img/icon-86.svg"
                          : state.style === "alternative" && state.size === "md" && state.state === "disabled"
                          ? "/img/icon-88.svg"
                          : state.style === "alternative" && state.state === "rested" && state.size === "sm"
                          ? "/img/icon-100.svg"
                          : state.style === "alternative" && state.state === "hovered" && state.size === "sm"
                          ? "/img/icon-102.svg"
                          : state.style === "alternative" && state.size === "sm" && state.state === "pressed"
                          ? "/img/icon-104.svg"
                          : state.style === "alternative" && state.size === "sm" && state.state === "focused"
                          ? "/img/icon-106.svg"
                          : state.style === "alternative" && state.state === "disabled" && state.size === "sm"
                          ? "/img/icon-108.svg"
                          : state.style === "alternative" && state.size === "x-sm" && state.state === "rested"
                          ? "/img/icon-110.svg"
                          : state.style === "alternative" && state.size === "x-sm" && state.state === "hovered"
                          ? "/img/icon-112.svg"
                          : state.style === "alternative" && state.size === "x-sm" && state.state === "pressed"
                          ? "/img/icon-114.svg"
                          : state.style === "alternative" && state.size === "x-sm" && state.state === "focused"
                          ? "/img/icon-116.svg"
                          : state.style === "alternative" && state.size === "x-sm" && state.state === "disabled"
                          ? "/img/icon-118.svg"
                          : state.state === "rested" && state.size === "md" && state.style === "accent"
                          ? "/img/icon-130.svg"
                          : state.size === "md" && state.style === "accent" && state.state === "pressed"
                          ? "/img/icon-132.svg"
                          : state.size === "md" && state.style === "accent" && state.state === "focused"
                          ? "/img/icon-134.svg"
                          : state.state === "hovered" && state.size === "md" && state.style === "accent"
                          ? "/img/icon-136.svg"
                          : state.size === "md" && state.state === "disabled" && state.style === "accent"
                          ? "/img/icon-138.svg"
                          : state.state === "rested" && state.size === "sm" && state.style === "accent"
                          ? "/img/icon-140.svg"
                          : state.size === "sm" && state.style === "accent" && state.state === "pressed"
                          ? "/img/icon-142.svg"
                          : state.size === "sm" && state.style === "accent" && state.state === "focused"
                          ? "/img/icon-144.svg"
                          : state.state === "hovered" && state.size === "sm" && state.style === "accent"
                          ? "/img/icon-146.svg"
                          : state.style === "accent" && state.state === "disabled" && state.size === "sm"
                          ? "/img/icon-148.svg"
                          : state.size === "x-sm" && state.state === "rested" && state.style === "accent"
                          ? "/img/icon-150.svg"
                          : state.size === "x-sm" && state.style === "accent" && state.state === "pressed"
                          ? "/img/icon-152.svg"
                          : state.size === "x-sm" && state.style === "accent" && state.state === "focused"
                          ? "/img/icon-154.svg"
                          : state.size === "x-sm" && state.state === "hovered" && state.style === "accent"
                          ? "/img/icon-156.svg"
                          : state.size === "x-sm" && state.state === "disabled" && state.style === "accent"
                          ? "/img/icon-158.svg"
                          : state.size === "md" && state.style === "fill"
                          ? "/img/icon-178.svg"
                          : state.size === "sm" && state.style === "fill"
                          ? "/img/icon-188.svg"
                          : state.size === "x-sm" && state.style === "fill"
                          ? "/img/icon-198.svg"
                          : "/img/icon.svg"
                      }
                    />
                  )}

                  {state.size === "lg" && (
                    <div className="container">
                      {(state.style === "accent" ||
                        state.style === "alternative" ||
                        state.style === "ghost" ||
                        state.style === "stroke" ||
                        (state.state === "disabled" && state.style === "fill")) && (
                        <GlyphsMachina
                          className="icon"
                          glyphsMachina={
                            state.style === "stroke" && state.state === "focused"
                              ? "/img/icon-12.svg"
                              : state.style === "stroke" && state.state === "hovered"
                              ? "/img/icon-14.svg"
                              : state.style === "stroke" && state.state === "pressed"
                              ? "/img/icon-16.svg"
                              : state.style === "stroke" && state.state === "disabled"
                              ? "/img/icon-18.svg"
                              : state.state === "rested" && state.style === "ghost"
                              ? "/img/icon-50.svg"
                              : state.style === "ghost" && state.state === "focused"
                              ? "/img/icon-52.svg"
                              : state.state === "hovered" && state.style === "ghost"
                              ? "/img/icon-54.svg"
                              : state.style === "ghost" && state.state === "pressed"
                              ? "/img/icon-56.svg"
                              : state.state === "disabled" && state.style === "ghost"
                              ? "/img/icon-58.svg"
                              : state.style === "alternative" && state.state === "rested"
                              ? "/img/icon-90.svg"
                              : state.style === "alternative" && state.state === "focused"
                              ? "/img/icon-92.svg"
                              : state.style === "alternative" && state.state === "hovered"
                              ? "/img/icon-94.svg"
                              : state.style === "alternative" && state.state === "pressed"
                              ? "/img/icon-96.svg"
                              : state.style === "alternative" && state.state === "disabled"
                              ? "/img/icon-98.svg"
                              : state.state === "rested" && state.style === "accent"
                              ? "/img/icon-120.svg"
                              : state.style === "accent" && state.state === "focused"
                              ? "/img/icon-122.svg"
                              : state.state === "hovered" && state.style === "accent"
                              ? "/img/icon-124.svg"
                              : state.style === "accent" && state.state === "pressed"
                              ? "/img/icon-126.svg"
                              : state.state === "disabled" && state.style === "accent"
                              ? "/img/icon-128.svg"
                              : state.style === "fill"
                              ? "/img/icon-168.svg"
                              : "/img/icon-10.svg"
                          }
                        />
                      )}

                      {((state.state === "focused" && state.style === "fill") ||
                        (state.state === "hovered" && state.style === "fill") ||
                        (state.state === "pressed" && state.style === "fill") ||
                        (state.state === "rested" && state.style === "fill")) && (
                        <img
                          className="img"
                          alt="Icon"
                          src={
                            state.state === "focused"
                              ? "/img/icon-162.svg"
                              : state.state === "hovered"
                              ? "/img/icon-164.svg"
                              : state.state === "pressed"
                              ? "/img/icon-166.svg"
                              : "/img/icon-160.svg"
                          }
                        />
                      )}
                    </div>
                  )}

                  {((state.size === "md" && state.state === "focused" && state.style === "fill") ||
                    (state.size === "md" && state.state === "hovered" && state.style === "fill") ||
                    (state.size === "md" && state.state === "pressed" && state.style === "fill") ||
                    (state.size === "md" && state.state === "rested" && state.style === "fill") ||
                    (state.size === "sm" && state.state === "focused" && state.style === "fill") ||
                    (state.size === "sm" && state.state === "hovered" && state.style === "fill") ||
                    (state.size === "sm" && state.state === "pressed" && state.style === "fill") ||
                    (state.size === "sm" && state.state === "rested" && state.style === "fill") ||
                    (state.size === "x-sm" && state.state === "focused" && state.style === "fill") ||
                    (state.size === "x-sm" && state.state === "hovered" && state.style === "fill") ||
                    (state.size === "x-sm" && state.state === "pressed" && state.style === "fill") ||
                    (state.size === "x-sm" && state.state === "rested" && state.style === "fill")) && (
                    <img
                      className="icon-2"
                      alt="Icon"
                      src={
                        state.size === "md" && state.state === "pressed"
                          ? "/img/icon-172.svg"
                          : state.size === "md" && state.state === "focused"
                          ? "/img/icon-174.svg"
                          : state.state === "hovered" && state.size === "md"
                          ? "/img/icon-176.svg"
                          : state.state === "rested" && state.size === "sm"
                          ? "/img/icon-180.svg"
                          : state.size === "sm" && state.state === "pressed"
                          ? "/img/icon-182.svg"
                          : state.size === "sm" && state.state === "focused"
                          ? "/img/icon-184.svg"
                          : state.state === "hovered" && state.size === "sm"
                          ? "/img/icon-186.svg"
                          : state.size === "x-sm" && state.state === "rested"
                          ? "/img/icon-190.svg"
                          : state.size === "x-sm" && state.state === "pressed"
                          ? "/img/icon-192.svg"
                          : state.size === "x-sm" && state.state === "focused"
                          ? "/img/icon-194.svg"
                          : state.size === "x-sm" && state.state === "hovered"
                          ? "/img/icon-196.svg"
                          : "/img/icon-170.svg"
                      }
                    />
                  )}
                </>
              </>
            )}
          </>
          <>{showLabel && <div className={`text-wrapper ${labelClassName}`}>{label}</div>}</>
          <>
            {showEndIcon && (
              <>
                <>
                  {((state.size === "md" && state.state === "disabled" && state.style === "fill") ||
                    (state.size === "md" && state.style === "accent") ||
                    (state.size === "md" && state.style === "alternative") ||
                    (state.size === "md" && state.style === "ghost") ||
                    (state.size === "md" && state.style === "stroke") ||
                    (state.size === "sm" && state.state === "disabled" && state.style === "fill") ||
                    (state.size === "sm" && state.style === "accent") ||
                    (state.size === "sm" && state.style === "alternative") ||
                    (state.size === "sm" && state.style === "ghost") ||
                    (state.size === "sm" && state.style === "stroke") ||
                    (state.size === "x-sm" && state.state === "disabled" && state.style === "fill") ||
                    (state.size === "x-sm" && state.style === "accent") ||
                    (state.size === "x-sm" && state.style === "alternative") ||
                    (state.size === "x-sm" && state.style === "ghost") ||
                    (state.size === "x-sm" && state.style === "stroke")) && (
                    <GlyphsMachina
                      className={`${state.size === "x-sm" ? "class" : "class-2"}`}
                      glyphsMachina={
                        state.style === "stroke" && state.state === "hovered" && state.size === "md"
                          ? "/img/icon-3.svg"
                          : state.style === "stroke" && state.size === "md" && state.state === "pressed"
                          ? "/img/icon-5.svg"
                          : state.style === "stroke" && state.size === "md" && state.state === "focused"
                          ? "/img/icon-7.svg"
                          : state.style === "stroke" && state.size === "md" && state.state === "disabled"
                          ? "/img/icon-9.svg"
                          : state.style === "stroke" && state.state === "rested" && state.size === "sm"
                          ? "/img/icon-21.svg"
                          : state.style === "stroke" && state.state === "hovered" && state.size === "sm"
                          ? "/img/icon-23.svg"
                          : state.style === "stroke" && state.size === "sm" && state.state === "pressed"
                          ? "/img/icon-25.svg"
                          : state.style === "stroke" && state.size === "sm" && state.state === "focused"
                          ? "/img/icon-27.svg"
                          : state.style === "stroke" && state.state === "disabled" && state.size === "sm"
                          ? "/img/icon-29.svg"
                          : state.style === "stroke" && state.size === "x-sm" && state.state === "rested"
                          ? "/img/icon-31.svg"
                          : state.style === "stroke" && state.size === "x-sm" && state.state === "hovered"
                          ? "/img/icon-33.svg"
                          : state.style === "stroke" && state.size === "x-sm" && state.state === "pressed"
                          ? "/img/icon-35.svg"
                          : state.style === "stroke" && state.size === "x-sm" && state.state === "focused"
                          ? "/img/icon-37.svg"
                          : state.style === "stroke" && state.size === "x-sm" && state.state === "disabled"
                          ? "/img/icon-39.svg"
                          : state.state === "rested" && state.size === "md" && state.style === "ghost"
                          ? "/img/icon-41.svg"
                          : state.state === "hovered" && state.size === "md" && state.style === "ghost"
                          ? "/img/icon-43.svg"
                          : state.size === "md" && state.style === "ghost" && state.state === "pressed"
                          ? "/img/icon-45.svg"
                          : state.size === "md" && state.style === "ghost" && state.state === "focused"
                          ? "/img/icon-47.svg"
                          : state.size === "md" && state.state === "disabled" && state.style === "ghost"
                          ? "/img/icon-49.svg"
                          : state.state === "rested" && state.size === "sm" && state.style === "ghost"
                          ? "/img/icon-61.svg"
                          : state.state === "hovered" && state.size === "sm" && state.style === "ghost"
                          ? "/img/icon-63.svg"
                          : state.size === "sm" && state.style === "ghost" && state.state === "pressed"
                          ? "/img/icon-65.svg"
                          : state.size === "sm" && state.style === "ghost" && state.state === "focused"
                          ? "/img/icon-67.svg"
                          : state.style === "ghost" && state.state === "disabled" && state.size === "sm"
                          ? "/img/icon-69.svg"
                          : state.size === "x-sm" && state.state === "rested" && state.style === "ghost"
                          ? "/img/icon-71.svg"
                          : state.size === "x-sm" && state.state === "hovered" && state.style === "ghost"
                          ? "/img/icon-73.svg"
                          : state.size === "x-sm" && state.style === "ghost" && state.state === "pressed"
                          ? "/img/icon-75.svg"
                          : state.size === "x-sm" && state.style === "ghost" && state.state === "focused"
                          ? "/img/icon-77.svg"
                          : state.size === "x-sm" && state.state === "disabled" && state.style === "ghost"
                          ? "/img/icon-79.svg"
                          : state.style === "alternative" && state.state === "rested" && state.size === "md"
                          ? "/img/icon-81.svg"
                          : state.style === "alternative" && state.state === "hovered" && state.size === "md"
                          ? "/img/icon-83.svg"
                          : state.style === "alternative" && state.size === "md" && state.state === "pressed"
                          ? "/img/icon-85.svg"
                          : state.style === "alternative" && state.size === "md" && state.state === "focused"
                          ? "/img/icon-87.svg"
                          : state.style === "alternative" && state.size === "md" && state.state === "disabled"
                          ? "/img/icon-89.svg"
                          : state.style === "alternative" && state.state === "rested" && state.size === "sm"
                          ? "/img/icon-101.svg"
                          : state.style === "alternative" && state.state === "hovered" && state.size === "sm"
                          ? "/img/icon-103.svg"
                          : state.style === "alternative" && state.size === "sm" && state.state === "pressed"
                          ? "/img/icon-105.svg"
                          : state.style === "alternative" && state.size === "sm" && state.state === "focused"
                          ? "/img/icon-107.svg"
                          : state.style === "alternative" && state.state === "disabled" && state.size === "sm"
                          ? "/img/icon-109.svg"
                          : state.style === "alternative" && state.size === "x-sm" && state.state === "rested"
                          ? "/img/icon-111.svg"
                          : state.style === "alternative" && state.size === "x-sm" && state.state === "hovered"
                          ? "/img/icon-113.svg"
                          : state.style === "alternative" && state.size === "x-sm" && state.state === "pressed"
                          ? "/img/icon-115.svg"
                          : state.style === "alternative" && state.size === "x-sm" && state.state === "focused"
                          ? "/img/icon-117.svg"
                          : state.style === "alternative" && state.size === "x-sm" && state.state === "disabled"
                          ? "/img/icon-119.svg"
                          : state.state === "rested" && state.size === "md" && state.style === "accent"
                          ? "/img/icon-131.svg"
                          : state.size === "md" && state.style === "accent" && state.state === "pressed"
                          ? "/img/icon-133.svg"
                          : state.size === "md" && state.style === "accent" && state.state === "focused"
                          ? "/img/icon-135.svg"
                          : state.state === "hovered" && state.size === "md" && state.style === "accent"
                          ? "/img/icon-137.svg"
                          : state.size === "md" && state.state === "disabled" && state.style === "accent"
                          ? "/img/icon-139.svg"
                          : state.state === "rested" && state.size === "sm" && state.style === "accent"
                          ? "/img/icon-141.svg"
                          : state.size === "sm" && state.style === "accent" && state.state === "pressed"
                          ? "/img/icon-143.svg"
                          : state.size === "sm" && state.style === "accent" && state.state === "focused"
                          ? "/img/icon-145.svg"
                          : state.state === "hovered" && state.size === "sm" && state.style === "accent"
                          ? "/img/icon-147.svg"
                          : state.style === "accent" && state.state === "disabled" && state.size === "sm"
                          ? "/img/icon-149.svg"
                          : state.size === "x-sm" && state.state === "rested" && state.style === "accent"
                          ? "/img/icon-151.svg"
                          : state.size === "x-sm" && state.style === "accent" && state.state === "pressed"
                          ? "/img/icon-153.svg"
                          : state.size === "x-sm" && state.style === "accent" && state.state === "focused"
                          ? "/img/icon-155.svg"
                          : state.size === "x-sm" && state.state === "hovered" && state.style === "accent"
                          ? "/img/icon-157.svg"
                          : state.size === "x-sm" && state.state === "disabled" && state.style === "accent"
                          ? "/img/icon-159.svg"
                          : state.size === "md" && state.style === "fill"
                          ? "/img/icon-179.svg"
                          : state.size === "sm" && state.style === "fill"
                          ? "/img/icon-189.svg"
                          : state.size === "x-sm" && state.style === "fill"
                          ? "/img/icon-199.svg"
                          : "/img/icon-1.svg"
                      }
                    />
                  )}

                  {state.size === "lg" && (
                    <div className="container">
                      {((state.state === "disabled" && state.style === "fill") ||
                        (state.state === "focused" && state.style === "alternative") ||
                        (state.state === "focused" && state.style === "ghost") ||
                        (state.state === "focused" && state.style === "stroke") ||
                        (state.state === "hovered" && state.style === "alternative") ||
                        (state.state === "hovered" && state.style === "ghost") ||
                        (state.state === "hovered" && state.style === "stroke") ||
                        (state.state === "pressed" && state.style === "alternative") ||
                        (state.state === "pressed" && state.style === "ghost") ||
                        (state.state === "pressed" && state.style === "stroke") ||
                        (state.state === "rested" && state.style === "alternative") ||
                        (state.state === "rested" && state.style === "ghost") ||
                        (state.state === "rested" && state.style === "stroke") ||
                        state.style === "accent") && (
                        <GlyphsMachina
                          className="icon"
                          glyphsMachina={
                            state.style === "stroke" && state.state === "focused"
                              ? "/img/icon-13.svg"
                              : state.style === "stroke" && state.state === "hovered"
                              ? "/img/icon-15.svg"
                              : state.style === "stroke" && state.state === "pressed"
                              ? "/img/icon-17.svg"
                              : state.state === "rested" && state.style === "ghost"
                              ? "/img/icon-51.svg"
                              : state.style === "ghost" && state.state === "focused"
                              ? "/img/icon-53.svg"
                              : state.state === "hovered" && state.style === "ghost"
                              ? "/img/icon-55.svg"
                              : state.style === "ghost" && state.state === "pressed"
                              ? "/img/icon-57.svg"
                              : state.style === "alternative" && state.state === "rested"
                              ? "/img/icon-91.svg"
                              : state.style === "alternative" && state.state === "focused"
                              ? "/img/icon-93.svg"
                              : state.style === "alternative" && state.state === "hovered"
                              ? "/img/icon-95.svg"
                              : state.style === "alternative" && state.state === "pressed"
                              ? "/img/icon-97.svg"
                              : state.state === "rested" && state.style === "accent"
                              ? "/img/icon-121.svg"
                              : state.style === "accent" && state.state === "focused"
                              ? "/img/icon-123.svg"
                              : state.state === "hovered" && state.style === "accent"
                              ? "/img/icon-125.svg"
                              : state.style === "accent" && state.state === "pressed"
                              ? "/img/icon-127.svg"
                              : state.state === "disabled" && state.style === "accent"
                              ? "/img/icon-129.svg"
                              : state.style === "fill"
                              ? "/img/icon-169.svg"
                              : "/img/icon-11.svg"
                          }
                        />
                      )}

                      {state.state === "disabled" && ["alternative", "ghost", "stroke"].includes(state.style) && (
                        <>
                          <>
                            {showEndIcon && (
                              <GlyphsMachina
                                className="icon"
                                glyphsMachina={
                                  state.style === "ghost"
                                    ? "/img/icon-59.svg"
                                    : state.style === "alternative"
                                    ? "/img/icon-99.svg"
                                    : "/img/icon-19.svg"
                                }
                              />
                            )}
                          </>
                        </>
                      )}

                      {((state.state === "focused" && state.style === "fill") ||
                        (state.state === "hovered" && state.style === "fill") ||
                        (state.state === "pressed" && state.style === "fill") ||
                        (state.state === "rested" && state.style === "fill")) && (
                        <img
                          className="img"
                          alt="Icon"
                          src={
                            state.state === "focused"
                              ? "/img/icon-163.svg"
                              : state.state === "hovered"
                              ? "/img/icon-165.svg"
                              : state.state === "pressed"
                              ? "/img/icon-167.svg"
                              : "/img/icon-161.svg"
                          }
                        />
                      )}
                    </div>
                  )}

                  {((state.size === "md" && state.state === "focused" && state.style === "fill") ||
                    (state.size === "md" && state.state === "hovered" && state.style === "fill") ||
                    (state.size === "md" && state.state === "pressed" && state.style === "fill") ||
                    (state.size === "md" && state.state === "rested" && state.style === "fill") ||
                    (state.size === "sm" && state.state === "focused" && state.style === "fill") ||
                    (state.size === "sm" && state.state === "hovered" && state.style === "fill") ||
                    (state.size === "sm" && state.state === "pressed" && state.style === "fill") ||
                    (state.size === "sm" && state.state === "rested" && state.style === "fill") ||
                    (state.size === "x-sm" && state.state === "focused" && state.style === "fill") ||
                    (state.size === "x-sm" && state.state === "hovered" && state.style === "fill") ||
                    (state.size === "x-sm" && state.state === "pressed" && state.style === "fill") ||
                    (state.size === "x-sm" && state.state === "rested" && state.style === "fill")) && (
                    <img
                      className="icon-3"
                      alt="Icon"
                      src={
                        state.size === "md" && state.state === "pressed"
                          ? "/img/icon-173.svg"
                          : state.size === "md" && state.state === "focused"
                          ? "/img/icon-175.svg"
                          : state.state === "hovered" && state.size === "md"
                          ? "/img/icon-177.svg"
                          : state.state === "rested" && state.size === "sm"
                          ? "/img/icon-181.svg"
                          : state.size === "sm" && state.state === "pressed"
                          ? "/img/icon-183.svg"
                          : state.size === "sm" && state.state === "focused"
                          ? "/img/icon-185.svg"
                          : state.state === "hovered" && state.size === "sm"
                          ? "/img/icon-187.svg"
                          : state.size === "x-sm" && state.state === "rested"
                          ? "/img/icon-191.svg"
                          : state.size === "x-sm" && state.state === "pressed"
                          ? "/img/icon-193.svg"
                          : state.size === "x-sm" && state.state === "focused"
                          ? "/img/icon-195.svg"
                          : state.size === "x-sm" && state.state === "hovered"
                          ? "/img/icon-197.svg"
                          : "/img/icon-171.svg"
                      }
                    />
                  )}
                </>
              </>
            )}
          </>
        </>
      )}

      {((state.size === "lg" && state.state === "loading") ||
        (state.size === "md" && state.state === "loading" && state.style === "accent") ||
        (state.size === "md" && state.state === "loading" && state.style === "alternative") ||
        (state.size === "md" && state.state === "loading" && state.style === "ghost") ||
        (state.size === "md" && state.state === "loading" && state.style === "stroke") ||
        (state.size === "sm" && state.state === "loading")) && (
        <StatusSpinner18
          className={`${state.size === "lg" ? "class-3" : state.size === "sm" ? "class-4" : "class-5"}`}
          color={state.style === "fill" ? "black" : "white"}
        />
      )}

      {state.state === "loading" &&
        ["md", "x-sm"].includes(state.size) &&
        (state.size === "x-sm" || state.style === "fill") && (
          <img
            className="status-spinner"
            alt="Status spinner"
            src={
              state.size === "md"
                ? "/img/status-spinner-17.svg"
                : state.size === "x-sm" && state.style === "fill"
                ? "/img/status-spinner-19.svg"
                : "/img/status-spinner-15.svg"
            }
          />
        )}
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hovered",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "rested",
      };
  }

  return state;
}

Simple.propTypes = {
  label: PropTypes.string,
  showEndIcon: PropTypes.bool,
  showStartIcon: PropTypes.bool,
  showLabel: PropTypes.bool,
  size: PropTypes.oneOf(["md", "x-sm", "lg", "sm"]),
  style: PropTypes.oneOf(["stroke", "alternative", "fill", "accent", "ghost"]),
  stateProp: PropTypes.oneOf(["pressed", "focused", "hovered", "rested", "loading", "disabled"]),
};
