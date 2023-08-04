import { Navigation } from ".";

export default {
  title: "Components/Navigation",
  component: Navigation,
  argTypes: {
    style: {
      options: ["seven", "two", "ten", "three", "nine", "four", "eleven", "one", "five", "eight", "six"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    style: "seven",
    className: {},
    buttonPrimaryButtonPrimaryClassName: {},
    hasLinks: true,
    menuClassName: {},
    simpleLabelClassName: {},
    simpleLabelClassNameOverride: {},
    simpleDivClassName: {},
  },
};
