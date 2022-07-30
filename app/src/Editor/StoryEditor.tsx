import React, { useEffect } from 'react';
import { useState } from 'react';
import { Editor, EditorState, RichUtils, convertToRaw, ContentState } from 'draft-js';
import { Button, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { WhiteText } from '../Style/CommonComponents';
import './EditorStyle.css';

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
    background-color: black;
    box-shadow: 0 0 5px rgba(0,0,0,.1);
    min-height: 36%;
    overflow-x:hidden;
    overflow-y:auto;
    position: relative;
    height: 40vh;
    font-size: 90%;
`

export default function MyEditor() {

    const [id, setId] = useState('');
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

    const onSubmit = () => {
        setDisplay(JSON.stringify(convertToRaw(editorState.getCurrentContent())));
    }

    return (
            <EditContainer>
                <Typography variant='h3' align='center'>Create</Typography>
                <div style={{display: 'flex', alignContent: 'center', justifyContent:'center', margin: 10}}>
                    <Typography variant='body1'>Story Id:</Typography>
                    <input type="text" name="name" onChange={e => setId(e.target.value)} value={id}/>
                </div>
                <Button onClick={onUnderlineClick}>U</Button>
                <Button onClick={onBoldClick}><b>B</b></Button>
                <Button onClick={onItalicClick}>I</Button>
                <Button onClick={onBlockClick}>Double</Button>    
                <EditorBlock>
                    <Editor 
                        editorState={editorState}
                        handleKeyCommand={handleKeyCommand}
                        onChange= {setEditorState}
                        />
                </EditorBlock>
                <div style={{display: 'flex', alignContent: 'center', justifyContent:'center', margin: 10}}>
                    <Button onClick={onSubmit} >Submit</Button>
                </div>
                <div>{display}</div>
            </EditContainer>
    )
}