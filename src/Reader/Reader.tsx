import React, {useEffect} from "react";
import { useParams } from "react-router-dom";

export default function Reader() {
    const {storyId} = useParams<string>();

    useEffect(() => {
        console.log(storyId);
    }, []);

    return (
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
            <p>{`${storyId}`}</p>
        </div>
    )
}