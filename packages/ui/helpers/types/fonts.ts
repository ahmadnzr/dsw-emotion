type FontSize = "xs" | "sm" | "md" | "lg";
type FontWeight = "bold" | "semibold" | "normal" | "thin";
type HeadingType = "h1" | "h2";

interface FontType {
  family: string;
  size: Record<FontSize, string>;
  weight: Record<FontWeight, number>;
  heading: Record<HeadingType, string>;
}

export { type FontType, type FontSize, type FontWeight, type HeadingType };
