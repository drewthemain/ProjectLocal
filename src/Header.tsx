import { AppBar, Toolbar, Typography } from "@mui/material";
import styled from "@emotion/styled";

const MainHeader = styled(AppBar)`
    background: black;
`;

const HeaderMessage = styled(Toolbar)`
    fontWeight: 600;
    textAlign: left;
`;

export default function Header() {

    const displayWelcome = () => {
        return <HeaderMessage>{welcomeMessage}</HeaderMessage>
    };

    const welcomeMessage = (
        <Typography variant="h6" component="h1">
        Welcome. Stay Awhile.
        </Typography>
    );
    
    return (
        <header>
            <MainHeader>{displayWelcome()}</MainHeader>
        </header>
    );
}