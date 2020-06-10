import React from 'react'
import GtmBoard from './GtmBoard'
import GtmToolbox from './GtmToolbox'

const cellWidth = 50
const cellHeight = 50

const MagicGatherer = () => {
    const handleDrag = ({ x, y }) => {
        console.log('drag: ', x, y)
    }
    const handleDrop = ({ x, y }) => {
        console.log('drop: ', x, y)
    }
    return (
        <>
            <GtmBoard gridCols={6} gridRows={8} cellWidth={cellWidth} cellHeight={cellHeight} />
            <GtmToolbox
                cellWidth={cellWidth}
                cellHeight={cellHeight}
                handleDrag={handleDrag}
                handleDrop={handleDrop}
            />
        </>
    )
}

export default MagicGatherer
