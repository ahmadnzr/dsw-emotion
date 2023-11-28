type ColorKeys =
  | "primary"
  | "neutral"
  | "error"
  | "success"
  | "warning"
  | "info";

type ColorValue = Record<100 | 200 | 300 | 400 | 500, string>;

type ColorType = Record<ColorKeys, ColorValue>;

// interface ColorType2 {
//   primary: {
//     dark: string;
//     hard: string;
//     medium: string;
//     soft: string;
//   };
//   neutral: {
//     hard: string;
//     medium: string;
//     soft: string;
//   };
//   error: {
//     hard: string;
//     medium: string;
//     soft: string;
//   };
//   success: {
//     hard: string;
//     medium: string;
//     soft: string;
//   };
//   white: string;
// }

export { type ColorType };
