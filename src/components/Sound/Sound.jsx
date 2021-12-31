import { useEffect, useState } from "react";
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

    row-gap: 1%;
`;

const ProgressBarContainer = styled.div`
    height: 5%;
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid black;
`;

const ProgressBar = styled.input`
    --bar-bg: #ffffff ;
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
        background-color: var()(--seek-before-color);
        height: 100%;
    }

    /* chrome + safari knob */
    &::-webkit-slider-thumb {

    }
`;

const ControlsContainer = styled.div`
    height: 5%;
    width: 40%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    border: 1px solid black;
`

const Sound = () => {
    let totalTime;
    const [duration, setDuration] = useState(0);
    const [playState, setPlayState] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [rangeValue, setRangeValue] = useState(0);

    const getDuration = () => {
        setDuration(document.querySelector(".audioPlayer").duration);
    }

    const convertDuration = (duration) => {
        let result = "";
        result += Math.floor(duration / 60);
        result += ":";
        result += Math.floor(duration % 60);
        return result;
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

    return (
        <SoundWrapper>
            <NavBar></NavBar>
            <SoundWrapperInner>
                <audio className="audioPlayer" src="/songs/control.mp3" preload="metadata" type="audio/mpeg" onLoadedMetadata={getDuration}>
                </audio>
                <ProgressBarContainer>
                    <ProgressBar type="range" value={rangeValue} min={0} max={duration} onChange={(e) => {
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