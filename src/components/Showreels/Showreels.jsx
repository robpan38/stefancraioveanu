import styled from "styled-components";
import NavBar from "../NavBar";

const ShowreelsWrapper = styled.div`
    height: 100%;
    width: 100%;
`;

const WindowWrapper = styled.div`
    height: 93%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Fira-Code, monospace;
`;

const Window = styled.div`
    height: 90%;
    width: 90%;
    overflow: hidden;
    border-radius: 0.7%;
    border: solid 1px black;
`;

const WindowNavBarWrapper = styled.div`
    height: 5%;
    width: 100%;
    background-color: #e0e0e0;
    display: flex;
`;

const NavBarIconsWrapper = styled.div`
    height: 100%;
    width: 7%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const SmallCircle = styled.div`
    height: 60%;
    width: 22%;
    border-radius: 50%;
    background-color: ${props => props.color ? props.color : "red"};
    cursor: pointer;
`;

const WindowTitleWrapper = styled.div`
    height: 100%;
    width: 93%;
    transform: translateX(-7%);
    display: flex;
    justify-content: center;
    align-items: center;
`

const WindowTitle = styled.p`
    font-size: 0.8rem;
`;

const ContentWrapper = styled.div`
    height: 95%;
    width: 100%;
    display: flex;
    column-gap: 2%;
    padding-left: 2%;
    padding-top: 2%;
`

const FolderWrapper = styled.div`
    height: 13%;
    width: 10%;

    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    & img {
        height: 80%;
        width: 80%;
    }
`;

const FolderName = styled.p`
    text-align: center;
    height: 20%;
    width: 100%;
    font-size: 0.5rem;
`;

const FileSystem = () => {
    return (
        <WindowWrapper>
            <Window>
                <WindowNavBarWrapper>
                    <NavBarIconsWrapper>
                        <SmallCircle />
                        <SmallCircle color="#fdb42c"/>
                        <SmallCircle color="#24c634"/>
                    </NavBarIconsWrapper>
                    <WindowTitleWrapper>
                        <WindowTitle>Showreels</WindowTitle>
                    </WindowTitleWrapper>
                </WindowNavBarWrapper>
                <ContentWrapper>
                    <FolderWrapper>
                        <img src="/images/showreels/folder.png"></img>
                        <FolderName>Sound - showreels</FolderName>
                    </FolderWrapper>
                    <FolderWrapper>
                        <img src="/images/showreels/folder.png"></img>
                        <FolderName>Directing - showreels</FolderName>
                    </FolderWrapper>
                    <FolderWrapper>
                        <img src="/images/showreels/folder.png"></img>
                        <FolderName>All of it - showreels</FolderName>
                    </FolderWrapper>
                </ContentWrapper>
            </Window>
        </WindowWrapper>
    )
}

const Showreels = () => {
    return (
        <ShowreelsWrapper>
            <NavBar></NavBar>
            <FileSystem />
        </ShowreelsWrapper>
    );
}

export default Showreels;