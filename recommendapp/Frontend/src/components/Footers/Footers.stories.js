import { Footers } from ".";

export default {
  title: "Components/Footers",
  component: Footers,
  argTypes: {
    style: {
      options: [
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
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    style: "fourteen",
    className: {},
    simpleLabel: "Link",
    simpleSizeMdStyleStrokeClassName: {},
    simpleLabelClassName: {},
    dividerClassName: {},
    simpleLabelClassNameOverride: {},
    simpleDivClassName: {},
    simpleDivClassNameOverride: {},
    hasText: true,
  },
};
