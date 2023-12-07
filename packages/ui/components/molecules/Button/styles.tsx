import styled from "@emotion/styled";

import { type ThemeType } from "../../../utils";

export const ButtonStyled = styled.button(
  {
    outline: "none",
    border: "none",
    cursor: "pointer",
    position: "relative",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "4px",
  },
  ({ theme }: { theme: ThemeType }) => ({
    "&.button_sm": {
      padding: "0 7px",
      fontSize: "14px",
      borderRadius: "4px",
    },
    "&.button_md": {
      padding: "4px 15px",
      fontSize: "14px",
      borderRadius: "6px",
    },
    "&.button_lg": {
      padding: "6px 15px",
      fontSize: "16px",
      borderRadius: "8px",
    },
    "&.button_sm_round": {
      borderRadius: "24px",
    },
    "&.button_md_round": {
      borderRadius: "32px",
    },
    "&.button_lg_round": {
      borderRadius: "40px",
    },
    "&.button_circle": {
      borderRadius: "50%",
      overflow: "hidden",
      paddingInlineStart: 0,
      paddingInlineEnd: 0,
    },
    "&.button_sm_circle": {
      height: "24px",
      width: "24px",
    },
    "&.button_md_circle": {
      height: "32px",
      width: "32px",
    },
    "&.button_lg_circle": {
      height: "40px",
      width: "40px",
    },
    "&.button_width_full": {
      width: "100%",
    },

    "&.button-contained": {
      color: theme.colors.neutral[100],
      backgroundColor: theme.colors.primary[400],
      border: `1px solid ${theme.colors.primary[400]}`,

      "&:hover": {
        backgroundColor: theme.colors.primary[300],
        border: `1px solid ${theme.colors.primary[300]}`,
      },
      "&:active": {
        backgroundColor: theme.colors.primary[400],
      },
    },
    "&.button-outlined": {
      color: theme.colors.primary[400],
      backgroundColor: theme.colors.neutral[100],
      border: `1px solid ${theme.colors.primary[400]}`,

      "&:hover": {
        backgroundColor: theme.colors.primary[100],
      },
      "&:active": {
        backgroundColor: theme.colors.primary[200],
      },
    },
    "&.button-text": {
      color: theme.colors.primary[500],
      backgroundColor: "transparent",
      border: "1px solid transparent",

      "&:hover": {
        backgroundColor: theme.colors.primary[100],
      },
      "&:active": {
        backgroundColor: theme.colors.primary[200],
      },
      "&:disabled": {
        cursor: "initial",
        color: theme.colors.neutral[300],
        backgroundColor: "transparent",
      },
    },
    "&.button-link": {
      color: theme.colors.primary[500],
      backgroundColor: "transparent",
      transition: "none",

      "& > *": {
        transition: "all 0.3s ease",
      },

      "&:where(.button_sm, .button_md, .button_lg)": {
        padding: 0,
        borderRadius: 0,
      },
      "&:hover": {
        color: theme.colors.primary[300],
        ".button-link__icon": {
          color: theme.colors.primary[300],
        },
      },
      "&:active": {
        color: theme.colors.primary[500],
        ".button-link__icon": {
          color: theme.colors.primary[500],
        },
      },
      "&:disabled": {
        cursor: "initial",
        color: theme.colors.neutral[300],
        backgroundColor: "transparent",
      },
    },
    "& .button-contained__icon": {
      color: theme.colors.neutral[100],
    },
    "& .button-outlined__icon": {
      color: theme.colors.primary[400],
    },
    "& .button-text__icon": {
      color: theme.colors.primary[500],
    },
    "& .button-link__icon": {
      color: theme.colors.primary[500],
    },
    "& .button__icon_sm, .button-icon_md": {
      width: "14px",
      height: "14px",
    },
    "& .button__icon_lg": {
      width: "16px",
      height: "16px",
    },

    "&:disabled": {
      "&.button-contained, &.button-outlined": {
        cursor: "initial",
        backgroundColor: theme.colors.neutral[200],
        border: `1px solid ${theme.colors.neutral[200]}`,
        color: theme.colors.neutral[300],
      },
    },
  }),
);

/**
 * TODO: Refactor this Button
 * 1. difference icon size base on button size - Done
 * 2. more readable code - Done
 * 3. support for full width button - Done
 * 4. get spacing from theme
 * 5. error button
 * */
