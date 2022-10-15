import Home from "./pages/home/Home";
import Theme from "./common/Theme";
import { ThemeProvider } from "@mui/material/styles";
import Router from "./pages/router/Router.jsx";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
