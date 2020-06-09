import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import {
    createBoard,
    gridPainter,
} from './Grid'
import Tile from './Tile'

const borderWidth = 4

const setupBoard = (cols, rows) => createBoard(cols, rows)

const GtmBoard = ({
    gridCols,
    gridRows,
    cellWidth,
    cellHeight,
}) => {
    const [board, setBoard] = useState(setupBoard(gridCols, gridRows))

    return (
        <View style={{
            ...styles.gridBackground,
            width: gridCols * cellWidth + borderWidth * 2,
            height: gridRows * cellHeight + borderWidth * 2,
        }}
        >
            {gridPainter(board).map(({
                cell,
                x,
                y,
            }) => (
                <Tile
                    key={`cell_${x}_${y}`}
                    tile={cell}
                    x={x}
                    y={y}
                    width={cellWidth}
                    height={cellHeight}
                />
            ))}
        </View>
    )
}

GtmBoard.propTypes = {
    gridCols: PropTypes.number.isRequired,
    gridRows: PropTypes.number.isRequired,
    cellWidth: PropTypes.number.isRequired,
    cellHeight: PropTypes.number.isRequired,
}

const styles = StyleSheet.create({
    gridBackground: {
        resizeMode: 'cover',
        justifyContent: 'center',
        backgroundColor: '#ccc',
        position: 'relative',
        borderWidth,
    },
})

export default GtmBoard
