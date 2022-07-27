import { Button, IconButton, Modal, Paper, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { PointDescriptor } from '../Types/points';
import { Close } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { colors } from '../Style/colors';
import { UnfitBackground } from '../Style/CommonComponents';

const ModalBodyOuter = styled(Paper)`
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: ${colors.black};
    outline: none;
`;

const ModalTitle = styled(Typography)`
    color: ${colors.darkOrange};
    font-weight: bold;
`;

const ModalSub = styled(Typography)`
    color: ${colors.white};
`

const ModalRead = styled(Typography)`
    color: ${colors.lightOrange};
    font-weight: bold;
`

type ModalProps = {
    modalState : boolean;
    handleClose : Function;
    modalDescriptor: PointDescriptor;
}

export default function PointModal({modalState, handleClose, modalDescriptor} : ModalProps) {
    const navigate = useNavigate();

    const onClose = () => {
        handleClose();
    }

    return (
        <div>
            <Modal 
            open={modalState} 
            onClose={(_, reason) => { 
                if (reason !== "backdropClick") {
                    onClose();
                }
            }}>
                <ModalBodyOuter>
                        <IconButton onClick={onClose} style={{color: colors.white, float:'right'}}><Close /></IconButton>
                        <ModalTitle variant="h4">{modalDescriptor.title}</ModalTitle>
                        <ModalSub variant="subtitle1">{modalDescriptor.fullLoc}</ModalSub>
                        <ModalSub variant="subtitle1">{modalDescriptor.year}</ModalSub>
                        <ModalSub variant="subtitle1">{modalDescriptor.caption}</ModalSub>
                        <UnfitBackground>
                            <Button sx={{ "&:hover": { backgroundColor: colors.black } }} onClick={() => navigate(`/reader/${modalDescriptor.storyId}`)}>
                                <ModalRead variant="subtitle2">Read</ModalRead>
                            </Button>
                        </UnfitBackground>
                </ModalBodyOuter>
            </Modal>
        </div>
    )
}