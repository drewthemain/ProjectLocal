import styled from "@emotion/styled"

const ImageContainer = styled('div')`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`

export const StoryImage = ({img} : {img : string | undefined}) => {
    return (
        <div>
            {img && <ImageContainer>
                        <img src={require(`../../StoryPictures/${img}.png`)} alt="firstimg" width={500} height={500} style={{alignContent:"center", alignItems:"center"}} />
                    </ImageContainer>
            }
        </div>
    )
}