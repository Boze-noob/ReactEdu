import Home from "./pages/home/Home";
import Theme from "./common/Theme";
import { ThemeProvider } from "@mui/material/styles";
import Router from "./pages/router/Router.jsx";
import ArticleDetails from "./components/ui/articles/ArticleDetails";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <ArticleDetails />
    </ThemeProvider>
  );
}

export default App;
