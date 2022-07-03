import styled from "@emotion/styled";
import { Container, Typography } from "@mui/material";

const Background = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0A0908;
    height: 100vh;
`

export default function Purpose() {

    return (
        <Background>
            <div style={{height: 600, marginBottom: 200}}>

                    <Container>
                        <Typography variant="h1" color="#EE5622" style={{marginBottom: 70}}>Purpose</Typography>
                    </Container>

                    <Container style={{marginTop: 30}}>
                        <Typography variant="h5" color="#EAE0D5" style={{alignContent:"left", marginBottom: 50, fontWeight: 700}}>Project Local is a space to share short horror in a fresh and unique way. By focusing on the location of the horror, the globe picker allows you to find stories as close and as far from what you call home. Click a point of interest and read to your heart's content. However, be careful. These stories, ranging from simple campfire tales to longer narratives, are not for the faint of heart. You have been warned.</Typography>
                        <Typography variant="h5" color="#EAE0D5" style={{alignContent:"left", marginBottom: 50, fontWeight: 700}}>While Project Local is currenly focused on showing my work, the initial plan was for this platform to evolve into something bigger. My goal is to allow all users to create points of interest and turn Project Local into a hub for urgan legends, local myths, and true tales all tied to a location. User's will only be able to upload stories to their current location on the globe, encouraging the cultivation of location-based horror. There are plenty of stories to be told and being able to visualize them on a map will only heighten the experience.</Typography>
                        <Typography variant="h5" color="#EAE0D5" style={{alignContent:"left", marginBottom: 20, fontWeight: 700}}>As this project evolves, it will always remain a hub for short horror and the intrigue that comes along with it. Horror is forever changing and forever exciting, and Project Local will be an extension of that. Thank you for visiting. Read on.</Typography>
                    </Container>
            </div>  
        </Background>
    )
}