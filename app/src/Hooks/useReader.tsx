import {useEffect, useState} from "react";
import { PointDescriptor } from "../Types/points";
import points from "../Picker/points";
import { useParams } from "react-router-dom";

export default function useReader() {
    const {id} = useParams<string>();
    const [loading, setLoading] = useState<boolean>(true);
    const [story, setStory] = useState<PointDescriptor>();
    const [text, setText] = useState<string>();

    useEffect(() => {
        if (story && text) {
            setLoading(false);
        }
    },[story, id, text])

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

        if (id) {
            setStory(points[Number(id)].description);
            if (story) {
                fetchText();
            }
        }
    }, [story, id, loading]);

    return {loading, story, text};
}