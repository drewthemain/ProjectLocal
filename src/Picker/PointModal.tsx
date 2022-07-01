import { Button, IconButton, Modal, Paper, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { PointDescriptor } from '../Types/points';
import { Close } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const ModalBodyOuter = styled(Paper)`
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: #0A0908;
`;

const ModalTitle = styled(Typography)`
    color: #EE5642;
    font-weight: bold;
`;

const ModalSub = styled(Typography)`
    color: #EAE0D5;
`

const ModalRead = styled(Typography)`
    color: #DE6449;
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
                        <IconButton onClick={onClose} style={{color:'white', float:'right'}}><Close /></IconButton>
                        <ModalTitle variant="h4">{modalDescriptor.title}</ModalTitle>
                        <ModalSub variant="subtitle1">{modalDescriptor.fullLoc}</ModalSub>
                        <ModalSub variant="subtitle1">{modalDescriptor.year}</ModalSub>
                        <ModalSub variant="subtitle1">{modalDescriptor.caption}</ModalSub>
                        <div style={{display: "flex", justifyContent:'center', alignItems: 'center'}}>
                            <Button style={{}} onClick={() => navigate(`/reader/${modalDescriptor.storyId}`)}>
                                <ModalRead variant="subtitle2">Read</ModalRead>
                            </Button>
                        </div>
                </ModalBodyOuter>
            </Modal>
        </div>
    )
}