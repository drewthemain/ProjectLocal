import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Switcher from './Switcher';

const PATH = process.env.REACT_APP_PATH;

export default function Global() {

    return (
        <Router basename={PATH}>
            {/*Screen is split into two sections: header and body */}
            <Header />
            <Switcher />
        </Router>
    )
}