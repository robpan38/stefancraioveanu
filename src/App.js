import logo from './logo.svg';
import './App.css';
import Movies from './components/Movie/Movies';
import NavBar from './components/NavBar';
import MoviePage from './components/Movie/MoviePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getMovies } from './movieDb';

function App() {
  let movies = getMovies();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Movies/>}></Route>
          <Route path="/directing/:movieName" element={<MoviePage movie={movies}/>}></Route>
          <Route path="*" element={<h1>🚧Santier🚧</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
