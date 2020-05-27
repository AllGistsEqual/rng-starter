export default function semVerComp(x, y) {
    const splitX = x.split('.')
    const splitY = y.split('.')
    for (let i = 0; i < 3; i++) {
        const numX = Number(splitX[i])
        const numY = Number(splitY[i])
        if (numX > numY) { return 1 }
        if (numY > numX) { return -1 }
        if (!Number.isNaN(numX) && Number.isNaN(numY) && numX === 0) { return 0 }
        if (!Number.isNaN(numX) && Number.isNaN(numY)) { return 1 }
        if (Number.isNaN(numX) && !Number.isNaN(numY) && numY === 0) { return 0 }
        if (Number.isNaN(numX) && !Number.isNaN(numY)) { return -1 }
    }
    return 0
}

/*
const tests = [
    ['0', '1', -1],
    ['0', '0', 0],
    ['1', '1', 0],
    ['1', '0', 1],
    ['1', '1.0', 0],
    ['1.0', '1', 0],
    ['1.0', '1.0', 0],

    ['0.0', '1', -1],
    ['0.0', '0', 0],
    ['1.0', '1', 0],
    ['1.0', '0', 1],
    ['1.0', '1.0', 0],
    ['1.0.0', '1', 0],
    ['1.0.0', '1.0', 0],

    ['0', '1.0', -1],
    ['0', '0.0', 0],
    ['1', '1.0', 0],
    ['1', '0.0', 1],
    ['1', '1.0.0', 0],
    ['1.0', '1.0', 0],
    ['1.0', '1.0.0', 0],

    ['1.0', '1.1', -1],
    ['1.0', '1.0', 0],
    ['1.1', '1.1', 0],
    ['1.1', '1.0', 1],
    ['1.1', '1.1.0', 0],
    ['1.1.0', '1.1', 0],
    ['1.1.0', '1.1.0', 0],

    ['1.1.8', '1.1.8alpha', 1], //
    ['1.1.8alpha', '1.1.8', -1],
    ['1.1.8alpha', '1.1.8alpha', 0],
]

tests.map((test) => console.log(
    `[${semVerComp(test[0], test[1]) === test[2]}] expected: ${test[2]} // ${test[0]} / ${test[1]}`
))
*/
