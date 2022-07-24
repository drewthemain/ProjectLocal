import World from './Globe';
import PointModal from './PointModal';
import useModal from '../Hooks/useModal';
import { colors } from '../Style/colors';

export default function Picker() {

    const {modalState, modalDescriptor, handleOpen, handleClose} = useModal();

    return (
        <div style={{color: colors.black}}>
            <World handleOpen={handleOpen}/>
            <PointModal modalState={modalState} handleClose={handleClose} modalDescriptor={modalDescriptor}/>
        </div>
    )
}