import { type ThemeType } from "../types";

const defaultTheme: ThemeType = {
  colors: {
    primary: {
      hard: "#06377B",
      medium: "#0061A7",
      soft: "#66A3FF",
    },
    neutral: {
      hard: "#374062",
      medium: "#7B87AF",
      soft: "#AEB3C6",
    },
  },
  fonts: {
    family: "",
    size: {
      sm: "",
      md: "",
      lg: "",
    },
    weight: {
      bold: 700,
      semibold: 600,
      normal: 400,
      thin: 300,
    },
  },
};

export { defaultTheme };
