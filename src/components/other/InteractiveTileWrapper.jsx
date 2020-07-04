import React, { useRef } from 'react'
import {
    View,
    StyleSheet,
} from 'react-native'
import {
    LongPressGestureHandler,
    TapGestureHandler,
    State,
} from 'react-native-gesture-handler'
import PropTypes from 'prop-types'

const InteractiveTileWrapper = ({
    tile,
    x,
    y,
    width,
    height,
    touchHandler,
    doubleTouchHandler,
    longTouchHandler,
    children,
}) => {
    const doubleTap = useRef(null)

    const handleTouch = (nativeEvent) => {
        if (nativeEvent.state === State.ACTIVE) {
            touchHandler(tile, x, y)
        }
    }

    const handleDoubleTouch = (nativeEvent) => {
        if (nativeEvent.state === State.ACTIVE) {
            doubleTouchHandler(tile, x, y)
        }
    }

    const handleLongTouch = (nativeEvent) => {
        if (nativeEvent.state === State.ACTIVE) {
            longTouchHandler(tile, x, y)
        }
    }

    const tileFlexStyles = {
        width,
        height,
        left: width * x,
        top: height * y,
    }

    return (
        <LongPressGestureHandler
            onHandlerStateChange={({ nativeEvent }) => handleLongTouch(nativeEvent)}
            minDurationMs={800}
        >
            <TapGestureHandler
                onHandlerStateChange={({ nativeEvent }) => handleTouch(nativeEvent)}
                waitFor={doubleTap}
            >
                <TapGestureHandler
                    ref={doubleTap}
                    onHandlerStateChange={({ nativeEvent }) => handleDoubleTouch(nativeEvent)}
                    numberOfTaps={2}
                >
                    <View style={{
                        ...styles.tileWrapper,
                        ...tileFlexStyles,
                    }}
                    >
                        {children}
                    </View>
                </TapGestureHandler>
            </TapGestureHandler>
        </LongPressGestureHandler>
    )
}

InteractiveTileWrapper.propTypes = {
    tile: PropTypes.number.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    touchHandler: PropTypes.func.isRequired,
    doubleTouchHandler: PropTypes.func.isRequired,
    longTouchHandler: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
}

const styles = StyleSheet.create({
    tileWrapper: {
        position: 'absolute',
        borderWidth: 1,
        borderColor: '#aaa',
    },
})

export default InteractiveTileWrapper
