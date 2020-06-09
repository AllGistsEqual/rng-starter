import React from 'react'
import PropTypes from 'prop-types'
import {
    StyleSheet,
    View,
} from 'react-native'
import DraggableView from './DraggableView'

const deviceList = [
    { label: '[S]', color: '#f62dff' },
    { label: '[M]', color: '#1b5e7a' },
    { label: '[X]', color: '#24ffc0' },
    { label: '[E]', color: '#ffbb15' },
]

const GtmToolbox = ({
    cellWidth,
    cellHeight,
}) => (
    <View style={styles.background}>
        {deviceList.map(({ label, color }) => (
            <DraggableView
                key={label}
                label={label}
                color={color}
                width={cellWidth}
                height={cellHeight}
            />
        ))}
    </View>
)

GtmToolbox.propTypes = {
    cellWidth: PropTypes.number.isRequired,
    cellHeight: PropTypes.number.isRequired,
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
