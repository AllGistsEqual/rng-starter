import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import {
    createBoard,
    gridPainter,
    getValueOfCell,
    updateBoard,
} from './Grid'
import Tile from './Tile'

const borderWidth = 4

const setupBoard = (cols, rows) => createBoard(cols, rows)

const getBuildingFromId = (id) => {
    const type = id.split('_').pop()
    switch (type) {
        case ('source'): {
            return 1
        }
        case ('mixer'): {
            return 2
        }
        case ('exporter'): {
            return 3
        }
        case ('equaliser'): {
            return 4
        }

        default: {
            return 0
        }
    }
}

const initialHover = {
    col: null,
    row: null,
}

const GtmBoard = ({
    gridCols,
    gridRows,
    cellWidth,
    cellHeight,
    reportChange,
    mob,
    drops,
    position,
}) => {
    const [board, setBoard] = useState(setupBoard(gridCols, gridRows))
    const [hoverTile, setHoverTile] = useState(initialHover)

    const { top, left } = position

    useEffect(() => {
        if (drops.length) {
            const { x, y, id } = drops[0]
            const { row, col } = getTile(x, y)
            if (getValueOfCell(board, col, row) === 0) {
                setBoard(updateBoard(board, [{
                    x: col,
                    y: row,
                    cell: getBuildingFromId(id),
                }]))
            }
        }
    }, [drops])

    const getTile = (x, y) => {
        const col = x ? Math.ceil((x - left) / cellWidth) - 1 : undefined
        const row = y ? Math.ceil((y - top) / cellHeight) - 1 : undefined
        return { col, row }
    }

    useEffect(() => {
        const { x, y } = mob
        const { row, col } = getTile(x, y)
        setHoverTile({ row, col })
    }, [mob])

    useEffect(() => {
    }, [board])

    return (
        <View
            onLayout={(event) => reportChange(event)}
            style={{
                ...styles.gridBackground,
                width: gridCols * cellWidth + borderWidth * 2,
                height: gridRows * cellHeight + borderWidth * 2,
            }}
        >
            {gridPainter(board).map(({
                cell,
                x,
                y,
            }) => {
                const { row, col } = hoverTile
                return (
                    <Tile
                        key={`cell_${x}_${y}`}
                        tile={cell}
                        x={x}
                        y={y}
                        hover={(col === x && row === y)}
                        width={cellWidth}
                        height={cellHeight}
                    />
                )
            })}
        </View>
    )
}

GtmBoard.propTypes = {
    gridCols: PropTypes.number.isRequired,
    gridRows: PropTypes.number.isRequired,
    cellWidth: PropTypes.number.isRequired,
    cellHeight: PropTypes.number.isRequired,
    reportChange: PropTypes.func.isRequired,
    mob: PropTypes.object.isRequired,
    drops: PropTypes.array.isRequired,
    position: PropTypes.object.isRequired,
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
