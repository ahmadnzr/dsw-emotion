type ColorKeys = "primary" | "neutral";

type ColorValue = Record<"hard" | "medium" | "soft", string>;

type ColorType = Record<ColorKeys, ColorValue>;

export { type ColorType };