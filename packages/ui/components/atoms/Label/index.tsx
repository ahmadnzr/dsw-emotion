import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

import { type ThemeType } from "../../../helpers";
import { defaultTheme } from "../../../helpers/lib/defaultTheme";

interface LabelProps {
  /**
   * Text inside label
   * */
  children: string;

  /**
   * Text color */
  color?: string;

  /**
   * The size of the label
   * */
  fontSize?: string;
}

export const Label = ({ children, color, fontSize }: LabelProps) => {
  const theme = useTheme() as ThemeType;

  return (
    <LabelStyled
      color={color || theme.colors?.neutral.hard}
      fontSize={fontSize || theme.fonts?.size.md}
    >
      {children}
    </LabelStyled>
  );
};

const LabelStyled = styled.label(
  {
    letterSpacing: "0.13px",
  },
  ({
    color = defaultTheme.colors?.neutral.medium!,
    fontSize = defaultTheme.fonts?.size.md!,
  }: {
    color?: string;
    fontSize?: string;
  }) => ({
    color,
    fontSize,
  }),
);
