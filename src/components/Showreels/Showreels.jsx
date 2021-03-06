import { useState } from "react";
import styled from "styled-components";
import NavBar from "../NavBar";
import { showreelsDb } from "./showreelsDb";
import { motion, AnimatePresence } from "framer-motion";

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

const Window = styled(motion.div)`
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

    @media screen and (max-width: 950px) {
        width: 20%;
    }
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

    @media screen and (max-width: 950px) {
        width: 80%;
        transform: translateX(-15%);
    }
`

const WindowTitle = styled.p`
    font-size: 0.8rem;

    @media screen and (max-width: 950px) {
        font-size: 1.2rem;
    }
`;

const ContentWrapper = styled.div`
    height: 95%;
    width: 100%;
    display: flex;
    column-gap: 2%;
    padding-left: 2%;
    padding-top: 2%;

    @media screen and (max-width: 950px) {
        column-gap: 6%;
    }
`

const FolderWrapper = styled(motion.div)`
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

    @media screen and (max-width: 950px) {
        width: 22%;
    }
`;

const FolderName = styled.p`
    text-align: center;
    height: 20%;
    width: 100%;
    font-size: 0.5rem;
    
    @media screen and (max-width: 950px) {
        font-size: 0.9rem;
    }
`;

const ShowreelWrapper = styled(motion.div)`
    height: 100%;
    width: 100%;
    
    overflow: scroll;

    &::-webkit-scrollbar {
        display: none;
    }

    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;

    & .showreelDescription {
        width: 98%;
        margin-bottom: 2%;
    }

    & video {
        height: 86%;
        width: 98%;
    }

    @media screen and (max-width: 950px) {
        & .showreelDescription {
            font-size: 1.3rem;
        }
    }
`;

const ShowreelTextWrapper = styled.div`
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-family: 'Fira Code', monospace;

    & .goBackBtn {
        padding-right: 2%;
    }

    & p:hover {
        cursor: pointer;
        text-decoration: underline;
        text-transform: uppercase;
    }

    @media screen and (max-width: 950px) {
        height: 5%;

        & p {
            font-size: 1.2rem;
        }
    }
`;

const FileSystem = () => {
    const [showDetails, setShowDetails] = useState(false);
    const [showreel, setShowreel] = useState(null);

    const findShowreel = () => {
        let showreelName = showreel;
        return showreelsDb.find(showreel => showreel.name === showreelName);
    }
    const currentShowreel = showreel !== null ? findShowreel() : null;

    const windowVariants = {
        initial: {
            opacity: 0,
            scale: 0.8
        },
        first: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3,
                ease: "linear"
            }
        }
    }

    return (
        <WindowWrapper>
            <Window initial="initial" animate="first" variants={windowVariants}>
                <WindowNavBarWrapper>
                    <NavBarIconsWrapper>
                        <SmallCircle />
                        <SmallCircle color="#fdb42c" />
                        <SmallCircle color="#24c634" />
                    </NavBarIconsWrapper>
                    <WindowTitleWrapper>
                        <WindowTitle>
                            {
                                showreel === null ? "Showreels" : (showDetails ? `./${showreel}/details` : `./${showreel}/video`)
                            }
                        </WindowTitle>
                    </WindowTitleWrapper>
                </WindowNavBarWrapper>
                <AnimatePresence initial={false} exitBeforeEnter>
                    <ContentWrapper>
                        {
                            showreel === null ?
                                <>
                                    <FolderWrapper whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.8 }}
                                        exit={{ scale: 0 }}
                                        onClick={() => setShowreel("Sound")}
                                        initial="initial" animate="first" variants={windowVariants}>

                                        <img src="/images/showreels/folder.png" alt="folder"></img>
                                        <FolderName>Sound - showreels</FolderName>
                                    </FolderWrapper>
                                    <FolderWrapper whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.8 }}
                                        exit={{ scale: 0 }}
                                        onClick={() => setShowreel("Directing")}
                                        initial="initial" animate="first" variants={windowVariants}>

                                        <img src="/images/showreels/folder.png" alt="folder"></img>
                                        <FolderName>Directing - showreels</FolderName>
                                    </FolderWrapper>
                                    <FolderWrapper whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.8 }}
                                        exit={{ scale: 0 }}
                                        onClick={() => setShowreel("All of it")}
                                        initial="initial" animate="first" variants={windowVariants}>

                                        <img src="/images/showreels/folder.png" alt="folder"></img>
                                        <FolderName>All of it - showreels</FolderName>
                                    </FolderWrapper>
                                </>
                                :
                                <>
                                    <ShowreelWrapper
                                        initial="initial"
                                        animate="first"
                                        exit={{ scale: 0 }}
                                        variants={windowVariants}
                                    >
                                        <ShowreelTextWrapper>
                                            <p onClick={() => setShowDetails(!showDetails)}>
                                                {showDetails ? "Video" : "Details"}
                                            </p>
                                            <p onClick={() => {
                                                setShowreel(null);
                                                setShowDetails(false);
                                            }}
                                                className="goBackBtn">Go back</p>
                                        </ShowreelTextWrapper>
                                        {
                                            showDetails ?
                                                <motion.p
                                                    className="showreelDescription"
                                                    initial="initial" animate="first" variants={windowVariants}
                                                >{currentShowreel.description}</motion.p>
                                                :
                                                <motion.video
                                                    controls
                                                    initial="initial" animate="first" variants={windowVariants}
                                                >
                                                    <source src={currentShowreel.video} />
                                                </motion.video>
                                        }
                                    </ShowreelWrapper>
                                </>
                        }
                    </ContentWrapper>
                </AnimatePresence>
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