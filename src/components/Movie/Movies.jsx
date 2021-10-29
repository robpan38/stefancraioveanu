import './Movies.css';
import MovieBanner from './MovieBanner';
import blood from '../../images/blood.jpg';
import moon from '../../images/moon.jpg';
import purple from '../../images/purple.jpg';
import red from '../../images/red.jpg';
import rockstar from '../../images/rockstar.jpg';
import time from '../../images/time.jpg';
import vamp from '../../images/vamp.jpg';
import useMediaQuery from '../UseMediaQuery';

const Movies = (props) => {
    const isScreenSmall = useMediaQuery("(max-width: 700px)");
    
    return (
        <div className="moviesWrapper">
            <MovieBanner img={blood} smallDesc={"descriere frum"} bigDesc={"titlu film frum"}></MovieBanner>
            <div className="moviesFlexContainer">
                <MovieBanner img={moon} halfWidth={isScreenSmall === true ? "0" : "1"} smallDesc={"descriere frum"} bigDesc={"titlu film frum"}></MovieBanner>
                <MovieBanner img={purple} halfWidth={isScreenSmall === true ? "0" : "1"} smallDesc={"descriere frum"} bigDesc={"titlu film frum"}></MovieBanner>
            </div>
            <div className="moviesFlexContainer">
                <MovieBanner img={red} halfWidth={isScreenSmall === true ? "0" : "1"} smallDesc={"descriere frum"} bigDesc={"titlu film frum"}></MovieBanner>
                <MovieBanner img={rockstar} halfWidth={isScreenSmall === true ? "0" : "1"} smallDesc={"descriere frum"} bigDesc={"titlu film frum"}></MovieBanner>
            </div>
            <div className="moviesFlexContainer">
                <MovieBanner img={time} halfWidth={isScreenSmall === true ? "0" : "1"} smallDesc={"descriere frum"} bigDesc={"titlu film frum"}></MovieBanner>
                <MovieBanner img={vamp} halfWidth={isScreenSmall === true ? "0" : "1"} smallDesc={"descriere frum"} bigDesc={"titlu film frum"}></MovieBanner>
            </div>
        </div>
    );
}

export default Movies;