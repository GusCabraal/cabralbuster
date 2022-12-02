import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Movies from './pages/Movies';

function App() {
  return (
    <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="/movies" element={ <Movies /> } />
    </Routes>
  );
}

export default App;