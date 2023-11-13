import { type ThemeType } from "../types";

const Colors = {
  primary: {
    dark: "#06377B",
    hard: "#0061A7",
    medium: "#66A3FF",
    soft: "#EAF2FF",
  },
  neutral: {
    hard: "#374062",
    medium: "#B3C1E7",
    soft: "",
  },
  error: {
    hard: "#FF4F4F",
    medium: "#D14848",
    soft: "#F4DEDE",
  },
  success: {
    hard: "#75D37F",
    medium: "",
    soft: "#E7FFDC",
  },
  white: "#fff",
};

const defaultTheme: ThemeType = {
  colors: Colors,
  fonts: {
    family: "",
    size: {
      xs: "10px",
      sm: "13px",
      md: "15px",
      lg: "20px",
    },
    weight: {
      bold: 700,
      semibold: 600,
      normal: 400,
      thin: 300,
    },
    heading: {
      h1: "24px",
      h2: "20px",
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 10,
    lg: 20,
  },
};

export { defaultTheme, Colors };
