import React, { Component } from 'react'
import { Animated, StyleSheet } from 'react-native'
import { PanGestureHandler, State } from 'react-native-gesture-handler'
import PropTypes from 'prop-types'

export default class DraggableBox extends Component {
    constructor(props) {
        super(props)
        this.translateX = new Animated.Value(0)
        this.translateY = new Animated.Value(0)
        this.lastOffset = { x: 0, y: 0 }

        this.dragInitHandler = () => {
            const { handleDragStart, id, device } = this.props
            handleDragStart(id, device)
        }

        this.dragStartHandler = () => {}

        this.dragMoveHandler = (event) => {
            const { handleDrag, id, device } = this.props
            handleDrag(id, device, event)
        }

        this.dragStopHandler = (event) => {
            const {
                handleDrop, id, device, orientation,
            } = this.props
            handleDrop(id, device, orientation, event)
            this.translateX.setOffset(this.lastOffset.x)
            this.translateX.setValue(0)
            this.translateY.setOffset(this.lastOffset.y)
            this.translateY.setValue(0)
            /*
            this.lastOffset.x += event.nativeEvent.translationX
            this.lastOffset.y += event.nativeEvent.translationY
            */
        }

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
                listener: (event) => { this.dragMoveHandler(event) },
            },
            {
                useNativeDriver: true,
            },
        )
    }

    onHandlerStateChange = (event) => {
        if (event.nativeEvent.oldState === State.UNDETERMINED) { this.dragInitHandler() }
        if (event.nativeEvent.oldState === State.BEGAN) { this.dragStartHandler() }
        if (event.nativeEvent.oldState === State.ACTIVE) { this.dragStopHandler(event) }
    }

    render() {
        const {
            id,
            width,
            height,
            mob,
            children,
        } = this.props
        return (
            <PanGestureHandler
                enabled={!mob.id || mob.id === id}
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
                            width: width + 5,
                            height: height + 5,
                            transform: [
                                { translateX: this.translateX },
                                { translateY: this.translateY },
                            ],
                        },

                    ]}
                >
                    {children}
                </Animated.View>
            </PanGestureHandler>
        )
    }
}

DraggableBox.propTypes = {
    id: PropTypes.string.isRequired,
    device: PropTypes.string.isRequired,
    orientation: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    handleDragStart: PropTypes.func.isRequired,
    handleDrag: PropTypes.func.isRequired,
    handleDrop: PropTypes.func.isRequired,
    mob: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
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
        borderColor: 'transparent',
        margin: 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    deviceDragging: {
        zIndex: 100,
        borderWidth: 5,
        borderColor: '#e91e63',
    },
    deviceDroppable: {
        borderWidth: 2,
        borderColor: '#008a12',
    },
    deviceLabel: {
        fontSize: 24,
    },
    deviceSource: {
        position: 'relative',
        borderWidth: 2,
    },
})
