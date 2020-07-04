import React, { useState, useEffect } from 'react'
import {
    TouchableWithoutFeedback,
    StyleSheet,
    View,
} from 'react-native'
import PropTypes from 'prop-types'
import { deviceData, getDeviceByKey, getDeviceFromInt } from '../../data/devices'
import {
    Source,
    Splitter,
    Merger,
    Mixer,
    Extractor,
    Imbuer,
    Line,
} from './devices'

const initialTile = {
    id: 'empty',
    label: undefined,
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
        const { key, orientation } = getDeviceFromInt(tile)
        const {
            id,
        } = getDeviceByKey(key)
        let label
        switch (id) {
            case (deviceData.device_source.id): {
                label = <Source orientation={orientation} />
                break
            }
            case (deviceData.device_splitter.id): {
                label = <Splitter orientation={orientation} />
                break
            }
            case (deviceData.device_merger.id): {
                label = <Merger orientation={orientation} />
                break
            }
            case (deviceData.device_mixer.id): {
                label = <Mixer orientation={orientation} />
                break
            }
            case (deviceData.device_extractor.id): {
                label = <Extractor orientation={orientation} />
                break
            }
            case (deviceData.device_imbuer.id): {
                label = <Imbuer orientation={orientation} />
                break
            }
            case (deviceData.device_line.id): {
                label = <Line orientation={orientation} />
                break
            }
            default: { label = undefined }
        }
        setTileContent({
            id,
            label,
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
                            : 'transparent',
                    },
                ]}
                >
                    {tileContent.label}
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
