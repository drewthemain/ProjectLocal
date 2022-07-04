import { useState} from "react";
import { PointDescriptor } from "../Types/points";

const useModal = () => {
    const [modalState, setModalState] = useState(false);
    const [modalDescriptor, setModalDescriptor] = useState<PointDescriptor>({} as PointDescriptor);

    const handleOpen = (descriptor : PointDescriptor) => {
        setModalDescriptor(descriptor);
        setModalState(true);
    }

    const handleClose = () => {
        setModalState(false);
    }

    return {modalState, modalDescriptor, handleOpen, handleClose};
}

export default useModal;