import React, { useState, useEffect } from 'react'
import {
    TouchableWithoutFeedback,
    StyleSheet,
    Text,
    View,
} from 'react-native'
import PropTypes from 'prop-types'

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
        width,
        height,
        hover,
    } = props

    const [tileContent, setTileContent] = useState(initialTile)

    useEffect(() => {
        // Update the document title using the browser API
        switch (tile) {
            case (1): {
                setTileContent({
                    id: 'tb_board_source',
                    label: '[S]',
                    color: '#f62dff',
                })
                break
            }
            case (2): {
                setTileContent({
                    id: 'tb_board_mixer',
                    label: '[M]',
                    color: '#1b5e7a',
                })
                break
            }
            case (3): {
                setTileContent({
                    id: 'tb_board_exporter',
                    label: '[X]',
                    color: '#24ffc0',
                })
                break
            }
            case (4): {
                setTileContent({
                    id: 'tb_board_equaliser',
                    label: '[E]',
                    color: '#ffbb15',
                })
                break
            }

            default: {
                setTileContent(initialTile)
            }
        }
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
