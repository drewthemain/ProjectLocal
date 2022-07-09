import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import useReader from "../Hooks/useReader";

const Background = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0A0908;
`

export default function Reader() {
    const {loading, story, text} = useReader();

    return (
        <Background>
            {loading && <div style={{height:"100vh"}}></div>}
            {!loading && <div style={{marginTop: 100, marginBottom: 200}}>
                    <Container>
                        <Typography variant="h1" color="#EE5622">{`${story?.title}`}</Typography>
                        <Typography variant="h3" color="#EE5622">{`${story?.fullLoc}`}</Typography>
                        <Typography variant="h3" color="#EE5622" style={{marginTop: 20}}>{`${story?.year}`}</Typography>
                        <Typography variant="h5" color="#DE6449" style={{marginTop: 20}}>{`${story?.caption}`}</Typography>
                    </Container>

                    <div style={{display: 'flex', justifyContent: 'center', margin: 50}}>
                        <img src={require(`../../StoryPictures/${story?.firstImg}.png`)} alt="firstimg" width={500} height={500} style={{alignContent:"center", alignItems:"center"}} />
                    </div>

                    <Container style={{marginTop: 30}}>
                        {text?.split(/\r\n|\n/).map((line : string, index : number) => (
                            <Typography key={index} variant="body1" color="#EAE0D5" style={{alignContent:"left", marginBottom: 20, fontWeight: 700}}>{`${line}`}</Typography>
                        ))}
                    </Container>

                    <div style={{display: 'flex', justifyContent: 'center', margin: 50}}>
                        <img src={require(`../../StoryPictures/${story?.lastImg}.png`)} alt="lastimg" width={500} height={500} style={{alignContent:"center", alignItems:"center"}} />
                    </div>
                    
                </div>
            }
        </Background>
    )
}