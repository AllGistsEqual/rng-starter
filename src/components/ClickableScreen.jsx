import React from 'react'
import { TouchableWithoutFeedback, StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'

const ClickableScreen = ({ handlePress, children }) => (
    <TouchableWithoutFeedback
        style={styles.clickableScreen}
        onPress={() => handlePress()}
    >
        <View style={styles.clickableScreenHelper}>
            {children}
        </View>
    </TouchableWithoutFeedback>
)

const styles = StyleSheet.create({
    clickableScreen: {
        width: '100%',
        height: '100%',
    },
    clickableScreenHelper: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
})

ClickableScreen.propTypes = {
    handlePress: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
}

export default ClickableScreen
