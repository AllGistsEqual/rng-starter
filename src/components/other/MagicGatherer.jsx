import React from 'react'
import GtmBoard from './GtmBoard'
import GtmToolbox from './GtmToolbox'

const cellWidth = 50
const cellHeight = 50

const MagicGatherer = () => (
    <>
        <GtmBoard gridCols={6} gridRows={8} cellWidth={cellWidth} cellHeight={cellHeight} />
        <GtmToolbox cellWidth={cellWidth} cellHeight={cellHeight} />
    </>
)

export default MagicGatherer
