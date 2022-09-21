import Home from './pages/home/Home';
import NavBar from './components/ui/navBar/NavBar';
import {theme} from './common/Theme';
import {ThemeProvider} from '@mui/material/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <NavBar />
    <Home />
      
    </ThemeProvider>
  );
}

export default App;
