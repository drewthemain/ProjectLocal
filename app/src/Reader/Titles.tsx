import { Container } from "@mui/material"
import { PointDescriptor } from "../Types/points"
import { DarkOrangeText } from "../Style/CommonComponents"

export const Titles = ({ story } : {story : PointDescriptor | undefined} ) => {
    return (
        <Container style={{marginTop: 70}}>
            <DarkOrangeText variant="h1">{`${story?.title}`}</DarkOrangeText>
            <DarkOrangeText variant="h3">{`${story?.fullLoc}`}</DarkOrangeText>
            <DarkOrangeText variant="h3">{`${story?.year}`}</DarkOrangeText>
        </Container>
    )
}