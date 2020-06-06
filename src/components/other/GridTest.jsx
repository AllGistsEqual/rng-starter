import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Cell from './Cell'
import TextButton from '../global/ui/TextButton'

const cellWidth = 50
const cellHeight = 50
const gridCols = 7
const gridRows = 10
const gridBombs = 9
const borderWidth = 1

const targetBombCount = Math.min(gridCols * gridRows - 5, gridBombs)

const getStraightNeighbours = (x, y) => [
    [x + 0, y - 1],
    [x + 0, y + 1],
    [x - 1, y],
    [x + 1, y],
]
const getDiagonalNeighbours = (x, y) => [
    [x - 1, y - 1],
    [x + 1, y - 1],
    [x - 1, y + 1],
    [x + 1, y + 1],
]

/* const cellValueLegend = {
    '0': 'hidden empty cell, no adjacent bombs',
    '1-8': 'hidden empty cell with n adjacent bombs',
    '9': 'hidden bomb',
    '10': 'visible empty cell, no adjacent bombs',
    '11-18': 'visible empty cell with n adjacent bombs',
    '19': 'visible bomb',
    '20': 'flagged empty cell, no adjacent bombs',
    '21-28': 'flagged empty cell with n adjacent bombs',
    '29': 'flagged bomb',
} */

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

const addBombs = (grid, cols, rows) => {
    const newGrid = copyGrid(grid)
    let bombCount = 0
    do {
        const [x, y] = getRandomCell(cols, rows)
        if (getValueOfCell(newGrid, x, y) === 0) {
            newGrid[x][y] = 9
            bombCount += 1
        }
    } while (bombCount < targetBombCount)
    return newGrid
}

const oneUpNeighbours = (grid, x, y) => {
    const newGrid = copyGrid(grid)
    const neighbours = [
        ...getStraightNeighbours(x, y),
        ...getDiagonalNeighbours(x, y),
    ]
    neighbours.forEach(([nX, nY]) => {
        if (newGrid[nX]) {
            if (newGrid[nX][nY] !== undefined) {
                if (newGrid[nX][nY] !== 9) {
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
        if (cell === 9) { newGrid = oneUpNeighbours(newGrid, colIndex, rowIndex) }
    }))
    return newGrid
}

const setupBoard = () => {
    const grid = createBoard(gridCols, gridRows)
    const riggedGrid = addBombs(grid, gridCols, gridRows, gridBombs)
    return addNeighbourCount(riggedGrid)
}

const updateBoard = (grid, changedCells) => {
    const newGrid = copyGrid(grid)

    changedCells.forEach(({ x, y, cell }) => {
        newGrid[x][y] = cell
    })

    return newGrid
}

const findConnectedEmptyCells = (grid, x, y) => {
    const newGrid = copyGrid(grid)
    const markedCells = [[x, y]]

    /*
     * loop while there are remaining cells to check
     */
    while (markedCells.length) {
        let reachLeft = false
        let reachRight = false

        const current = markedCells.shift()
        let [curX, curY] = current

        /*
         * move top until you hit an obstacle
         */
        while (getValueOfCell(newGrid, curX, curY - 1) === 0) {
            curY += -1
        }

        /*
         * move down until you hit an obstacle and mark neighbours
         */
        while (getValueOfCell(newGrid, curX, curY) === 0) {
            newGrid[curX][curY] += 10
            if (!reachLeft) {
                if (curX - 1 >= 0 && newGrid[curX - 1][curY] === 0) {
                    markedCells.push([curX - 1, curY])
                    reachLeft = true
                }
            } else { reachLeft = false }

            if (!reachRight) {
                if (curX + 1 < newGrid.length && newGrid[curX + 1][curY] === 0) {
                    markedCells.push([curX + 1, curY])
                    reachRight = true
                }
            } else { reachRight = false }
            curY += 1
        }
    }
    return newGrid
}

const allHiddenCleared = (grid) => {
    let hiddenEmpty = 0
    grid.forEach((col) => col.forEach((cell) => {
        if (cell < 9 || (cell > 19 && cell < 29)) { hiddenEmpty += 1 }
    }))

    return hiddenEmpty === 0
}

const gridPainter = (grid) => grid
    .map((col, colIndex) => col
        .map(
            (cell, rowIndex) => ({ cell, x: colIndex, y: rowIndex })
        ))
    .flat()

const GridTest = () => {
    const [win, setWin] = useState(false)
    const [lose, setLose] = useState(false)
    const [turn, setTurn] = useState(0)
    const [cheating, setCheating] = useState(0)
    const [board, setBoard] = useState(setupBoard())

    const updateCell = (changedCell) => {
        if (win || lose) { return false }
        let newBoard
        setTurn(turn + 1)
        if (changedCell.cell === 10) {
            newBoard = findConnectedEmptyCells(board, changedCell.x, changedCell.y)
        } else {
            newBoard = updateBoard(board, [changedCell])
        }

        setBoard(newBoard)

        if (changedCell.cell === 19) {
            setLose(true)
        }
        if (allHiddenCleared(newBoard)) {
            setWin(true)
        }
        return true
    }

    return (
        <>
            <Text>{`Bombs: ${targetBombCount} // Turn: ${turn}`}</Text>
            <View style={{
                ...styles.gridBackground,
                borderColor: cheating > 0 ? 'magenta' : '#000',
            }}
            >
                {gridPainter(board).map(({
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
                        cheat={!!(cheating % 2)}
                        updateCell={(changedCell) => updateCell(changedCell)}
                    />
                ))}
            </View>
            <TextButton
                title="🕵️ Cheat this 🕵️"
                type="default"
                onPress={() => setCheating(cheating + 1)}
            />
            {lose ? (<Text>YOU LOST!</Text>) : null}
            {win ? (<Text>{`YOU FOUND ALL THE BOMBS!${cheating > 0 ? ' YOU CHEAT!' : ''}`}</Text>) : null}
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
    },
})

export default GridTest
