import { type ThemeType } from "../types";

const defaultTheme: ThemeType = {
  colors: {
    primary: {
      hard: "#06377B",
      medium: "#0061A7",
      soft: "#66A3FF",
      light: "#eff8ff",
      ultrasoft: "#B3C1E7",
    },
    neutral: {
      hard: "#374062",
      medium: "#7B87AF",
      soft: "#AEB3C6",
      ultrasoft: "#B3C1E7",
      light: "#fff",
    },
  },
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

export { defaultTheme };
