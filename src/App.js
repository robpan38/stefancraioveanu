import logo from './logo.svg';
import './App.css';
import Movies from './components/Movie/Movies';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Movies/>
    </div>
  );
}

export default App;
