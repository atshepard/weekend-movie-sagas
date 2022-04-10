import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';
import Header from '../Header/Header.jsx';

function App() {
  return (
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
  );
}


export default App;
