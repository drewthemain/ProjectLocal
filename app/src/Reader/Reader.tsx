import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import useReader from "../Hooks/useReader";
import Footer from "../Footer";
import { colors } from "../Style/colors";

const Background = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
`

export default function Reader() {
    const {loading, story, text} = useReader();

    return (
        <div style={{width:"100%"}}>
            <Background>
                {loading && <div style={{height:"100vh"}}></div>}
                {!loading && <div style={{marginTop: 100, marginBottom: 100, backgroundColor: colors.black}}>
                        <Container>
                            <Typography variant="h1" color={colors.darkOrange}>{`${story?.title}`}</Typography>
                            <Typography variant="h3" color={colors.darkOrange}>{`${story?.fullLoc}`}</Typography>
                            <Typography variant="h3" color={colors.darkOrange} style={{marginTop: 20}}>{`${story?.year}`}</Typography>
                        </Container>

                        <div style={{display: 'flex', justifyContent: 'center', margin: 30}}>
                            <img src={require(`../../StoryPictures/${story?.firstImg}.png`)} alt="firstimg" width={500} height={500} style={{alignContent:"center", alignItems:"center"}} />
                        </div>

                        <Container>
                            <Typography variant="h6" align="center" color={colors.lightOrange} style={{marginTop: 20}}>{`${story?.caption}`}</Typography>
                        </Container>

                        <Container style={{marginTop: 30}}>
                            {text?.split(/\r\n|\n/).map((line : string, index : number) => (
                                <Typography key={index} variant="body1" color={colors.white} style={{alignContent:"left", marginBottom: 20, fontWeight: 700}}>{`${line}`}</Typography>
                            ))}
                        </Container>

                        <div style={{display: 'flex', justifyContent: 'center', margin: 50}}>
                            <img src={require(`../../StoryPictures/${story?.lastImg}.png`)} alt="lastimg" width={500} height={500} style={{alignContent:"center", alignItems:"center"}} />
                        </div>
                        
                    </div>
                }
            </Background>
            <Footer />
        </div>
    )
}