import styled from "@emotion/styled";
import { Container } from "@mui/material";
import useReader from "../Hooks/useReader";
import Footer from "../Footer";
import { colors } from "../Style/colors";
import { UnfitBackground, FitBackground, LightOrangeText, WhiteText } from "../Style/CommonComponents";
import { Titles } from "./Titles";
import { StoryImage } from "./StoryImage";
import { Editor, EditorState } from 'draft-js'

const ReaderContainer = styled('div')`
    margin-bottom: 100px;
    background-color: ${colors.black};
    display: inline-block;
`

const styleMap = {
    'CODE': {
        color: '#EAE0D5',
        marginTop: '10px',
    },
}

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
                            <Editor editorState={text || {} as EditorState} readOnly={true} customStyleMap={styleMap} onChange={() => console.log("Loaded!")} />
                        </Container>
                        <StoryImage img={story?.lastImg} />
                    </ReaderContainer>
                }
            </UnfitBackground>
            <Footer />
        </div>
    )
}