import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Picker from './Picker/Picker';
import Purpose from './Purpose';
import Contact from './Contact';
import Reader from './Reader/Reader';
import Error from './Error';

export default function Switcher() {

    return (
        <Routes>
            <Route path="" element={<Picker />} />
            <Route path="picker" element={<Picker />} />
            <Route path="purpose" element={<Purpose />} />
            <Route path="contact" element={<Contact />} />
            <Route path="reader/:storyId" element={<Reader />} />
            <Route path="*" element={<Error />} />
        </Routes>
    )
}