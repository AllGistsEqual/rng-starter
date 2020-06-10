import React, { useRef, useState, useEffect } from 'react'
import {
    Animated,
    View,
    Text,
    StyleSheet,
    PanResponder,
} from 'react-native'
import PropTypes from 'prop-types'

const dragHandleOffset = { x: 0, y: 42 }

const DraggableView = ({
    width,
    height,
    label,
    color,
    handleDrag,
    handleDrop,
}) => {
    const pan = useRef(new Animated.ValueXY()).current
    const [gestureValue, setGestureValue] = useState({ x: 0, y: 0 })
    const [dragging, setDragging] = useState(false)
    const [droppable, setDroppable] = useState(false)
    const [stateStyle, setStateStyle] = useState({})

    const panGrant = () => {
        setDragging(true)
        pan.setOffset({
            x: pan.x._value, // eslint-disable-line no-underscore-dangle
            y: pan.y._value - dragHandleOffset.y, // eslint-disable-line no-underscore-dangle
        })
    }

    const panMove = (evt, gestureState) => {
        handleDrag({
            x: gestureState.moveX,
            y: gestureState.moveY,
        })
        if (dragging === false) { setDroppable(true) }
        setGestureValue({
            x: gestureState.dx,
            y: gestureState.dy - dragHandleOffset.y,
        })
    }

    const panRelease = (evt, gestureState) => {
        handleDrop({
            x: gestureState.moveX,
            y: gestureState.moveY,
        })
        setDragging(false)
        setDroppable(false)
        pan.flattenOffset()
        setGestureValue({
            x: 0,
            y: 0,
        })
    }

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onStartShouldSetPanResponderCapture: () => true,
            onMoveShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponderCapture: () => true,
            onPanResponderTerminationRequest: () => true,
            onPanResponderGrant: () => panGrant(),
            onPanResponderMove: (evt, gestureState) => panMove(evt, gestureState),
            onPanResponderRelease: (evt, gestureState) => panRelease(evt, gestureState),
        })
    ).current

    useEffect(() => {
        const draggingStyles = dragging ? styles.deviceDragging : {}
        const droppableStyles = droppable ? styles.deviceDroppable : {}
        setStateStyle({
            ...draggingStyles,
            ...droppableStyles,
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
    handleDrag: PropTypes.func.isRequired,
    handleDrop: PropTypes.func.isRequired,
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
    deviceDroppable: {
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
