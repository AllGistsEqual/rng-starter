import React from 'react'
import { TouchableWithoutFeedback, StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'

const TouchableWrapper = ({ handlePress, children }) => (
    <TouchableWithoutFeedback
        style={styles.touchableWrapper}
        onPress={() => handlePress()}
    >
        <View style={styles.touchableWrapperHelper}>
            {children}
        </View>
    </TouchableWithoutFeedback>
)

const styles = StyleSheet.create({
    touchableWrapper: {
        width: '100%',
        height: '100%',
    },
    touchableWrapperHelper: {
        position: 'absolute',
        backgroundColor: 'red',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
})

TouchableWrapper.propTypes = {
    handlePress: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
}

export default TouchableWrapper
