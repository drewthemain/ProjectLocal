import styled from "@emotion/styled";
import { Container } from "@mui/material";
import useReader from "../Hooks/useReader";
import Footer from "../Footer";
import { colors } from "../Style/colors";
import { UnfitBackground, FitBackground, LightOrangeText } from "../Style/CommonComponents";
import { Titles } from "./Titles";
import { StoryImage } from "./StoryImage";
import { Editor, EditorState } from 'draft-js'
import '../Editor/EditorStyle.css'

const ReaderContainer = styled('div')`
    margin-bottom: 100px;
    background-color: ${colors.black};
    display: inline-block;
`

export default function Reader() {
    // Uses the custom Reader hook that dereferences the blocks into text
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
                            {/* Editor used to properly display the specific text data */}
                            <Editor editorState={text || {} as EditorState} 
                                    readOnly={true} 
                                    onChange={() => console.log("Loaded!")} />
                        </Container>
                        <StoryImage img={story?.lastImg} />
                    </ReaderContainer>
                }
            </UnfitBackground>
            <Footer />
        </div>
    )
}