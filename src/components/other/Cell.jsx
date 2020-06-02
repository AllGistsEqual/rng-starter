import React from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'

const Cell = (props) => {
    const {
        cell,
        x,
        y,
        width,
        height,
    } = props

    return (
        <View
            style={{
                position: 'absolute',
                borderWidth: 1,
                borderColor: '#999',
                justifyContent: 'center',
                alignItems: 'center',
                width,
                height,
                left: width * x,
                top: height * y,
                backgroundColor: cell ? '#666' : '#ccc',
            }}
        >
            <Text>{cell}</Text>
        </View>
    )
}

Cell.propTypes = {
    cell: PropTypes.number.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
}

export default Cell
