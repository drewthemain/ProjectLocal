import { Typography } from "@mui/material";
import { colors } from "./Style/colors";
import { Email, LinkedIn } from "@mui/icons-material";

export default function Footer() {

    return(
        <div style={{backgroundColor: colors.darkOrange, height:80}}>
            <div style={{display: "flex", justifyContent:"center", alignItems:"center"}}>
                <Email fontSize="large" sx={{ "&:hover": { color: colors.blue } }} onClick={() => window.open('mailto:1drewbug12345@gmail.com')}/>
                <LinkedIn fontSize="large" sx={{ "&:hover": { color: colors.blue } }} onClick={() => window.open('https://www.linkedin.com/in/drew-white-833797193/')}/>
            </div>
            <Typography variant="body1" align="center">Images created using Midjourney.</Typography>
        </div>
    )
}