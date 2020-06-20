import React from 'react'
import PropTypes from 'prop-types'
import {
    StyleSheet,
    View,
} from 'react-native'
import DraggableBox from './DraggableBox'

const deviceList = [
    { label: '[S]', color: '#f62dff', id: 'tb_drag_source' },
    { label: '[M]', color: '#1b5e7a', id: 'tb_drag_mixer' },
    { label: '[X]', color: '#24ffc0', id: 'tb_drag_exporter' },
    { label: '[E]', color: '#ffbb15', id: 'tb_drag_equaliser' },
]

const GtmToolbox = ({
    cellWidth,
    cellHeight,
    handleDrag,
    handleDrop,
    mob,
}) => (
    <View style={styles.background}>
        {deviceList.map(({ label, color, id }) => (
            <DraggableBox
                key={id}
                id={id}
                label={label}
                color={color}
                width={cellWidth}
                height={cellHeight}
                handleDrag={handleDrag}
                handleDrop={handleDrop}
                mob={mob}
            />
        ))}
    </View>
)
GtmToolbox.propTypes = {
    cellWidth: PropTypes.number.isRequired,
    cellHeight: PropTypes.number.isRequired,
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
