import { MantineThemeOverride } from "@mantine/core";

export const CustomTheme: MantineThemeOverride = {
  colorScheme: "light",
  fontFamilyMonospace: "",
  colors: {
    greenShade: [
      "#43d9ad",
      "#56ddb5",
      "#69e1bd",
      "#7be4c6",
      "#8ee8ce",
      "#a1ecd6",
      "#b4f0de",
      "#c7f4e6",
      "#d9f7ef",
      "#ecfbf7",
    ],
    navyBlue: [
      "#4d5bce",
      "#4552b9",
      "#3e49a5",
      "#364090",
      "#2e377c",
      "#272e67",
      "#1f2452",
      "#171b3e",
      "#0f1229",
      "#080915",
    ],
    darkBlue: [
      "#010c15",
      "#010b13",
      "#010a11",
      "#01080f",
      "#01070d",
      "#01060b",
      "#000508",
      "#000406",
      "#000204",
      "#000102",
    ],
    textColor: ["#607B96"],
  },
  breakpoints: {
    nm: "940px",
  },
};
