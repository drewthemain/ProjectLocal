import styled from "@emotion/styled";
import { Container } from "@mui/material";
import useReader from "../Hooks/useReader";
import Footer from "../Footer";
import { colors } from "../Style/colors";
import { UnfitBackground, FitBackground, LightOrangeText, WhiteText } from "../Style/CommonComponents";
import { Titles } from "./Titles";
import { StoryImage } from "./StoryImage";

const ReaderContainer = styled('div')`
    margin-bottom: 100px;
    background-color: ${colors.black};
    display: inline-block;
`

export default function Reader() {
    const {loading, story, text} = useReader();

    return (
        <div style={{width:"100%"}}>
            <UnfitBackground>
                {loading && <FitBackground />}
                {!loading && <ReaderContainer>
                        <Titles story={story} />
                        <StoryImage img={story?.firstImg} />
                        <Container>
                            <LightOrangeText variant="h6" align="center">{`${story?.caption}`}</LightOrangeText>
                        </Container>
                        <Container style={{marginTop: 30}}>
                            {text?.split(/\r\n|\n/).map((line : string, index : number) => (
                                <WhiteText key={index} variant="body1">{`${line}`}</WhiteText>
                            ))}
                        </Container>
                        <StoryImage img={story?.lastImg} />
                    </ReaderContainer>
                }
            </UnfitBackground>
            <Footer />
        </div>
    )
}