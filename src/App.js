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
      "cast": ["Candace Hilligoss", "Frances Feist", "Sidney Berger", "Art Ellison"],
      "boldDescription": ["love for all, hatred for none", "change the world by being yourself", "aspire to inspire before expire", "nu stii cu cine te joci aud prea multe voci"],
      "detailedDescription": ["There was something special about this little creature. Donna couldn't quite pinpoint what it was, but she knew with all her heart that it was true. It wasn't a matter of if she was going to try and save it, but a matter of how she was going to save it. She went back to the car to get a blanket and when she returned the creature was gone.", "Matt told her to reach for the stars, but Veronica thought it was the most ridiculous advice she'd ever received. Sure, it had been well-meaning when he said it, but she didn't understand why anyone would want to suggest something that would literally kill you if you actually managed to achieve it.", "He knew what he was supposed to do. That had been apparent from the beginning. That was what made the choice so difficult. What he was supposed to do and what he would do were not the same. This would have been fine if he were willing to face the inevitable consequences, but he wasn't.", "To the two friends, the treehouse was much more than a treehouse. It was a sanctuary away from the other kids where they could be themselves without being teased or bullied. It was their secret fortress hidden high in the branches of a huge oak that only they knew existed. At least that is what they thought."]
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
