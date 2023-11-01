type SpacingKey = "xs" | "sm" | "md" | "lg";

interface SpacingType extends Record<SpacingKey, number> {}

export { type SpacingKey, type SpacingType };
