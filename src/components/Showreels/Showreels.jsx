import styled from "styled-components";
import NavBar from "../NavBar";

const ShowreelsWrapper = styled.div`
    height: 100%;
    width: 100%;
`;

const Showreels = () => {
    return (
        <ShowreelsWrapper>
            <NavBar></NavBar>
            <h1>🚧Santier🚧</h1>
        </ShowreelsWrapper>
    );
}

export default Showreels;