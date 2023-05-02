import { Toaster } from "react-hot-toast";
import Theme from "./common/Theme";
import { ThemeProvider } from "@mui/material/styles";
import Router from "./pages/router/Router.jsx";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Toaster />
      <Router />
    </ThemeProvider>
  );
}

export default App;
