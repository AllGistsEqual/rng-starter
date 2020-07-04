import React from 'react'
import PropTypes from 'prop-types'
import {
    StyleSheet,
    View,
} from 'react-native'
import DraggableBox from './DraggableBox'
import {
    Source,
    Splitter,
    Merger,
    Mixer,
    Extractor,
    Imbuer,
    Line,
} from './devices'
import { deviceData } from '../../data/devices'

const deviceList = [
    {
        id: deviceData.device_source.id,
        device: <Source orientation={1} />,
        orientation: 1, // [1,2,3,4]
        count: '2',
    },
    {
        id: deviceData.device_splitter.id,
        device: <Splitter orientation={1} />,
        orientation: 1, // [1,2,3,4]
        count: '1',
    },
    {
        id: deviceData.device_merger.id,
        device: <Merger orientation={1} />,
        orientation: 1, // [1,2,3,4]
        count: '1',
    },
    {
        id: deviceData.device_mixer.id,
        device: <Mixer orientation={1} />,
        orientation: 1, // [1,2,3,4]
        count: '1',
    },
    {
        id: deviceData.device_extractor.id,
        device: <Extractor orientation={1} />,
        orientation: 1, // [1,2,3,4]
        count: '3',
    },
    {
        id: deviceData.device_imbuer.id,
        device: <Imbuer orientation={1} />,
        orientation: 1, // [1,2,3,4]
        count: '1',
    },
]
const lineList = [
    {
        id: deviceData.device_line.id,
        device: <Line orientation={1} />,
        orientation: 1, // [1,2] // Large Straight
        count: '-1',
    },
    {
        id: deviceData.device_line.id,
        device: <Line orientation={1} />,
        orientation: 3, // [3,4,5,6]  // Large Corner
        count: '-1',
    },
    {
        id: deviceData.device_line.id,
        device: <Line orientation={1} />,
        orientation: 9, // [9,10] // Double Straight
        count: '-1',
    },
    {
        id: deviceData.device_line.id,
        device: <Line orientation={1} />,
        orientation: 11, // [11,12,13,14] // Double Corner
        count: '-1',
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
        <>
            <View style={styles.container}>
                <View style={styles.background}>
                    {deviceList.map(({ id, device, orientation }, index) => (
                        <DraggableBox
                            key={id}
                            id={`${id}_${index}`}
                            device={id}
                            orientation={orientation}
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
                    {lineList.map(({ id, orientation }, index) => (
                        <DraggableBox
                            key={`${id}_${orientation}`}
                            id={`${id}_${index}`}
                            device={id}
                            orientation={orientation}
                            width={tileWidth}
                            height={tileHeight}
                            handleDragStart={handleDragStart}
                            handleDrag={handleDrag}
                            handleDrop={handleDrop}
                            mob={mob}
                        >
                            <Line orientation={orientation} />
                        </DraggableBox>
                    ))}
                </View>
            </View>
        </>
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
    container: {
        resizeMode: 'cover',
        justifyContent: 'center',
        backgroundColor: '#fff',
        position: 'relative',
        borderWidth: 2,
        width: '100%',
        margin: 20,
        paddingTop: 5,
        paddingBottom: 5,
    },
    background: {
        resizeMode: 'cover',
        justifyContent: 'center',
        position: 'relative',
        width: '100%',
        marginTop: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
})

export default GtmToolbox
