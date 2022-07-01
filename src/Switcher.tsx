import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Picker from './Picker/Picker';
import Reader from './Reader/Reader';
import Error from './Error';

export default function Switcher() {

    return (
        <Routes>
            <Route path="picker" element={<Picker />} />
            <Route path="reader/:storyId" element={<Reader />} />
            <Route path="*" element={<Error />} />
        </Routes>
    )
}