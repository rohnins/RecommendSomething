import { Simple } from ".";

export default {
  title: "Components/Simple",
  component: Simple,
  argTypes: {
    size: {
      options: ["md", "x-sm", "lg", "sm"],
      control: { type: "select" },
    },
    style: {
      options: ["stroke", "alternative", "fill", "accent", "ghost"],
      control: { type: "select" },
    },
    stateProp: {
      options: ["pressed", "focused", "hovered", "rested", "loading", "disabled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    label: "Label",
    showEndIcon: true,
    showStartIcon: true,
    showLabel: true,
    size: "md",
    style: "stroke",
    stateProp: "pressed",
    className: {},
    labelClassName: {},
  },
};
