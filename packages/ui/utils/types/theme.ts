import "@emotion/react";

import { type ColorType } from "./colors";
import { type FontType } from "./fonts";
import { type SpacingType } from "./spacing";

interface ThemeType {
  colors: ColorType;
  fonts: FontType;
  spacing: SpacingType;
}

declare module "@emotion/react" {
  export interface Theme extends ThemeType {}
}

export { type ThemeType };
