import styled from "@emotion/styled";
import { colors } from "./colors";
import { Typography } from "@mui/material";

export const FitBackground = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.black};
    height: 100vh;
`

export const UnfitBackground = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
`

export const LightOrangeText = styled(Typography)`
    color: ${colors.lightOrange};
`

export const DarkOrangeText = styled(Typography)`
    margin-top: 10px;
    color: ${colors.darkOrange};
`

export const WhiteText = styled(Typography)`
    align-content: left;
    margin-bottom: 20px;
    font-weight: 700;
    color: ${colors.white};
`