import React from 'react'
import { View, StyleSheet } from 'react-native'
import Cell from './Cell'

const gridPainter = (grid) => grid
    .map(
        (col, colIndex) => col.map(
            (cell, rowIndex) => ({ cell, x: colIndex, y: rowIndex })
        )
    )
    .flat()

const cellWidth = 50
const cellHeight = 50
const gridCols = 7
const gridRows = 10
const gridBombs = 9
const borderWidth = 1

const createBoard = (cols, rows) => {
    const board = []
    for (let col = 0; col < cols; col++) {
        board.push(Array(rows).fill(0))
    }
    return board
}

const copyGrid = (grid) => grid.map((col) => [...col])

const getValueOfCell = (grid, x, y) => grid[x][y]

const getRandomCell = (colLength, rowLength) => ([
    Math.floor(Math.random() * Math.floor(colLength)),
    Math.floor(Math.random() * Math.floor(rowLength)),
])

const addBombs = (grid, cols, rows, bombs) => {
    const newGrid = copyGrid(grid)
    const safeBombCount = cols * rows - 5
    const targetBombCount = Math.min(safeBombCount, bombs)

    let bombCount = 0
    do {
        const [x, y] = getRandomCell(cols, rows)
        if (getValueOfCell(newGrid, x, y) === 0) {
            newGrid[x][y] = 10
            bombCount += 1
        }
    } while (bombCount < targetBombCount)
    return newGrid
}

const oneUpNeighbours = (grid, x, y) => {
    const newGrid = copyGrid(grid)
    const neighbours = [
        [x - 1, y - 1],
        [x + 0, y - 1],
        [x + 1, y - 1],
        [x - 1, y],
        [x + 1, y],
        [x - 1, y + 1],
        [x + 0, y + 1],
        [x + 1, y + 1],
    ]
    neighbours.forEach(([nX, nY]) => {
        if (newGrid[nX]) {
            if (newGrid[nX][nY] !== undefined) {
                if (newGrid[nX][nY] !== 10) {
                    newGrid[nX][nY] += 1
                }
            }
        }
    })
    return newGrid
}

const addNeighbourCount = (grid) => {
    let newGrid = copyGrid(grid)
    newGrid.forEach((col, colIndex) => col.forEach((cell, rowIndex) => {
        if (cell === 10) { newGrid = oneUpNeighbours(newGrid, colIndex, rowIndex) }
    }))
    return newGrid
}

const GridTest = () => {
    const grid = createBoard(gridCols, gridRows)
    const riggedGrid = addBombs(grid, gridCols, gridRows, gridBombs)
    const countedGrid = addNeighbourCount(riggedGrid)

    return (
        <>
            <View style={styles.gridBackground}>
                {gridPainter(countedGrid).map(({
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
