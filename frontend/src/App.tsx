import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import MovieDetails from './pages/MovieDetails';
import Movies from './pages/Movies';

function App() {
  return (
    <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="/movies" element={ <Movies /> } />
        <Route
          path="/movies/:idMovie"
          element={ <MovieDetails /> }
        />
    </Routes>
  );
}

export default App;