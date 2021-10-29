import './Movies.css';
import MovieBanner from './MovieBanner';
import blood from '../../images/blood.jpg';
import moon from '../../images/moon.jpg';
import purple from '../../images/purple.jpg';
import red from '../../images/red.jpg';
import rockstar from '../../images/rockstar.jpg';
import time from '../../images/time.jpg';
import vamp from '../../images/vamp.jpg';

const Movies = (props) => {
    return (
        <div className="moviesWrapper">
            <MovieBanner img={blood}></MovieBanner>
            <div className="moviesFlexContainer">
                <MovieBanner img={moon} halfWidth="1"></MovieBanner>
                <MovieBanner img={purple} halfWidth="1"></MovieBanner>
            </div>
        </div>
    );
}

export default Movies;