import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';
import Header from '../Header/Header.jsx';
import { createTheme, ThemeProvider } from '@mui/material';

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#aa9d94',
      },
      secondary: {
        main: '#bbada1',
      },
      info: {
        main: '#20498a',
      },
    },
  });


  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Router>
          
          <Route path="/" exact>
            <MovieList />
          </Route>

          <Route path="/details">
            <Details />
          </Route>

          {/* Add Movie page */}
        </Router>
      </div>
    </ThemeProvider>
  );
}


export default App;
