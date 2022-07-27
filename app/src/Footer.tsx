import { Typography } from "@mui/material";
import { colors } from "./Style/colors";
import { Email, LinkedIn } from "@mui/icons-material";
import styled from "@emotion/styled";

const FooterWrapper = styled('div')`
    background-color: ${colors.darkOrange};
    height: 80;
`

const IconWrapper = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function Footer() {

    return(
        <FooterWrapper>
            <IconWrapper>
                <Email fontSize="large" sx={{ "&:hover": { color: colors.blue } }} onClick={() => window.open('mailto:1drewbug12345@gmail.com')}/>
                <LinkedIn fontSize="large" sx={{ "&:hover": { color: colors.blue } }} onClick={() => window.open('https://www.linkedin.com/in/drew-white-833797193/')}/>
            </IconWrapper>
            <Typography variant="body1" align="center">Images created using Midjourney.</Typography>
        </FooterWrapper>
    )
}