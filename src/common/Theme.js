import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#ffffff",
    },
    text: {
      main: "#000000",
    },
  },
  spacing: 1,
  typography: {
    fontFamily: ["Lora", "Roboto"].join(","),
  },
});

export default theme;
