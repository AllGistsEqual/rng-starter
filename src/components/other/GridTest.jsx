import React from 'react'
import { View, StyleSheet } from 'react-native'
import Cell from './Cell'

const gridPainter = (grid) => grid
    .map(
        (row, rowIndex) => row.map(
            (cell, columnIndex) => ({ cell, x: columnIndex, y: rowIndex })
        )
    )
    .flat()

const cellWidth = 50
const cellHeight = 50
const gridRows = 10
const gridCols = 7
const borderWidth = 1

const createBoard = (rows, cols) => {
    const tempGrid = Array(rows).fill(Array(cols).fill(0))

    return tempGrid
}

const GridTest = () => {
    const grid = createBoard(gridRows, gridCols, 1)

    return (
        <>
            <View style={styles.gridBackground}>
                {gridPainter(grid).map(({
                    cell,
                    x,
                    y,
                }) => (
                    <Cell
                        key={`cell_${x}_${y}`}
                        cell={cell}
                        x={x}
                        y={y}
                        width={cellWidth}
                        height={cellHeight}
                    />
                ))}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    gridBackground: {
        width: gridCols * cellWidth + borderWidth * 2,
        height: gridRows * cellHeight + borderWidth * 2,
        resizeMode: 'cover',
        justifyContent: 'center',
        backgroundColor: 'magenta',
        position: 'relative',
        borderWidth,
        borderColor: '#000',
    },
})

export default GridTest
