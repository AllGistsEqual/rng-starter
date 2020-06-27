import React from 'react'
import PropTypes from 'prop-types'
import {
    StyleSheet,
    View,
} from 'react-native'
import DraggableBox from './DraggableBox'
import {
    Source,
    Mixer,
    Extractor,
    Line,
} from './devices'

const deviceList = [
    {
        id: 'device_source',
        device: <Source />,
        count: '2',
    },
    {
        id: 'device_mixer',
        device: <Mixer />,
        count: '1',
    },
    {
        id: 'device_extractor',
        device: <Extractor />,
        count: '3',
    },
    {
        id: 'device_line',
        device: <Line />,
        count: '23',
    },
]

const GtmToolbox = ({
    config,
    handleDragStart,
    handleDrag,
    handleDrop,
    mob,
}) => {
    const {
        tileWidth,
        tileHeight,
    } = config

    return (
        <View style={styles.background}>
            {deviceList.map(({ id, device }) => (
                <DraggableBox
                    key={id}
                    id={id}
                    width={tileWidth}
                    height={tileHeight}
                    handleDragStart={handleDragStart}
                    handleDrag={handleDrag}
                    handleDrop={handleDrop}
                    mob={mob}
                >
                    {device}
                </DraggableBox>
            ))}
        </View>
    )
}

GtmToolbox.propTypes = {
    config: PropTypes.object.isRequired,
    handleDragStart: PropTypes.func.isRequired,
    handleDrag: PropTypes.func.isRequired,
    handleDrop: PropTypes.func.isRequired,
    mob: PropTypes.object.isRequired,
}

const styles = StyleSheet.create({
    background: {
        resizeMode: 'cover',
        justifyContent: 'center',
        backgroundColor: '#fff',
        position: 'relative',
        borderWidth: 2,
        width: '100%',
        height: 120,
        margin: 10,
        flexDirection: 'row',
    },
})

export default GtmToolbox
