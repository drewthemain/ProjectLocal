import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import points from "../Picker/points";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import { PointDescriptor } from "../Types/points";

const Background = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #EAE0D5;
`

export default function Reader() {
    const {storyId} = useParams<string>();
    const [loading, setLoading] = useState<boolean>(true);
    const [story, setStory] = useState<PointDescriptor>();
    const [text, setText] = useState<string>();

    useEffect(() => {
        if (story && storyId) {
            setLoading(false);
        }

    },[story, storyId])

    useEffect(() => {
        const fetchText = async() => {
            try {
                const response = await fetch(`/stories/${story?.path}.txt`)
                const rawT = await response.text();
                setText(rawT);
            } catch (error) {
                setText(error as string);
            }
            
        }

        if (storyId) {
            setStory(points[Number(storyId)].description);

            if (story) {
                fetchText();
            }
        }
    }, [story, storyId, loading]);

    return (
        <Background>
            {story && <div style={{marginTop: 100}}>

                    <Container>
                        <Typography variant="h1">{`${story?.title}`}</Typography>
                        <Typography variant="h3">{`${story?.fullLoc}`}</Typography>
                        <Typography variant="h4" style={{marginTop: 20}}>{`${story?.year}`}</Typography>
                        <Typography variant="h5" style={{marginTop: 20}}>{`${story?.caption}`}</Typography>
                    </Container>

                    <Container style={{marginTop: 30}}>
                        {text?.split(/\r\n|\n/).map((line, index) => (
                            <Typography key={index} variant="body1" style={{alignContent:"left", marginBottom: 20}}>{`${line}`}</Typography>
                        ))}
                    </Container>
                    
                </div>
            }   
        </Background>
    )
}