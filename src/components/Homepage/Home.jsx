import styled from "styled-components";
import { Link } from "react-router-dom";
import useMediaQuery from "../UseMediaQuery";

const HomeWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const VideoBackground = styled.video`
    position: fixed;
    z-index: -1;
    right: 0;
    bottom: 0;
    min-height: 100%;
    min-width: 100%;
`;

const HomeTextWrapper = styled.div`
    width: 80%;
    margin-left: 5%;

    display: flex;
    flex-direction: column;

    color: white;
    font-family: var(--font2, 'sans-serif');
    text-transform: uppercase;

    & h1 {
        font-size: 2.5rem;
    }

    & h3 {
        font-size: 1.5rem;
    }
`;

const Button = styled.button`
    margin-left: 5%;
    height: 100%;
    width: 100%;
    background-color: transparent;
    
    font-size: 1rem;
    font-family: var(--font2, 'sans-serif');
    text-transform: uppercase;
    color: white;

    border-color: white;
    border-style: solid;

    &:hover {
        cursor: pointer;
    }
`;

const Home = () => {
    const isScreenSmall = useMediaQuery("(max-width: 700px)");

    return (
        <HomeWrapper>
            <VideoBackground autoPlay muted loop>
                <source src="/images/sky.mp4" type="video/mp4"></source>
            </VideoBackground>
            <HomeTextWrapper>
                <h1>STEFAN CRAIOVEANU</h1>
                <h3>Directing / Sound Design</h3>
            </HomeTextWrapper>
            <Link to="/home" style={{display: "block", height: "7%", width: `${isScreenSmall === true ? "15%" : "7%"}`, marginLeft: "5%", marginTop: "1%"}}><Button>Enter</Button></Link>
        </HomeWrapper>
    );
}

export default Home;