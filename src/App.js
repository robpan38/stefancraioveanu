import logo from './logo.svg';
import './App.css';
import Movies from './components/Movie/Movies';
import NavBar from './components/NavBar';
import MoviePage from './components/Movie/MoviePage';

const movieDb = [
  {
      "name": "Carnival of Souls",
      "year": 1962,
      "genre": ["Horror", "Mystery"],
      "director": "Herk Harvey",
      "writer": "John Clifford",
      "overview": "Mary Henry ends up the sole survivor of a fatal car accident through mysterious circumstances. Trying to put the incident behind her, she moves to Utah and takes a job as a church organist. But her fresh start is interrupted by visions of a fiendish man. As the visions begin to occur more frequently, Mary finds herself drawn to the deserted carnival on the outskirts of town. The strangely alluring carnival may hold the secret to her tragic past.",
      "cast": ["Candace Hilligoss", "Frances Feist", "Sidney Berger", "Art Ellison"]
  }
]

function App() {
  return (
    <div className="App">
      {/* <NavBar></NavBar> */}
      {/* <Movies/> */}
      <MoviePage movie={movieDb}></MoviePage>
    </div>
  );
}

export default App;
