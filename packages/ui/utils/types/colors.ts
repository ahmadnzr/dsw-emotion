// type ColorKeys = "primary" | "neutral";
//
// type ColorValue = Record<
//   "hard" | "medium" | "soft" | "ultrasoft" | "light",
//   string
// >;

// type ColorType = Record<ColorKeys, ColorValue>;
interface ColorType {
  primary: {
    dark: string;
    hard: string;
    medium: string;
    soft: string;
  };
  neutral: {
    hard: string;
    medium: string;
    soft: string;
  };
  error: {
    hard: string;
    medium: string;
    soft: string;
  };
  success: {
    hard: string;
    medium: string;
    soft: string;
  };
  white: string;
}

export { type ColorType };
