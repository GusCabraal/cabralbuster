import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { Movies } from "./pages/Movies";
import { MoviesByUser } from "./pages/MoviesByUser";
import Modal from "react-modal";
import { MoviesByDirector } from "./pages/MoviesByDirector";

Modal.setAppElement("#root");

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/users/movies" element={<MoviesByUser />} />
      <Route
          path="/movies/director/:directorId"
          element={ <MoviesByDirector /> }
        />
    </Routes>
  );
}

export default App;
