import { useDrag, DragSourceMonitor } from 'react-dnd'
import {VMType} from "../Plan/Plan";
import styles from './VirtualMachine.module.css';

type VirtualMachineProps = {
    vm: VMType,
    onDelete: () => void
}

export default function VirtualMachine({vm, onDelete}: VirtualMachineProps) {
    const [{isDragging}, drag] = useDrag({
        item: {
            ...vm,
            type: 'vm'
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId
        })
    })

    if(isDragging) {
        return <></>
    }

    return <div ref={drag} className={styles.vm}>
        <div className={styles.name}>
            {
                vm.name
            }
        </div>
        <div>
            CPU:
            {
                vm.cpu
            }
        </div>
        <div>
            Memory:
            {
                vm.memory
            }
        </div>
        <div>
            Storage:
            {
                vm.storage
            }
        </div>
        <button className={styles.deleteButton} onClick={onDelete}>X</button>
    </div>
}