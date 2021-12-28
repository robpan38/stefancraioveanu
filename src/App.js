import logo from './logo.svg';
import './App.css';
import Movies from './components/Movie/Movies';
import NavBar from './components/NavBar';
import MoviePage from './components/Movie/MoviePage';
import Home from './components/Homepage/Home';
import AboutMe from './components/Homepage/AboutMe';
import Sound from './components/Sound/Sound';
import Showreels from './components/Showreels/Showreels';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getMovies } from './movieDb';

function App() {
  let movies = getMovies();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home/>}></Route>
          <Route path="/home" element={<AboutMe/>}></Route>
          <Route path="/sound" element={<Sound/>}></Route>
          <Route path="/showreels" element={<Showreels/>}></Route>
          <Route path="/directing" element={<Movies/>}></Route>
          <Route path="/directing/:movieName" element={<MoviePage movie={movies}/>}></Route>
          <Route path="*" element={<h1>🚧Santier🚧</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
