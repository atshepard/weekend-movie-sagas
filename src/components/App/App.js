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
        main: '#c0c1c1',
      },
      secondary: {
        main: '#7e1616',
      },
      info: {
        main: '#fcc252',
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
