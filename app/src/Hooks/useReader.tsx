import {useEffect, useState} from "react";
import { PointDescriptor } from "../Types/points";
import points from "../Picker/points";
import { useParams } from "react-router-dom";
import { Editor, EditorState, convertFromRaw } from 'draft-js'
import { stories } from "../Reader/stories";

export default function useReader() {
    const {id} = useParams<string>();
    const [loading, setLoading] = useState<boolean>(true);
    const [story, setStory] = useState<PointDescriptor>();
    const [text, setText] = useState<EditorState>();

    useEffect(() => {
        if (story && text) {
            setLoading(false);
        }
    },[story, id, text])

    useEffect(() => {

        if (id) {
            setStory(points[Number(id)].description);
            const raw = convertFromRaw(stories[Number(id)]);
            const editorRaw = EditorState.createWithContent(raw);
            
            setText(editorRaw);
        }
    }, [story, id, loading]);

    return {loading, story, text};
}