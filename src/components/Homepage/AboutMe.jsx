import styled from "styled-components";
import NavBar from '../NavBar';
import { motion } from "framer-motion";

const AboutMeWrapper = styled.div`
    height: 100%;
    width: 100%;
`;

const AboutMeInner = styled.div`
    min-height: 93%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TitleImage = styled(motion.div)`
    height: 30%;
    width: 80%;
    margin: 3% 0%;
    display: flex;
    justify-content: flex-start;

    & h1 {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        font-family: var(--font2, 'sans-serif');
        font-size: 2.5rem;
        text-align: start;

        border-width: 10%;
        border-style: solid;
    }

    & img {
        height: 100%;
        width: 24%;
    }
`;

const LifeStudies = styled(motion.div)`
    min-height: 30%;
    width: 80%;
    display: flex;
    column-gap: 4%;
`;

const ParagraphContainer = styled(motion.div)`
    height: 100%;
    width: 100%;
    margin-bottom: 3%;
    display: flex;
    flex-direction: column;
    padding: 2.5%;
    border-width: 10%;
    border-style: solid;

    & .title {
        font-family: var(--font2, 'sans-serif');
        font-size: 1.5rem;
        text-transform: uppercase;
    }

    & .description {
        font-family: var(--font1, 'sans-serif');
        font-size: 0.9rem;
    }

    @media screen and (max-width: 750px) {
        & .description {
            font-size: 1.2rem;
        }
    }
`

const AboutMe = () => {
    return (
        <AboutMeWrapper>
            <NavBar></NavBar>
            <AboutMeInner>
                <TitleImage animate={{borderColor: ['hsl(0, 100, 50)', 'hsl(-120, 100, 50)'], color: ['hsl(0, 100, 50)', 'hsl(-120, 100, 50)']}} transition={{repeat: Infinity}}>
                    <h1>STEFAN CRAIOVEANU</h1>
                </TitleImage>
                <LifeStudies>
                    <ParagraphContainer animate={{borderColor: ['hsl(0, 100, 50)', 'hsl(-120, 100, 50)'], color: ['hsl(0, 100, 50)', 'hsl(-120, 100, 50)']}} transition={{repeat: Infinity}} style={{width: "48%"}}>
                        <p className="title">Life</p>
                        <p className="description">A film director controls a film's artistic and dramatic aspects and visualizes the screenplay (or script) while guiding the film crew and actors in the fulfilment of that vision. The director has a key role in choosing the cast members, production design and all the creative aspects of filmmaking. Under European Union law, the director is viewed as the author of the film. The film director gives direction to the cast and crew and creates an overall vision through which a film eventually becomes realized or noticed. Directors need to be able to mediate differences in creative visions and stay within the budget.</p>
                    </ParagraphContainer>
                    <ParagraphContainer animate={{borderColor: ['hsl(0, 100, 50)', 'hsl(-120, 100, 50)'], color: ['hsl(0, 100, 50)', 'hsl(-120, 100, 50)']}} transition={{repeat: Infinity}} style={{width: "48%"}}>
                        <p className="title">Education</p>
                        <p className="description">fac1<br></br></p>
                    </ParagraphContainer>
                </LifeStudies>
                <ParagraphContainer animate={{borderColor: ['hsl(0, 100, 50)', 'hsl(-120, 100, 50)'], color: ['hsl(0, 100, 50)', 'hsl(-120, 100, 50)']}} transition={{repeat: Infinity}} style={{width: "80%"}}>
                    <p className="title">How I view art</p>
                    <p className="description">He often blends esthetics elements, in tribute to his favorite films and filmmakers. In Kill Bill, he melds comic strip formulas and esthetics within a live action film sequence, in some cases by the literal use of cartoon or anime images.</p>
                </ParagraphContainer>
                <ParagraphContainer animate={{borderColor: ['hsl(0, 100, 50)', 'hsl(-120, 100, 50)'], color: ['hsl(0, 100, 50)', 'hsl(-120, 100, 50)']}} transition={{repeat: Infinity}} style={{alignSelf: "flex-end", width: "38.4%", marginRight: "10%"}}>
                    <p className="title">Contact</p>
                    <a href="https://gmail.com"><p className="description">email: ceva</p></a>
                    <a href="https://linkedin.com"><p className="description">linkedid: ceva</p></a>
                    <a href="https://instagram.com"><p className="description">instagram: ceva</p></a>
                </ParagraphContainer>
            </AboutMeInner>
        </AboutMeWrapper>
    );
}

export default AboutMe;