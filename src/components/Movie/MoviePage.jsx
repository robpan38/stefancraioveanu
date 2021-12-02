import NavBar from "../NavBar";
import styled from "styled-components";
import posterSouls from "../../images/carnival/poster.jpg";
import { useState } from "react";

const MoviePageWrapper = styled.div`
    height: 100%;
    width: 100%;
    font-family: var(--font2, 'sans-serif');
`;

const HeaderWrapper = styled.div`
    height: 93%;
    width: 100%;
    display: flex;
    flex-direction: column;
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
        height: 15%;
        width: 100%;
        font-size: 2rem;
        text-align: center;
    }

    && .posterWrapper {
        height: 0;
        width: 0;
    }
`;

const PosterButton = styled.button`
    font-family: var(--font2, 'sans-serif');
    font-size: 1rem;
    cursor: pointer;
    height: 10%;
    width: 15%;

    background-color: white;
    border-style: solid;
    border-color: black;

    &&:hover {
        background-color: black;
        color: white;
        border-color: white;
    }
`;

const HeaderDescriptionWrapper = styled.div`
    height: 40%;
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
    }

    && .value {
        width: 30%;
    }
`;

const PhotoDescriptionContainer = styled.div`
    height: 100%;
    width: 100%;
    background-color: pink;
`;

const MoviePage = (props) => {
    const computeConcatenatedString = (wordList) => {
        let sentence = "";

        for (let index = 0; index < wordList.length; index++) {
            sentence = sentence.concat(wordList[index]);
            if(index != wordList.length - 1) {
                sentence = sentence.concat(", ");
            }
        }

        return sentence; 
    }    

    const [posterToggle, setPoster] = useState(0);

    const togglePoster = () => {
        posterToggle === 0 ? setPoster(1) : setPoster(0);
    }

    return (
        <MoviePageWrapper>
            <NavBar></NavBar>
            <HeaderWrapper>
                <HeaderTitleWrapper>
                    <img className="posterWrapper" src={posterSouls} style={{height: `${posterToggle === 0 ? "0" : "60%"}`, width:`${posterToggle === 0 ? "0" : "15%"}`}}></img>
                    <h1 className="movieTitle">{props.movie[0].name}</h1>
                    <PosterButton onClick={togglePoster}>
                        {posterToggle === 0 ? "SHOW POSTER" : "HIDE POSTER"}
                    </PosterButton>
                </HeaderTitleWrapper>
                <HeaderDescriptionWrapper>
                    <LineContainer>
                        <p className="property">Year:</p>
                        <p className="value">{props.movie[0].year}</p>
                    </LineContainer>
                    <LineContainer>
                        <p className="property">Genre:</p>
                        <p className="value">{computeConcatenatedString(props.movie[0].genre)}</p>
                    </LineContainer>
                    <LineContainer>
                        <p className="property">Director:</p>
                        <p className="value">{props.movie[0].director}</p>
                    </LineContainer>
                    <LineContainer>
                        <p className="property">Writer:</p>
                        <p className="value">{props.movie[0].writer}</p>
                    </LineContainer>
                    <LineContainer>
                        <p className="property">Cast:</p>
                        <p className="value">{computeConcatenatedString(props.movie[0].cast)}</p>
                    </LineContainer>
                </HeaderDescriptionWrapper>
            </HeaderWrapper>
            <PhotoDescriptionContainer></PhotoDescriptionContainer>
        </MoviePageWrapper>
    );
}

export default MoviePage;