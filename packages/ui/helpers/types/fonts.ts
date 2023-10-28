type FontSize = "xs" | "sm" | "md" | "lg";
type FontWeight = "bold" | "semibold" | "normal" | "thin";

interface FontType {
  family: string;
  size: Record<FontSize, string>;
  weight: Record<FontWeight, number>;
}

export { type FontType, type FontSize, type FontWeight };
