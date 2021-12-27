import NavBar from "../NavBar";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../../movieDb";

const MoviePageWrapper = styled.div`
    height: 100%;
    width: 100%;
    font-family: var(--font2, 'sans-serif');
`;

const HeaderWrapper = styled.div`
    min-height: 93%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const HeaderTitleWrapper = styled.div`
    height: 60%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    && .movieTitle {
        display: table-caption;

        height: 15%;
        width: 70%;
        font-size: 3rem;
        text-align: center;

        border: 2px solid black;
    }
`;

const HeaderDescriptionWrapper = styled.div`
    height: auto;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    row-gap: 2%;
`;

const LineContainer = styled.div`
    width: 100%;

    display: flex;
    column-gap: 3%;

    && .property {
        width: 47.5%;
        font-weight: 700;
        text-align: right;
        text-decoration: underline;
    }

    && .value {
        width: 30%;
    }

    @media screen and (max-width: 750px) {
        && p {
            font-size: 1.35rem;
        }
    }
`;

const PhotoDescriptionContainer = styled.div`
    height: 80%;
    min-height: 80%;
    width: 100%;
    display: flex;
    flex-direction: ${props => props.reversed ? "row-reverse" : "row"};
    justify-content: center;

    && img {
        height: 80%;
        width: calc(100% / 3);
    }

    && video {
        height: 90%;
        width: calc(100% / 2);
    }

    @media screen and (max-width: 750px) {
        height: 100%;
        align-items: center;
        flex-direction: ${props => props.reversed ? "column-reverse" : "column"};
        justify-content: space-evenly;
        margin-bottom: 5%;

        && img {
            height: 55%;
            width: 80%;
        }
        
        && video {
            display: block;
            height: 70%;
            width: 100%;
        }

        border: 0.5px solid black;
    }
`;

const BoldDescriptionContainer = styled.div`
    height: 80%;
    width: calc(100% / 3);
    align-self: flex-end;
    
    display: flex;
    justify-content: ${props => props.reversed ? "flex-start" : "flex-end"};

    && p {
        width: 100%;
        margin-right: ${props => props.reversed ? "0" : "10%"};
        margin-left: ${props => props.reversed ? "10%" : "0"};

        font-size: 2rem;
        font-weight: 700;
        text-align: ${props => props.reversed ? "left" : "right"};
    }

    @media screen and (max-width: 750px) {
        height: 7%;
        width: 100%;
        flex-direction: column;
        justify-content: center;

        align-items: ${props => props.reversed ? "flex-end" : "flex-start"};

        && p {
            display: block;
            height: 100%;
            width: 90%;

            margin-right: 0;
            margin-left: 0;
            font-size: 1.5rem;
        }
    }
`;

const DetailedDescriptionContainer = styled.div`
    height: 80%;
    width: calc(100% / 3);
    align-self: flex-end;

    display: flex;
    justify-content: ${props => props.reversed ? "flex-end" : "flex-start"};

    && p {
        width: 80%;
        margin-right: ${props => props.reversed ? "10%" : "0"};
        margin-left: ${props => props.reversed ? "0" : "10%"};

        font-size: 0.9rem;
        text-align: ${props => props.reversed ? "right" : "left"};;
        text-transform: uppercase;
        color: ${props => props.color !== null ? props.color : "black"};
        text-decoration: ${props => props.underlined ? "underline" : "none"};
    }

    @media screen and (max-width: 750px) {
        height: 30%;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: ${props => props.reversed ? "flex-start" : "flex-end"};

        && p {
            width: 90%;
            margin-right: 0;
            margin-left: 0;

            font-size: 1.2rem;
        }
    }
`;

const folderNames = [
    {
        "name": "Carnival of Souls",
        "folder": "carnival"
    },
    {
        "name": "Drive",
        "folder": "drive"
    },
    {
        "name": "The Place Beyond the Pines",
        "folder": "pines"
    },
    {
        "name": "American Psycho",
        "folder": "psycho"
    },
    {
        "name": "Taxi Driver",
        "folder": "taxi"
    },
    {
        "name": "American Beauty",
        "folder": "beauty"
    },
    {
        "name": "Nightcrawler",
        "folder": "nightcrawler"
    }
];

const MoviePage = (props) => {
    let params = useParams();

    const computeFilmNameFromParam = (filmNameParam) => {
        return filmNameParam.replace("%20", " ");
    }

    const computeConcatenatedString = (wordList) => {
        let sentence = "";

        for (let index = 0; index < wordList.length; index++) {
            sentence = sentence.concat(wordList[index]);
            if(index !== wordList.length - 1) {
                sentence = sentence.concat(", ");
            }
        }

        return sentence; 
    }

    let movieName = computeFilmNameFromParam(params.movieName);
    let movie = getMovie(movieName);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <MoviePageWrapper>
            <NavBar></NavBar>
            <HeaderWrapper>
                <HeaderTitleWrapper>
                    <h1 className="movieTitle">{movie.name}</h1>
                </HeaderTitleWrapper>
                <HeaderDescriptionWrapper>
                    <LineContainer>
                        <p className="property">Year:</p>
                        <p className="value">{movie.year}</p>
                    </LineContainer>
                    <LineContainer>
                        <p className="property">Genre:</p>
                        <p className="value">{computeConcatenatedString(movie.genre)}</p>
                    </LineContainer>
                    <LineContainer>
                        <p className="property">Director:</p>
                        <p className="value">{movie.director}</p>
                    </LineContainer>
                    <LineContainer>
                        <p className="property">Writer:</p>
                        <p className="value">{movie.writer}</p>
                    </LineContainer>
                    <LineContainer>
                        <p className="property">Cast:</p>
                        <p className="value">{computeConcatenatedString(movie.cast)}</p>
                    </LineContainer>
                </HeaderDescriptionWrapper>
            </HeaderWrapper>
            
            <PhotoDescriptionContainer>
                <video controls>
                    <source src={'/images/sky.mp4'}></source>
                </video>
                <DetailedDescriptionContainer>
                    <p>playboy /ˈpleɪbɔɪ/ (noun) = a wealthy man who spends his time enjoying himself, especially one who behaves irresponsibly or has many casual sexual relationships.</p>
                </DetailedDescriptionContainer>
            </PhotoDescriptionContainer>

            <PhotoDescriptionContainer>
                <BoldDescriptionContainer>
                    <p>{movie.boldDescription[0]}</p>
                </BoldDescriptionContainer>
                <img src={`/images/${folderNames.find(folder => folder.name === movieName).folder}/pic1.jpg`} alt="firstpic"></img>
                <DetailedDescriptionContainer color="red">
                    <p>{movie.detailedDescription[0]}</p>
                </DetailedDescriptionContainer>
            </PhotoDescriptionContainer>
            
            <PhotoDescriptionContainer reversed>
                <BoldDescriptionContainer reversed>
                    <p>{movie.boldDescription[1]}</p>
                </BoldDescriptionContainer>
                <img src={`/images/${folderNames.find(folder => folder.name === movieName).folder}/pic2.jpg`} alt="secondpic"></img>
                <DetailedDescriptionContainer reversed>
                    <p>{movie.detailedDescription[1]}</p>
                </DetailedDescriptionContainer>
            </PhotoDescriptionContainer>

            <PhotoDescriptionContainer>
                <BoldDescriptionContainer>
                    <p>{movie.boldDescription[2]}</p>
                </BoldDescriptionContainer>
                <img src={`/images/${folderNames.find(folder => folder.name === movieName).folder}/pic3.jpg`} alt="thirdpic"></img>
                <DetailedDescriptionContainer color="red">
                    <p>{movie.detailedDescription[2]}</p>
                </DetailedDescriptionContainer>
            </PhotoDescriptionContainer>
            
            <PhotoDescriptionContainer reversed>
                <BoldDescriptionContainer reversed>
                    <p>{movie.boldDescription[3]}</p>
                </BoldDescriptionContainer>
                <img src={`/images/${folderNames.find(folder => folder.name === movieName).folder}/pic4.jpg`} alt="fourthpic"></img>
                <DetailedDescriptionContainer reversed>
                    <p>{movie.detailedDescription[3]}</p>
                </DetailedDescriptionContainer>
            </PhotoDescriptionContainer>
        </MoviePageWrapper>
    );
}

export default MoviePage;