import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import styled from "@emotion/styled";
import { Link as RouterLink } from "react-router-dom";

const MainHeader = styled(AppBar)`
    background: #0A0908;
    paddingRight: 79px;
    paddingLeft: 118px;
`;

const HeaderMessage = styled(Toolbar)`
    fontWeight: 600;
    textAlign: left;
    display: flex;
    justifyContent: space-between;
`;

const HeaderButton = styled(Button)`
    fontWeight: bold;
    size: 18px;
    marginLeft: 38px;
    color: #EAE0D5;
`;

const headerOptions = [
    {
      label: "Picker",
      href: "picker",
    },
    {
      label: "Purpose",
      href: "purpose",
    },
    {
      label: "Help",
      href: "help",
    },
  ];

export default function Header() {

    const getMenuButtons = () => {
        return headerOptions.map(({ label, href }) => {
          return (
            <HeaderButton
              {...{
                key: label,
                to: href,
              }}
            >
              {label}
            </HeaderButton>
          );
        });
      };

    const displayWelcome = () => {
        return <HeaderMessage>
            {welcomeMessage}
            <div>{getMenuButtons()}</div>
            </HeaderMessage>
    };

    const welcomeMessage = (
        <Typography variant="h6" component="h1" fontWeight= "bold" color="#DE6449">
        Project Local
        </Typography>
    );

    
    return (
        <header>
            <MainHeader>{displayWelcome()}</MainHeader>
        </header>
    );
}