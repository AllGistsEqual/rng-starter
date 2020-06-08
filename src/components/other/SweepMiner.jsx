import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'
import {
    createBoard,
    gridPainter,
    copyGrid,
    getValueOfCell,
    updateBoard,
    getRandomCell,
    getStraightNeighbours,
    getDiagonalNeighbours,
} from './Grid'
import Cell from './Cell'

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

const cellWidth = 50
const cellHeight = 50
const borderWidth = 1

const setupBoard = (cols, rows, bombs) => {
    const grid = createBoard(cols, rows)
    const riggedGrid = addBombs(grid, cols, rows, bombs)
    return addNeighbourCount(riggedGrid)
}

const addBombs = (grid, cols, rows, bombs) => {
    const newGrid = copyGrid(grid)
    let bombCount = 0
    do {
        const [x, y] = getRandomCell(cols, rows)
        if (getValueOfCell(newGrid, x, y) === 0) {
            newGrid[x][y] = 9
            bombCount += 1
        }
    } while (bombCount < bombs)
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

const checkAdjacentCells = (grid, cells) => {
    const newGrid = copyGrid(grid);
    [...cells].forEach((entry) => {
        const [x, y] = entry.split(',')
        if (
            y >= 0
            && x >= 0
            && y < newGrid[0].length
            && x < newGrid.length
            && newGrid[x][y] < 9
            && newGrid[x][y] !== 0) {
            newGrid[x][y] += 10
        }
    })
    return newGrid
}

const findConnectedEmptyCells = (grid, x, y) => {
    const newGrid = copyGrid(grid)
    const markedCells = [[x, y]]
    const adjacentCells = new Set()

    /*
     * loop while there are remaining cells to check
     */
    while (markedCells.length) {
        let reachLeft = true
        let reachRight = true

        const current = markedCells.shift()
        let [curX, curY] = current // eslint-disable-line prefer-const

        /*
         * move top until you hit an obstacle
         */
        while (getValueOfCell(newGrid, curX, curY - 1) === 0) {
            curY += -1
        }
        adjacentCells
            .add(`${curX - 1},${curY - 1}`)
            .add(`${curX},${curY - 1}`)
            .add(`${curX + 1},${curY - 1}`)

        /*
         * move down until you hit an obstacle and mark neighbours
         */
        while (getValueOfCell(newGrid, curX, curY) === 0) {
            newGrid[curX][curY] += 10
            if (curX - 1 >= 0) {
                const leftAdjacent = newGrid[curX - 1][curY]
                // check left side for hidden numbers
                if (leftAdjacent < 9 && leftAdjacent !== 0) {
                    adjacentCells.add(`${curX - 1},${curY}`)
                }
                // check left side for empty cells for new column
                if (reachLeft && leftAdjacent === 0) {
                    markedCells.push([curX - 1, curY])
                    reachLeft = false
                } else { reachLeft = true }
            }

            if (curX + 1 < newGrid.length) {
                const rightAdjacent = newGrid[curX + 1][curY]
                // check right side for hidden numbers
                if (rightAdjacent < 9 && rightAdjacent !== 0) {
                    adjacentCells.add(`${curX + 1},${curY}`)
                }
                // check left side for empty cells for new column
                if (reachRight && rightAdjacent === 0) {
                    markedCells.push([curX + 1, curY])
                    reachRight = false
                } else { reachRight = true }
            }
            curY += 1
        }
        adjacentCells
            .add(`${curX - 1},${curY}`)
            .add(`${curX},${curY}`)
            .add(`${curX + 1},${curY}`)
    }
    return checkAdjacentCells(newGrid, adjacentCells)
}

const allHiddenCleared = (grid) => {
    let hiddenEmpty = 0
    grid.forEach((col) => col.forEach((cell) => {
        if (cell < 9 || (cell > 19 && cell < 29)) { hiddenEmpty += 1 }
    }))

    return hiddenEmpty === 0
}

const SweepMiner = ({
    gridCols,
    gridRows,
    bombs,
    cheating,
}) => {
    const [board, setBoard] = useState(setupBoard(gridCols, gridRows, bombs))
    const [win, setWin] = useState(false)
    const [lose, setLose] = useState(false)
    const [turn, setTurn] = useState(0)

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
            <Text>{`Bombs: ${bombs} // Turn: ${turn}`}</Text>
            <View style={{
                ...styles.gridBackground,
                borderColor: cheating > 0 ? 'magenta' : '#000',
                width: gridCols * cellWidth + borderWidth * 2,
                height: gridRows * cellHeight + borderWidth * 2,
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

            {lose ? (<Text>YOU LOST!</Text>) : null}

            {win
                ? (
                    <Text>
                        {`YOU FOUND ALL THE BOMBS!${cheating > 0 ? ' YOU CHEAT!' : ''}`}
                    </Text>
                )
                : null}
        </>
    )
}

SweepMiner.propTypes = {
    gridCols: PropTypes.number.isRequired,
    gridRows: PropTypes.number.isRequired,
    bombs: PropTypes.number.isRequired,
    cheating: PropTypes.number.isRequired,
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

export default SweepMiner
