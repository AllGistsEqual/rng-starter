import React, { useState, useEffect } from 'react'
import {
    TouchableWithoutFeedback,
    StyleSheet,
    Text,
    View,
} from 'react-native'
import PropTypes from 'prop-types'
import DEVICES, { getDeviceByKey, getDeviceFromInt } from '../../data/devices'

const initialTile = {
    id: 'empty',
    label: '',
    color: '#ccc',
}

const Tile = (props) => {
    const {
        tile,
        x,
        y,
        hover,
        width,
        height,
    } = props

    const [tileContent, setTileContent] = useState(initialTile)

    useEffect(() => {
        const { key } = getDeviceFromInt(tile)
        const {
            id,
            asset,
            color,
        } = getDeviceByKey(key)
        setTileContent({
            id,
            label: asset,
            color,
        })
    }, [tile])

    function handlePress() {}

    function handleLongPress() {}

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
                <View style={[
                    styles.tileDefault,
                    {
                        backgroundColor: (hover && tileContent.id === 'empty')
                            ? 'green'
                            : tileContent.color,
                    },
                ]}
                >
                    <Text>{tileContent.label}</Text>
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
    hover: PropTypes.bool.isRequired,
}

export default Tile
