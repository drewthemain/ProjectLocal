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
                {/* Empty route leads back to picker */}
                <Route path="" element={<Picker />} />

                {/* Route for the globe/choosing a story */}
                <Route path="picker" element={<Picker />} />

                {/* Route for the purpose page */}
                <Route path="purpose" element={<Purpose />} />

                {/* Route for specific stories with their proper ID */}
                <Route path="reader/:id" element={<Reader />} />

                {/* Route for the Draft.js editor */}
                <Route path="editor" element={<StoryEditor />} />

                {/* Route for uh-ohs and oopsies */}
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    )
}