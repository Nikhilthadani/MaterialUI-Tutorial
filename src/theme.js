import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#F4005E ",
    },
  },
  typography: {
    h1: {
      fontSize: "20px",
    },
  },
  breakpoints: {
    values: {
      xs: 200,
    },
  },
});
