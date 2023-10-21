type ColorKeys = "PRIMARY" | "NEUTRAL";

type ColorValue = Record<"hard" | "medium" | "light", string>;

type ColorType = Record<ColorKeys, ColorValue>;

const Colors: ColorType = {
  PRIMARY: {
    hard: "#06377B",
    medium: "#0061A7",
    light: "",
  },
  NEUTRAL: {
    hard: "#2B2F3C",
    medium: "#374062",
    light: "#FFFFFF",
  },
};

export { type ColorType, Colors };
