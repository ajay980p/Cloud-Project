import { createTheme } from "@mui/material";
import { create } from "@mui/material/styles/createTransitions";

export const Colors = {
  primary: "#26a69a",
  secondary: "#ff7449",
  primaryLight: "#51b7ae",
  primaryDark: "#1a746b",
  secondaryLight: "#ff8f6d",
  secondaryDark: "#b25133",

  //Solid Color
  white: "#fff",
  black: "#363636",
  grayLight: "#bdbdbd",
  grayDark: "#535353",
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
      light: Colors.primaryLight,
      dark: Colors.primaryDark,
    },
    secondary: {
      main: Colors.secondary,
      light: Colors.secondaryLight,
      dark: Colors.secondaryDark,
    },
  },
});

export default theme;

// primary: "#26a69a"
// secondary: "#ffccbc",