import { createTheme } from "@mui/material";

const colorSchemes = {
  light: {
    background: "#F9EBFF",
    primary: "#110B6E",
    secondary: "#544573",
    error: "#BB0000",
    warning: "#D89C00",
    success: "#009c7a",
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: colorSchemes.light.primary,
    },
    secondary: {
      main: colorSchemes.light.secondary,
    },
    error: {
      main: colorSchemes.light.error,
    },
    success: {
      main: colorSchemes.light.error,
    },
    warning: {
      main: colorSchemes.light.warning,
    },
    background: {
      default: colorSchemes.light.background,
    },
  },

  typography: { fontFamily: null },

  components: {
    // Example of overriding component
    MuiTableContainer: {
      styleOverrides: {
        root: {
          height: "calc(100vh - 270px)",
        },
      },
    },

    MuiButton: {
      defaultProps: {
        size: "small",
      },
    },
  },
});
