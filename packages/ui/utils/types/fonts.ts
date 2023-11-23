type FontSize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
type FontWeight = "bold" | "semibold" | "normal" | "thin";
type HeadingType = "h1" | "h2" | "h3" | "h4";

interface FontType {
  family: string;
  size: Record<FontSize, string>;
  weight: Record<FontWeight, number>;
}

export { type FontType, type FontSize, type FontWeight, type HeadingType };
