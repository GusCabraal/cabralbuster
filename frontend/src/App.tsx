import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import MovieDetails from './pages/MovieDetails';
import Movies from './pages/Movies';
import MoviesByUser from './pages/MoviesByUser';

function App() {
  return (
    <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="/movies" element={ <Movies /> } />
        <Route
          path="/movies/:idMovie"
          element={ <MovieDetails /> }
        />
        <Route
          path="/users/movies"
          element={ <MoviesByUser /> }
        />
    </Routes>
  );
}

export default App;