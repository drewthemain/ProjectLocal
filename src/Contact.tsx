import { Container, Typography } from "@mui/material";
import styled from "@emotion/styled";

const Background = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0A0908;
    height: 100vh;
`

export default function Contact() {

    return (
        <Background>
            <div style={{height: 600, marginBottom: 200}}>

                    <Container>
                        <Typography variant="h1" color="#EE5622" style={{marginBottom: 70}}>Contact</Typography>
                    </Container>

                    <Container style={{marginTop: 30}}>
                        <Typography variant="h5" color="#EAE0D5" style={{alignContent:"left", marginBottom: 50, fontWeight: 700}}>Have concerns? Questions? Want to talk?</Typography>
                        <Typography variant="h5" color="#EAE0D5" style={{alignContent:"left", marginBottom: 50, fontWeight: 700}}>Email me at 1drewbug12345@gmail.com. I want to hear from you.</Typography>
                    </Container>
            </div>  
        </Background>
    )
}