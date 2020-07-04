import React, {
    useState,
    useEffect,
    useRef,
} from 'react'
import { Text } from 'react-native'
import GtmBoard from './GtmBoard'
import GtmToolbox from './GtmToolbox'
import { deviceData, getIntFromDevice } from '../../data/devices'

const config = {
    tileWidth: 50,
    tileHeight: 50,
    gridCols: 6,
    gridRows: 8,
    borderWidth: 4,
}

const preset = [
    { x: 0, y: 0, tile: getIntFromDevice(deviceData.device_source.id, 1, 0) },
    { x: 1, y: 0, tile: getIntFromDevice(deviceData.device_line.id, 1, 0) },
    { x: 2, y: 0, tile: getIntFromDevice(deviceData.device_line.id, 1, 0) },
    { x: 3, y: 0, tile: getIntFromDevice(deviceData.device_merger.id, 2, 0) },
    { x: 4, y: 0, tile: getIntFromDevice(deviceData.device_line.id, 1, 0) },
    { x: 5, y: 0, tile: getIntFromDevice(deviceData.device_source.id, 3, 0) },
    { x: 3, y: 1, tile: getIntFromDevice(deviceData.device_line.id, 10, 0) },
    { x: 3, y: 2, tile: getIntFromDevice(deviceData.device_line.id, 10, 0) },
    { x: 3, y: 3, tile: getIntFromDevice(deviceData.device_mixer.id, 3, 0) },
    { x: 2, y: 3, tile: getIntFromDevice(deviceData.device_line.id, 1, 0) },
    { x: 1, y: 3, tile: getIntFromDevice(deviceData.device_line.id, 4, 0) },
    { x: 1, y: 2, tile: getIntFromDevice(deviceData.device_extractor.id, 4, 0) },
    { x: 1, y: 1, tile: getIntFromDevice(deviceData.device_imbuer.id, 4, 0) },
]

const initialMob = {
    id: null,
    device: null,
    isDroppable: true,
    x: null,
    y: null,
}

const isPositionWithinArea = (position, area, padding = 0) => {
    const {
        top, bottom, left, right,
    } = area
    const { x, y } = position
    return (
        x >= left + padding
        && x <= right - padding
        && y >= top + padding
        && y <= bottom - padding
    )
}

const MagicGatherer = () => {
    const [mob, setMob] = useState(initialMob)
    const [board, setBoard] = useState({})
    const [drops, setDrops] = useState([])
    const refMob = useRef(mob)
    const refBoard = useRef(board)

    useEffect(() => {
        refMob.current = mob
        refBoard.current = board
    }, [mob, board])

    const registerNewMob = (id, device) => {
        setMob(mob.id
            ? mob
            : {
                ...initialMob,
                id,
                device,
            })
    }
    const calculateMob = ({
        id, device, isDroppable, x, y,
    }) => {
        setMob({
            ...refMob.current,
            id,
            device,
            isDroppable,
            x,
            y,
        })
    }

    const handleDragStart = (id, device) => {
        registerNewMob(id, device)
    }

    const handleDrag = (id, device, event) => {
        const { nativeEvent: { absoluteX: x, absoluteY: y } } = event
        const isDroppable = isPositionWithinArea({ x, y }, refBoard.current, config.borderWidth)
        calculateMob({
            id, device, isDroppable, x, y,
        })
    }

    const handleDrop = (id, device, orientation, event) => {
        const { nativeEvent: { absoluteX: x, absoluteY: y } } = event
        const isDroppable = isPositionWithinArea({ x, y }, refBoard.current, config.borderWidth)
        if (isDroppable) {
            const tileValue = getIntFromDevice(device, orientation)
            setDrops([{ x, y, tileValue }, ...drops])
        }
        setMob(initialMob)
    }

    const adjustBoard = ({ nativeEvent }) => {
        const {
            x, y, width, height,
        } = nativeEvent.layout
        setBoard({
            top: y,
            left: x,
            bottom: y + height,
            right: x + width,
        })
    }

    return (
        <>
            <Text style={{
                fontSize: 24,
                fontWeight: 'bold',
                color: '#ff7100',
                marginBottom: 20,
            }}
            >
                alpha prototype v0.0.8
            </Text>
            <GtmBoard
                config={config}
                preset={preset}
                reportChange={adjustBoard}
                mob={mob}
                drops={drops}
                position={board}
            />
            <GtmToolbox
                config={config}
                handleDragStart={handleDragStart}
                handleDrag={handleDrag}
                handleDrop={handleDrop}
                mob={mob}
            />
        </>
    )
}

export default MagicGatherer
