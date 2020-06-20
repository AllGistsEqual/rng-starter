import React, { useState, useEffect, useRef } from 'react'
import GtmBoard from './GtmBoard'
import GtmToolbox from './GtmToolbox'

const cellWidth = 50
const cellHeight = 50
const gridCols = 6
const gridRows = 8

const initialMob = {
    id: null,
    isDroppable: true,
    x: null,
    y: null,
}

const isPositionWithinArea = (position, area) => {
    const {
        top, bottom, left, right,
    } = area
    const { x, y } = position
    return (
        x >= left
        && x <= right
        && y >= top
        && y <= bottom
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

    const calculateNewMob = ({
        id, isDroppable, x, y,
    }) => {
        setMob({
            ...refMob.current,
            id,
            isDroppable,
            x,
            y,
        })
    }

    const handleDrag = (id, event) => {
        const { nativeEvent: { absoluteX: x, absoluteY: y } } = event
        const isDroppable = isPositionWithinArea({ x, y }, refBoard.current)
        calculateNewMob({
            id, isDroppable, x, y,
        })
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

    const handleDrop = (id, event) => {
        const { nativeEvent: { absoluteX: x, absoluteY: y } } = event
        setDrops([{ x, y, id }, ...drops])
        setMob(initialMob)
    }
    return (
        <>
            <GtmBoard
                gridCols={gridCols}
                gridRows={gridRows}
                cellWidth={cellWidth}
                cellHeight={cellHeight}
                reportChange={adjustBoard}
                mob={mob}
                drops={drops}
                position={board}
            />
            <GtmToolbox
                cellWidth={cellWidth}
                cellHeight={cellHeight}
                handleDrag={handleDrag}
                handleDrop={handleDrop}
                mob={mob}
            />
        </>
    )
}

export default MagicGatherer
