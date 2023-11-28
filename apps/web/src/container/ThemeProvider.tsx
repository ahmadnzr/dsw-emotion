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
      100: "#e6f7ff",
      200: "#91d5ff",
      300: "#1890ff",
      400: "#096dd9",
      500: "#0050b3",
    },
    neutral: {
      100: "#ffffff",
      200: "#f5f5f5",
      300: "#d9d9d9",
      400: "#262626",
      500: "#141414",
    },
    success: {
      100: "#f6ffed",
      200: "#b7eb8f",
      300: "#73d13d",
      400: "#389e0d",
      500: "#135200",
    },
    warning: {
      100: "#fff7e6",
      200: "#ffd591",
      300: "#ffa940",
      400: "#d46b08",
      500: "#873800",
    },
    error: {
      100: "#fff1f0",
      200: "#ffa39e",
      300: "#ff4d4f",
      400: "#cf1322",
      500: "#820014",
    },
    info: {
      100: "#e6f4ff",
      200: "#91caff",
      300: "#4096ff",
      400: "#0958d9",
      500: "#002c8c",
    },
  },
  fonts: {
    family: "",
    size: {
      xs: "0.6rem",
      sm: "0.8rem",
      md: "1rem",
      lg: "1.2rem",
      xl: "1.44rem",
      xxl: "1.72rem",
    },
    weight: {
      bold: 700,
      semibold: 600,
      normal: 400,
      thin: 300,
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 10,
    lg: 20,
  },
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
};

export default ThemeProvider;
