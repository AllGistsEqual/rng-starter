import React from 'react'
import {
    TouchableWithoutFeedback,
    StyleSheet,
    Text,
    View,
} from 'react-native'
import PropTypes from 'prop-types'

const Cell = (props) => {
    const {
        cell,
        x,
        y,
        width,
        height,
        cheat,
        updateCell,
    } = props

    let cellContent
    let cellStyle
    let cellColour = '#000'

    const colourMapping = [
        /* 0 */ 'magenta',
        /* 1 */ 'blue',
        /* 2 */ 'green',
        /* 3 */ 'red',
        /* 4 */ 'purple',
        /* 5 */ 'maroon',
        /* 6 */ 'turquoise',
        /* 7 */ 'black',
        /* 8 */ 'gray',
    ]

    const visible = cell > 9 && cell < 20
    const flagged = cell > 19

    switch (cell) {
        case (9):
        case (19):
        case (29): {
            cellContent = '💣'
            cellStyle = 'bomb'
            break
        }

        case (0):
        case (10):
        case (20): {
            cellContent = ''
            cellStyle = 'empty'
            break
        }

        default: {
            cellContent = cell % 10
            cellStyle = 'counter'
            cellColour = colourMapping[cell % 10]
        }
    }

    const changeCellState = (stateValue) => updateCell({
        x,
        y,
        cell: cell + stateValue,
    })

    function handlePress() {
        if (cell < 10) { changeCellState(10) }
    }

    function handleLongPress() {
        if (cell < 10) { changeCellState(20) }
        if (cell > 19) { changeCellState(-20) }
    }

    const cellFlexStyles = {
        width,
        height,
        left: width * x,
        top: height * y,
    }

    return (
        <View style={{
            ...styles.cellWrapper,
            ...cellFlexStyles,
        }}
        >
            <TouchableWithoutFeedback
                style={{ width: '100%', height: '100%' }}
                onPress={() => handlePress()}
                onLongPress={() => handleLongPress()}
            >
                { visible
                    ? (
                        <View style={{
                            ...styles.cellDefault,
                            ...styles[`${cellStyle}Background`],
                        }}
                        >
                            <Text style={{
                                ...styles[`${cellStyle}Text`],
                                color: cellColour,
                            }}
                            >
                                {cellContent}
                            </Text>
                        </View>
                    )
                    : (
                        <View style={{
                            ...styles.cellDefault,
                            ...styles.cellHidden,
                        }}
                        >
                            <Text>{flagged ? '🚩' : ''}</Text>
                            { cheat ? (<Text>{cellContent}</Text>) : null }
                        </View>
                    )}
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    cellWrapper: {
        position: 'absolute',
        borderWidth: 1,
        borderColor: '#666',
    },
    cellDefault: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cellHidden: {
        borderWidth: 6,
        backgroundColor: '#c0c0c0',
        borderTopColor: '#eee',
        borderRightColor: '#888',
        borderBottomColor: '#888',
        borderLeftColor: '#eee',
    },
    emptyBackground: {
        backgroundColor: '#ccc',
    },
    emptyText: {},
    counterBackground: {
        backgroundColor: '#ccc',
    },
    counterText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    bombBackground: {
        backgroundColor: 'red',
    },
    bombText: {
        fontSize: 24,
    },
})

Cell.propTypes = {
    cell: PropTypes.number.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    cheat: PropTypes.bool.isRequired,
    updateCell: PropTypes.func.isRequired,
}

export default Cell
