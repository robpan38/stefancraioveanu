import './Movies.css';
import MovieBanner from './MovieBanner';
import useMediaQuery from '../UseMediaQuery';
import NavBar from '../NavBar';
import { Link } from 'react-router-dom';
import { getMovies } from '../../movieDb';

const Movies = (props) => {
    const isScreenSmall = useMediaQuery("(max-width: 700px)");
    let movies = getMovies();

    return (
        <div className="moviesWrapper">
            <NavBar></NavBar>
            <Link to={`/directing/${movies[0].name}`} style={{display: "block", height: "50%"}}>
                <MovieBanner img={'/images/carnival/pic1.jpg'} smallDesc={`${movies[0].year}`} bigDesc={`${movies[0].name}`}></MovieBanner>
            </Link>
            <div className="moviesFlexContainer">
                <Link to={`/directing/${movies[1].name}`} style={{display: "block", width: `${isScreenSmall === true ? "100%" : "50%"}`, height: `${isScreenSmall === true ? "50%" : "100%"}`}}>
                    <MovieBanner img={'/images/drive/pic1.jpg'} smallDesc={`${movies[1].year}`} bigDesc={`${movies[1].name}`}></MovieBanner>
                </Link>
                <Link to={`/directing/${movies[2].name}`} style={{display: "block", width: `${isScreenSmall === true ? "100%" : "50%"}`, height: `${isScreenSmall === true ? "50%" : "100%"}`}}>
                    <MovieBanner img={'/images/pines/pic1.jpg'} smallDesc={`${movies[2].year}`} bigDesc={`${movies[2].name}`}></MovieBanner>
                </Link>
            </div>
            <div className="moviesFlexContainer">
                <Link to={`/directing/${movies[3].name}`} style={{display: "block", width: `${isScreenSmall === true ? "100%" : "50%"}`, height: `${isScreenSmall === true ? "50%" : "100%"}`}}>
                    <MovieBanner img={'/images/psycho/pic1.jpg'} smallDesc={`${movies[3].year}`} bigDesc={`${movies[3].name}`}></MovieBanner>
                </Link>
                <Link to={`/directing/${movies[4].name}`} style={{display: "block", width: `${isScreenSmall === true ? "100%" : "50%"}`, height: `${isScreenSmall === true ? "50%" : "100%"}`}}>
                    <MovieBanner img={'/images/taxi/pic1.jpg'} smallDesc={`${movies[4].year}`} bigDesc={`${movies[4].name}`}></MovieBanner>
                </Link>
            </div>
            <div className="moviesFlexContainer">
                <Link to={`/directing/${movies[5].name}`} style={{display: "block", width: `${isScreenSmall === true ? "100%" : "50%"}`, height: `${isScreenSmall === true ? "50%" : "100%"}`}}>
                    <MovieBanner img={'/images/beauty/pic1.jpg'} smallDesc={`${movies[5].year}`} bigDesc={`${movies[5].name}`}></MovieBanner>
                </Link>
                <Link to={`/directing/${movies[6].name}`} style={{display: "block", width: `${isScreenSmall === true ? "100%" : "50%"}`, height: `${isScreenSmall === true ? "50%" : "100%"}`}}>
                    <MovieBanner img={'/images/nightcrawler/pic1.jpg'} smallDesc={`${movies[6].year}`} bigDesc={`${movies[6].name}`}></MovieBanner>
                </Link>
            </div>
        </div>
        
    );
}

export default Movies;