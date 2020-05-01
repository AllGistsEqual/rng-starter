import React from 'react'
import PropTypes from 'prop-types'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native'

const IconButton = ({
    icon,
    size,
    customStyles,
    onPress,
}) => (
    <TouchableOpacity
        style={customStyles}
        onPress={() => onPress()}
    >
        <View style={styles.button}>
            <Text style={{ ...styles.icon, fontSize: size }}>
                {icon}
            </Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    button: {
        overflow: 'hidden',
    },
    icon: {
        textAlign: 'center',
    },
})

IconButton.defaultProps = {
    size: 18,
    customStyles: {},
    onPress: undefined,
}

IconButton.propTypes = {
    icon: PropTypes.string.isRequired,
    size: PropTypes.number,
    customStyles: PropTypes.object,
    onPress: PropTypes.func,
}

export default IconButton
