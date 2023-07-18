import { ThemeOptions } from "@mui/material";

export const lightPalette: ThemeOptions = {
  palette: {
    primary: {
      main: "#3B82F6",
    },
    secondary: {
      main: "#EC4899",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F3F4F6",
    },
    text: {
      primary: "#1F2937",
      secondary: "#6B7280",
    },

    success: {
      main: "#10B981",
    },
    warning: {
      main: "#F59E0B",
    },
    error: {
      main: "#EF4444",
    },
  },
};

export const darkPalette: ThemeOptions = {
  palette: {
    primary: {
      light: "#00BCD4",
      main: "#00BCD4",
      dark: "#212121",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#8BC34A",
      main: "#8BC34A",
      dark: "#4D4D4D",
      contrastText: "#ffffff",
    },
    error: {
      light: "#D84031",
      main: "#D84031",
      dark: "#B71C1C",
      contrastText: "#ffffff",
    },
    warning: {
      light: "#FF9800",
      main: "#FF9800",
      dark: "#E6824B",
      contrastText: "#ffffff",
    },
    background: {
      default: "#212121",
      paper: "#303030",
    },
    text: {
      primary: "#ffffff",
      secondary: "#888888",
      disabled: "#666666",
    },
  },
};
