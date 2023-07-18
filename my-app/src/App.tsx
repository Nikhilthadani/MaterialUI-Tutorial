import {
  Button,
  CssBaseline,
  Switch,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { useState } from "react";
import { darkPalette, lightPalette } from "./lib";
const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme(darkMode ? darkPalette : lightPalette);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Switch
        checked={darkMode}
        onChange={() => setDarkMode((prev) => !prev)}
      />
      <Typography>
        Hello With {darkMode ? "Dark Mode" : "Light Mode"}
      </Typography>
      <Button variant="contained">Hello</Button>
    </ThemeProvider>
  );
};

export default App;
