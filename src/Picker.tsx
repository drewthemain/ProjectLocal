import World from './Globe';
import PointModal from './PointModal';
import useModal from './Hooks/useModal';

export default function Picker() {

    const {modalState, modalDescriptor, handleOpen, handleClose} = useModal();

    return (
        <div>
            <World handleOpen={handleOpen}/>
            <PointModal modalState={modalState} handleClose={handleClose} modalDescriptor={modalDescriptor}/>
        </div>
    )
}