"use client";

import React from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { type ThemeType } from "ui";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const theme: ThemeType = {
  colors: {
    primary: {
      hard: "#0061A7",
    },
    neutral: {
      hard: "#374062",
    },
  },
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
};

export default ThemeProvider;
