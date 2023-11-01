type ColorKeys = "primary" | "neutral";

type ColorValue = Record<"hard" | "medium" | "soft" | "light", string>;

type ColorType = Record<ColorKeys, ColorValue>;

export { type ColorType };
