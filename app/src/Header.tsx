import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import styled from "@emotion/styled";
import { useNavigate, useLocation } from "react-router-dom";
import points from "./Picker/points";
import { useEffect } from "react";

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
      location: "picker",

    },
    {
      label: "Purpose",
      location: "purpose",
    },
    {
      label: "Surprise Me",
      location: "",
    },
  ];

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const maxInd : number = points.length;
    headerOptions[2].location = `reader/${Math.floor(Math.random() * (maxInd))}`;
  },[location])

    const getMenuButtons = () => {
        return headerOptions.map(({ label, location }) => {
          return (
            <HeaderButton
              {...{
                key: label,
                onClick: () => navigate(`/${location}`)
              }
            }
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