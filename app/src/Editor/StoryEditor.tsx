import { useState } from 'react';
import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js';
import { Button, Typography } from '@mui/material';
import styled from '@emotion/styled';
import './EditorStyle.css';
import { colors } from '../Style/colors';
import { FormatUnderlined, FormatBold, FormatItalic, AutoFixNormal, Check, Refresh } from '@mui/icons-material';

const EditContainer = styled('div')`
    margin: 0em;
    padding: 2em;
    border-left: #f6f7fb solid 2px;
    color: #2C3A51;
    text-align: left;
    position: relative;
    overflow-x: hidden;
    order: 2;
    height: 100vh;
    flex: 1 1 auto;
    flex-basis: 60%;
    min-width: 60%;
    max-width: 100%;
    background: #FBFAFA;
    align-items: center;
    align-self: stretch;
    top: 60px;
    background-color: ${colors.white};
`

const EditorBlock = styled('div')`
    border: none;
    border-radius: 4px;
    padding: 1em 1.5em 3em 1.5em;
    margin: -0.2em 0.6em 1em 0.6em;
    font-family: "Helvetica";
    line-height: 1.4;
    color: #2C3A51;
    font-size: 16px;
    text-align: left;
    background-color: ${colors.black};
    box-shadow: 0 0 5px rgba(0,0,0,.1);
    min-height: 36%;
    overflow-x:hidden;
    overflow-y:auto;
    position: relative;
    height: 40vh;
    font-size: 90%;
`

const StyleButton = styled(Button)`
    color: ${colors.black};
    background-color: ${colors.white};
    margin: 5px;
`

const ButtonContainer = styled('div')`
    display: flex;
    align-content: center;
    justify-content: center;
    margin: 10px;
`

export default function MyEditor() {
    
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );
    const [display, setDisplay] = useState("");

    const handleKeyCommand = (command : string) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        
        if (newState) {
            setEditorState(newState);
        return 'handled';
        }
        return 'not-handled';
    }

    // Below are the several edit options that are stored in EditState

    const onUnderlineClick = () => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
    }

    const onBoldClick = () => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
    }

    const onItalicClick = () => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
    }

    const onBlockClick = () => {
        setEditorState(RichUtils.toggleBlockType(editorState, 'header-four'));
    }

    const onRefresh = () => {
        setEditorState(EditorState.createEmpty());
        setDisplay("");
    }

    // Once submitted, spits out the converted text into draft.js data
    const onSubmit = () => {
        setDisplay(JSON.stringify(convertToRaw(editorState.getCurrentContent())));
    }

    return (
            <EditContainer>
                <Typography variant='h3' align='center'>Tell us a story.</Typography>
                <br></br>
                <Typography variant='h5' align='center'>This page serves as a way to edit text using Draft.js and gives a properly formatted block structure to display upon webpages.</Typography>
                <ButtonContainer>
                    <StyleButton onClick={onUnderlineClick}><FormatUnderlined /></StyleButton>
                    <StyleButton onClick={onBoldClick}><FormatBold /></StyleButton>
                    <StyleButton onClick={onItalicClick}><FormatItalic /></StyleButton>
                    <StyleButton onClick={onBlockClick}><AutoFixNormal /></StyleButton>
                    <StyleButton onClick={onRefresh}><Refresh /></StyleButton>
                </ButtonContainer> 
                <EditorBlock>
                    <Editor 
                        editorState={editorState}
                        handleKeyCommand={handleKeyCommand}
                        onChange= {setEditorState}
                        />
                </EditorBlock>
                <ButtonContainer>
                    <StyleButton onClick={onSubmit}><Check /></StyleButton>
                </ButtonContainer>
                <div>{display}</div>
            </EditContainer>
    )
}