import { useRef, useState } from "react";
import styled from "styled-components";
import NavBar from "../NavBar";

const SoundWrapper = styled.div`
    height: 100%;
    width: 100%;
`;

const SoundWrapperInner = styled.div`
    height: 93%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: ${props => props.gradientColor};
    background: linear-gradient(0deg, ${props => props.gradientColor} 0%, rgba(255,255,255,1) 100%);

    row-gap: 1%;
`;

const AlbumCoverContainer = styled.div`
    height: 40%;
    width: 40%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid black;

    & img {
        height: 80%;
        width: 50%;
    }

    & i {
        font-size: 1.5rem;
        cursor: pointer;
    }
`;

const SongInfoContainer = styled.div`
    min-height: 8%;
    width: 40%;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;

    & p {
        font-family: var(--font2, 'sans-serif')
    }

    & .name {
        font-weight: 700;
        font-size: 1.2rem;
    }

    & .artist {
        font-size: 1rem;
    }
`

const ProgressBarContainer = styled.div`
    height: 5%;
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid black;
`;

const ProgressBar = styled.input`
    --bar-bg: "transparent" ;
    --seek-before-width: ${props => {
        return (props.value * 100 / props.max) + "%";
    }};
    --seek-before-color: #000000;
    --knobby: "black";
    
    display: flex;
    align-items: center;

    /* chrome */
    height: 20%;
    width: 100%;
    appearance: none;
    background: var(--bar-bg);
    border-radius: 5% / 100%;
    border: 1px solid black;
    outline: none;
    position: relative;
    
    /* safari */
    &::-webkit-slider-runnable-track {
        height: 20%;
        width: 100%;
        /* background: var(--bar-bg); */
        border-radius: 5% / 100%;
        /* border: 1px solid black; */
        outline: none;
    }

    /* firefox */
    &::-moz-range-track {
        height: 20%;
        width: 100%;
        appearance: none;
        background: var(--bar-bg);
        border-radius: 5% / 100%;
        border: 1px solid black;
    }

    &::-moz-focus-outer {
        border: 0;
    }

    /* chrome + safari color before knob */
    &::before {
        content: '';
        height: 100%;
        width: var(--seek-before-width);
        background-color: var(--seek-before-color);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
    }

    /* firefox color before knob */
    &::-moz-range-progress {
        background-color: var(--seek-before-color);
        height: 100%;
    }

    /* chrome + safari knob */
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 0.6rem;
        width: 0.6rem;
        border-radius: 50%;
        border: none;
        background-color: #000000;
        cursor: pointer;
    }

    /* firefox knob */
    &::-moz-range-thumb {
        height: 0.6rem;
        width: 0.6rem;
        border-radius: 50%;
        border: transparent;
        background-color: #000000;
        cursor: pointer;
    }
`;

const ControlsContainer = styled.div`
    height: 7%;
    width: 40%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    border: 1px solid black;

    font-family: var(--font2, 'sans-serif');

    & i {
        font-size: 1.2rem;
        cursor: pointer;
    }
`

let songIndex = 0;

let songs = [
    {
        artist: 'Playboi Carti',
        name: 'Control',
        audioUrl: '/songs/carti.mp3',
        imgUrl: '/songs/carti.jpg',
        color: 'red'
    },
    {
        artist: 'HVN',
        name: 'HELLSCAT',
        audioUrl: '/songs/hvn.mp3',
        imgUrl: '/songs/hvn.jpg',
        color: '#FFCC99'
    },
    {
        artist: 'my bloody valentine',
        name: 'when you sleep',
        audioUrl: '/songs/valentine.mp3',
        imgUrl: '/songs/valentine.jpg',
        color: '#f23f9d'
    }
]

const Sound = () => {
    const [songIndex, setSongIndex] = useState(0);
    const [duration, setDuration] = useState(0);
    const [playState, setPlayState] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [rangeValue, setRangeValue] = useState(0);

    const getDuration = () => {
        setDuration(document.querySelector(".audioPlayer").duration);
    }

    const convertDuration = (duration) => {
        let result = "";
        result += Math.floor(duration / 60) < 10 ? `0${Math.floor(duration / 60)}` : `${Math.floor(duration / 60)}`;
        result += ":";
        result += Math.floor(duration % 60) < 10 ? `0${Math.floor(duration % 60)}` : `${Math.floor(duration % 60)}`;
        return result;
    }

    const updateCurrentTime = () => {
        setCurrentTime(document.querySelector(".audioPlayer").currentTime);
        setRangeValue(document.querySelector(".audioPlayer").currentTime);
    }

    const playAudio = () => {
        let audioPlayer = document.querySelector(".audioPlayer");
        if(playState === 0) {
            audioPlayer.play();
            setPlayState(1);
        }
        else {
            audioPlayer.pause();
            setPlayState(0);
        }
    }

    const handleBackward = () => {
        if(songIndex === 0) {
            setSongIndex(songs.length - 1);
        }
        else {
            setSongIndex(songIndex - 1);
        }
        setPlayState(0);
        setCurrentTime(0);
        setRangeValue(0);
    }

    const handleForward = () => {
        if(songIndex === songs.length - 1) {
            setSongIndex(0);
        }
        else {
            setSongIndex(songIndex + 1);
        }
        setPlayState(0);
        setCurrentTime(0);
        setRangeValue(0);
    }

    return (
        <SoundWrapper>
            <NavBar></NavBar>
            <SoundWrapperInner gradientColor={songs[songIndex].color}>
                <AlbumCoverContainer>
                    <i class="fas fa-step-backward" onClick={handleBackward}></i>
                    <img src={songs[songIndex].imgUrl} alt="album cover"></img>
                    <i class="fas fa-step-forward" onClick={handleForward}></i>
                </AlbumCoverContainer>
                <SongInfoContainer>
                    <p className="name">{songs[songIndex].name}</p>
                    <p className="artist">{songs[songIndex].artist}</p>
                </SongInfoContainer>
                <audio className="audioPlayer" src={songs[songIndex].audioUrl} preload="metadata" type="audio/mpeg" onTimeUpdate={updateCurrentTime} onEnded={() => { setPlayState(0); setCurrentTime(0); setRangeValue(0); }} onLoadedMetadata={getDuration}></audio>
                <ProgressBarContainer>
                    <ProgressBar type="range" value={rangeValue} min={0} max={duration} onChange={(e) => {
                        document.querySelector(".audioPlayer").currentTime = e.target.value;
                        setCurrentTime(e.target.value);
                        setRangeValue(e.target.value);
                    }}></ProgressBar>
                </ProgressBarContainer>
                <ControlsContainer>
                    <p class="currentTime">{convertDuration(currentTime)}</p>
                    { playState === 0 ? <i class="fas fa-play" onClick={playAudio}></i> : <i class="fas fa-pause" onClick={playAudio}></i> }
                    <p class="totalTime">{convertDuration(duration)}</p>
                </ControlsContainer>
            </SoundWrapperInner>
        </SoundWrapper>
    );
}

export default Sound;