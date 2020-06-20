export const createBoard = (cols, rows, content = 0) => {
    const board = []
    for (let col = 0; col < cols; col++) {
        board.push(Array(rows).fill(content))
    }
    return board
}

export const gridPainter = (grid) => grid
    .map((col, colIndex) => col
        .map(
            (cell, rowIndex) => ({ cell, x: colIndex, y: rowIndex })
        ))
    .flat()

export const copyGrid = (grid) => grid.map((col) => [...col])

export const getValueOfCell = (grid, x, y) => grid[x][y]

export const updateBoard = (grid, changedCells) => {
    const newGrid = copyGrid(grid)

    changedCells.forEach(({ x, y, cell }) => {
        newGrid[x][y] = cell
    })

    return newGrid
}

export const getRandomCell = (colLength, rowLength) => ([
    Math.floor(Math.random() * Math.floor(colLength)),
    Math.floor(Math.random() * Math.floor(rowLength)),
])

export const getStraightNeighbours = (x, y) => [
    [x + 0, y - 1],
    [x + 0, y + 1],
    [x - 1, y],
    [x + 1, y],
]
export const getDiagonalNeighbours = (x, y) => [
    [x - 1, y - 1],
    [x + 1, y - 1],
    [x - 1, y + 1],
    [x + 1, y + 1],
]
