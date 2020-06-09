import React, { useState, useEffect } from 'react'
import {
    TouchableWithoutFeedback,
    StyleSheet,
    Text,
    View,
} from 'react-native'
import PropTypes from 'prop-types'

const Tile = (props) => {
    const {
        tile,
        x,
        y,
        width,
        height,
    } = props

    const [value, setValue] = useState(tile)
    const [tileContent, setTileContent] = useState('')

    useEffect(() => {
        // Update the document title using the browser API
        switch (value) {
            case (1): { setTileContent(''); break }

            default: {
                setTileContent('')
            }
        }
    }, [value])

    function handlePress() {
        // console.log('press: ', x, y)
    }

    function handleLongPress() {
        // console.log('long press: ', x, y)
    }

    const tileFlexStyles = {
        width,
        height,
        left: width * x,
        top: height * y,
    }

    return (
        <View style={{
            ...styles.tileWrapper,
            ...tileFlexStyles,
        }}
        >
            <TouchableWithoutFeedback
                style={{ width: '100%', height: '100%' }}
                onPress={() => handlePress()}
                onLongPress={() => handleLongPress()}
            >
                <View style={styles.tileDefault}>
                    <Text>{tileContent}</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    tileWrapper: {
        position: 'absolute',
        borderWidth: 1,
        borderColor: '#aaa',
    },
    tileDefault: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
})

Tile.propTypes = {
    tile: PropTypes.number.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
}

export default Tile
