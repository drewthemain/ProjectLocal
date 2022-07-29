import { Route, Routes} from 'react-router-dom';

import Picker from './Picker/Picker';
import Purpose from './Purpose';
import Reader from './Reader/Reader';
import Error from './Error';
import StoryEditor from './Editor/StoryEditor'

export default function Switcher() {

    return (
        <div style={{display:"flex", justifyContent: "center", alignItems: "center", backgroundColor: "#0A0908"}}>
            <Routes>
                <Route path="" element={<Picker />} />
                <Route path="picker" element={<Picker />} />
                <Route path="purpose" element={<Purpose />} />
                <Route path="reader/:id" element={<Reader />} />
                <Route path="editor" element={<StoryEditor />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    )
}