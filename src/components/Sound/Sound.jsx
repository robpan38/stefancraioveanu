import styled from "styled-components";
import NavBar from "../NavBar";

const SoundWrapper = styled.div`
    height: 100%;
    width: 100%;
`;

const Sound = () => {
    return (
        <SoundWrapper>
            <NavBar></NavBar>
            <h1>🚧Santier🚧</h1>
        </SoundWrapper>
    );
}

export default Sound;