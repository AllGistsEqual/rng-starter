export const getMaskSums = (masks) => {
    let sum = 0
    return masks // take the list of all bitwise flag sizes
        .slice() // shallow copy
        .reverse() // start with the last value
        .map((flag) => sum += Object.values(flag)[0]) // ad the sum of all current flags to array
        .reverse() // reverse again to get the original order
}

export const getIntFromValues = (values, maskSums) => (
    values.reduce((result, value, index) => (result | value << maskSums[index + 1] || 0), 0)
)

export const getValuesFromInt = (int, masks, maskSums) => {
    const { length } = masks
    const result = {}

    for (let index = 0; index < length; index++) {
        const [key] = Object.entries(masks[index])[0]
        const [uselessKey, nextValue] = Object.entries(masks[index])[0]
        result[key] = int >> (maskSums[index + 1] || 0) & ((1 << (nextValue)) - 1)
    }

    return result
}

/*

//  0  =>    1
//  1  =>    2
//  2  =>    4
//  3  =>    8
//  4  =>   16
//  5  =>   32
//  6  =>   64
//  7  =>  128
//  8  =>  256
//  9  =>  512
// 10  => 1024

const values = [
    2,  // type            or T
    61, // key             or K
    3,  // orientation     or O
    28, // io              or I
]

const bits = [
    { 'type' : 4 },        // contains 2
    { 'key' : 7 },         // contains 61
    { 'orientation' : 3 }, // contains 3
    { 'io' : 6 },          // contains 28
]

const bitSums = getMaskSums(bits)

// #############################################
// #  TTTT (4) KKKKKKK (7) OOO (3) IIIIII (6)  #
// #############################################

// tests for the code above

const packedByHand = (values[0] << 16) | (values[1] << 9) | (values[2] << 6) | (values[3])
const packedValues = getIntFromValues(values, bitSums)

console.log(packedByHand) // should be 162524 //
console.log(packedValues) // should be 162524 //

// _________________ with numbers _________________
// TTTT (4) >>>>>>> (7) >>> (3) >>>>>> (6) // type        =  2
console.log(packedValues >> 16)

// ____ (4) KKKKKKK (7) >>> (3) >>>>>> (6) // key         = 61
console.log(packedValues >> 9 & ((1 << 7) - 1))

// ____ (4) _______ (7) OOO (3) >>>>>> (6) // orientation =  3
console.log(packedValues >> 6 & ((1 << 3) - 1))

// ____ (4) _______ (7) ___ (3) IIIIII (6) // io          = 28
console.log(packedValues >> 0 & ((1 << 6) - 4))

console.log(getValuesFromInt(packedValues, bits, bitSums))

const x1 = 6 // bits
const io = 28 // value

const x2 = 3 // bits
const orientation = 3 // value

const x3 = 7 // bits
const key = 61 // value

const x4 = 4 // bits
const type = 2 // value

const t1 = x1 // total
const t2 = t1 + x2 // total
const t3 = t2 + x3 // total
const t4 = t3 + x4 // total (not needed as last)

// #############################################
// #  TTTT (4) KKKKKKK (7) OOO (3) IIIIII (6)  #
// #############################################

console.log(x1, x2, x3, x4)
console.log(t1, t2, t3, t4)

const packed = (type << t3) | (key << t2) | (orientation << t1) | (io)
const packed2 = (type << 17) | (key << 10) | (orientation << 7) | (io)
console.log(packed)
console.log(packed2)
// __________________ with const __________________
console.log(packed >> t3)                   //
console.log(packed >> t2 & ((1 << x3) - 1)) //
console.log(packed >> t1 & ((1 << x2) - 1)) //
console.log(packed       & ((1 << x1) - 1)) //
// _________________ with numbers _________________
console.log(packed >> 16)                   //
console.log(packed >> 9  & ((1 << 7) - 1))  //
console.log(packed >> 67 & ((1 << 3) - 1))  //
console.log(packed       & ((1 << 6) - 1))  //

const testPack = (type << t3) | (key << t2) | (orientation << t1) | (io)
console.log(testPack)

*/

