import NavBar from "../NavBar";
import styled from "styled-components";
import posterSouls from "../../images/carnival/poster.jpg";
import carnival1 from "../../images/carnival/pic1.jpg";
import carnival2 from "../../images/carnival/pic2.jpg";
import carnival3 from "../../images/carnival/pic3.jpg";
import carnival4 from "../../images/carnival/pic4.jpg";
import sky from "../../images/sky.mp4";
import { useState } from "react";

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
`;

const BoldDescriptionContainer = styled.div`
    height: 80%;
    width: calc(100% / 3);
    align-self: flex-end;
    
    display: flex;
    justify-content: ${props => props.reversed ? "flex-start" : "flex-end"};

    && p {
        width: 50%;
        margin-right: ${props => props.reversed ? "0" : "10%"};
        margin-left: ${props => props.reversed ? "10%" : "0"};

        font-size: 2rem;
        font-weight: 700;
        text-align: ${props => props.reversed ? "left" : "right"};
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
`;

const MoviePage = (props) => {
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

    return (
        <MoviePageWrapper>
            <NavBar></NavBar>
            <HeaderWrapper>
                <HeaderTitleWrapper>
                    <h1 className="movieTitle">{props.movie[0].name}</h1>
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
            
            <PhotoDescriptionContainer>
                <video controls>
                    <source src={sky}></source>
                </video>
                <DetailedDescriptionContainer>
                    <p>playboy /ˈpleɪbɔɪ/ (noun) = a wealthy man who spends his time enjoying himself, especially one who behaves irresponsibly or has many casual sexual relationships.</p>
                </DetailedDescriptionContainer>
            </PhotoDescriptionContainer>

            <PhotoDescriptionContainer>
                <BoldDescriptionContainer>
                    <p>{props.movie[0].boldDescription[0]}</p>
                </BoldDescriptionContainer>
                <img src={carnival1} alt="firstpic"></img>
                <DetailedDescriptionContainer color="red">
                    <p>{props.movie[0].detailedDescription[0]}</p>
                </DetailedDescriptionContainer>
            </PhotoDescriptionContainer>
            
            <PhotoDescriptionContainer reversed>
                <BoldDescriptionContainer reversed>
                    <p>{props.movie[0].boldDescription[1]}</p>
                </BoldDescriptionContainer>
                <img src={carnival2} alt="secondpic"></img>
                <DetailedDescriptionContainer reversed>
                    <p>{props.movie[0].detailedDescription[1]}</p>
                </DetailedDescriptionContainer>
            </PhotoDescriptionContainer>

            <PhotoDescriptionContainer>
                <BoldDescriptionContainer>
                    <p>{props.movie[0].boldDescription[2]}</p>
                </BoldDescriptionContainer>
                <img src={carnival3} alt="thirdpic"></img>
                <DetailedDescriptionContainer color="red">
                    <p>{props.movie[0].detailedDescription[2]}</p>
                </DetailedDescriptionContainer>
            </PhotoDescriptionContainer>
            
            <PhotoDescriptionContainer reversed>
                <BoldDescriptionContainer reversed>
                    <p>{props.movie[0].boldDescription[3]}</p>
                </BoldDescriptionContainer>
                <img src={carnival4} alt="fourthpic"></img>
                <DetailedDescriptionContainer reversed>
                    <p>{props.movie[0].detailedDescription[3]}</p>
                </DetailedDescriptionContainer>
            </PhotoDescriptionContainer>
        </MoviePageWrapper>
    );
}

export default MoviePage;