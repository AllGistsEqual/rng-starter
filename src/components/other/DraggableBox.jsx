import React, { Component } from 'react'
import { Animated, StyleSheet, Text } from 'react-native'
import { PanGestureHandler, State } from 'react-native-gesture-handler'
import PropTypes from 'prop-types'

export default class DraggableBox extends Component {
    constructor(props) {
        super(props)
        this.translateX = new Animated.Value(0)
        this.translateY = new Animated.Value(0)
        this.lastOffset = { x: 0, y: 0 }
        this.onGestureEvent = Animated.event(
            [
                {
                    nativeEvent: {
                        translationX: this.translateX,
                        translationY: this.translateY,
                    },
                },
            ],
            {
                listener: (event) => {
                    props.handleDrag(props.id, event)
                },
            },
            {
                useNativeDriver: true,
            },
        )
    }

    onHandlerStateChange = (event) => {
        if (event.nativeEvent.oldState === State.ACTIVE) {
            const { handleDrop, id } = this.props
            handleDrop(id, event)
            this.translateX.setOffset(this.lastOffset.x)
            this.translateX.setValue(0)
            this.translateY.setOffset(this.lastOffset.y)
            this.translateY.setValue(0)
            /*
            this.lastOffset.x += event.nativeEvent.translationX
            this.lastOffset.y += event.nativeEvent.translationY
            */
        }
    };

    render() {
        const {
            id,
            width,
            height,
            color,
            label,
            mob,
        } = this.props
        return (
            <PanGestureHandler
                onGestureEvent={this.onGestureEvent}
                onHandlerStateChange={this.onHandlerStateChange}
            >
                <Animated.View
                    style={[
                        styles.box,
                        styles.device,
                        styles.deviceSource,
                        (id === mob.id)
                            ? (
                                mob.isDroppable
                                    ? styles.deviceDroppable
                                    : styles.deviceDragging
                            )
                            : {},
                        {
                            width,
                            height,
                            backgroundColor: color,
                            transform: [
                                { translateX: this.translateX },
                                { translateY: this.translateY },
                            ],
                        },

                    ]}
                >
                    <Text style={styles.deviceLabel}>
                        {label}
                    </Text>
                </Animated.View>
            </PanGestureHandler>
        )
    }
}

DraggableBox.propTypes = {
    id: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    handleDrag: PropTypes.func.isRequired,
    handleDrop: PropTypes.func.isRequired,
    mob: PropTypes.object.isRequired,
}

const styles = StyleSheet.create({
    box: {
        alignSelf: 'center',
        margin: 10,
        zIndex: 200,
    },
    device: {
        zIndex: 1,
        borderWidth: 2,
        borderColor: '#000',
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    deviceDragging: {
        zIndex: 100,
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
