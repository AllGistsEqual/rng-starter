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
import DEVICES from '../../data/devices'

const borderWidth = 4

const getBuildingFromId = (id) => {
    const device = DEVICES[id].asset
}

const initialHover = {
    col: null,
    row: null,
}

const GtmBoard = ({
    config,
    reportChange,
    mob,
    drops,
    position,
}) => {
    const {
        gridCols,
        gridRows,
        tileWidth,
        tileHeight,
    } = config
    const { top, left } = position
    const [board, setBoard] = useState(createBoard(gridCols, gridRows))
    const [hoverTile, setHoverTile] = useState(initialHover)

    useEffect(() => {
        if (drops.length) {
            const { x, y, tileValue } = drops[0]
            const { row, col } = getTile(x, y)
            if (getValueOfCell(board, col, row) === 0) {
                setBoard(updateBoard(board, [{
                    x: col,
                    y: row,
                    tile: tileValue,
                }]))
            }
        }
    }, [drops])

    const getTile = (x, y) => {
        const col = x ? Math.ceil((x - left) / tileWidth) - 1 : undefined
        const row = y ? Math.ceil((y - top) / tileHeight) - 1 : undefined
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
                width: gridCols * tileWidth + borderWidth * 2,
                height: gridRows * tileHeight + borderWidth * 2,
            }}
        >
            {gridPainter(board).map(({
                tile,
                x,
                y,
            }) => {
                const { row, col } = hoverTile
                return (
                    <Tile
                        key={`tile_${x}_${y}`}
                        tile={tile}
                        x={x}
                        y={y}
                        hover={(col === x && row === y)}
                        width={tileWidth}
                        height={tileHeight}
                    />
                )
            })}
        </View>
    )
}

GtmBoard.propTypes = {
    config: PropTypes.object.isRequired,
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
