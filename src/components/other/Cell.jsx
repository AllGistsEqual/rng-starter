import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types'

const Cell = (props) => {
    const {
        cell,
        x,
        y,
        width,
        height,
    } = props

    let cellContent = ''
    let cellStyle = ''

    switch (cell) {
        case (10): {
            cellContent = '💣'
            cellStyle = 'bomb'
            break
        }

        case (0): {
            cellContent = ''
            cellStyle = 'empty'
            break
        }

        default: {
            cellContent = cell
            cellStyle = 'counter'
        }
    }

    return (
        <View
            style={{
                ...styles.cellDefault,
                width,
                height,
                left: width * x,
                top: height * y,
                ...styles[`${cellStyle}Background`],
            }}
        >
            <Text style={styles[`${cellStyle}Text`]}>
                {cellContent}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cellDefault: {
        position: 'absolute',
        borderWidth: 1,
        borderColor: '#999',
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {},
    emptyBackground: {
        backgroundColor: '#ddd',
    },
    counterText: {
        fontSize: 18,
    },
    counterBackground: {
        backgroundColor: '#bbb',
    },
    bombText: {},
    bombBackground: {
        backgroundColor: 'red',
    },
})

Cell.propTypes = {
    cell: PropTypes.number.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
}

export default Cell
