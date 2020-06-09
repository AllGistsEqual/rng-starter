import React, { useRef, useState, useEffect } from 'react'
import {
    Animated,
    View,
    Text,
    StyleSheet,
    PanResponder,
} from 'react-native'
import PropTypes from 'prop-types'

const DraggableView = ({
    width,
    height,
    label,
    color,
}) => {
    const pan = useRef(new Animated.ValueXY()).current
    const [gestureValue, setGestureValue] = useState({ x: 0, y: 0 })
    const [dragging, setDragging] = useState(false)
    const [dropable, setDropable] = useState(false)
    const [stateStyle, setStateStyle] = useState({})

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onStartShouldSetPanResponderCapture: () => true,
            onMoveShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponderCapture: () => true,
            onPanResponderTerminationRequest: () => true,
            onPanResponderGrant: () => {
                setDragging(true)
                pan.setOffset({
                    x: pan.x._value, // eslint-disable-line no-underscore-dangle
                    y: pan.y._value, // eslint-disable-line no-underscore-dangle
                })
            },
            onPanResponderMove: (evt, gestureState) => {
                if (dragging === false) { setDropable(true) }
                setGestureValue({
                    x: gestureState.dx,
                    y: gestureState.dy,
                })
            },
            onPanResponderRelease: () => {
                setDragging(false)
                setDropable(false)
                pan.flattenOffset()
                setGestureValue({
                    x: 0,
                    y: 0,
                })
            },
        })
    ).current

    useEffect(() => {
        const draggingStyles = dragging ? styles.deviceDragging : {}
        const dropableStyles = dropable ? styles.deviceDropable : {}
        setStateStyle({
            ...draggingStyles,
            ...dropableStyles,
        })
    }, [dragging])

    return (
        <Animated.View
            style={{
                transform: [{ translateX: gestureValue.x }, { translateY: gestureValue.y }],
            }}
            {...panResponder.panHandlers} // eslint-disable-line react/jsx-props-no-spreading
        >
            <View style={{
                width,
                height,
                backgroundColor: color,
                ...styles.device,
                ...styles.deviceSource,
                ...stateStyle,
            }}
            >
                <Text style={styles.deviceLabel}>
                    {label}
                </Text>
            </View>
        </Animated.View>
    )
}

DraggableView.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
    device: {
        borderWidth: 2,
        borderColor: '#000',
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    deviceDragging: {
        borderWidth: 5,
        borderColor: '#e91e63',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    deviceDropable: {
        borderWidth: 2,
        borderColor: '#008a12',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
    },
    deviceLabel: {
        fontSize: 24,
    },
    deviceSource: {
        position: 'relative',
        borderWidth: 2,
    },
})

export default DraggableView
