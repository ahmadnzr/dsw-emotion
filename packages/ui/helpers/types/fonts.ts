interface FontType {
  family: string;
  size: {
    sm: string;
    md: string;
    lg: string;
  };
  weight: {
    bold: number;
    semibold: number;
    normal: number;
    thin: number;
  };
}

export { type FontType };
