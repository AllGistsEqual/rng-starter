import React from 'react'
import PropTypes from 'prop-types'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native'

const Button = ({
    title,
    onPress,
    type,
}) => {
    let styleButton
    let styleText
    switch (type) {
        case 'primary': {
            styleButton = { ...styles.buttonBase, ...styles.buttonPrimary }
            styleText = { ...styles.textBase, ...styles.textPrimary }
            break
        }
        case 'secondary': {
            styleButton = { ...styles.buttonBase, ...styles.buttonSecondary }
            styleText = { ...styles.textBase, ...styles.textSecondary }
            break
        }
        case 'success': {
            styleButton = { ...styles.buttonBase, ...styles.buttonSuccess }
            styleText = { ...styles.textBase, ...styles.textSuccess }
            break
        }
        case 'warning': {
            styleButton = { ...styles.buttonBase, ...styles.buttonWarning }
            styleText = { ...styles.textBase, ...styles.textWarning }
            break
        }
        default: {
            styleButton = { ...styles.buttonBase, ...styles.buttonDefault }
            styleText = { ...styles.textBase, ...styles.textDefault }
        }
    }

    return (
        <TouchableOpacity onPress={() => onPress()}>
            <View style={styleButton}>
                <Text style={styleText}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonBase: {
        borderWidth: 3,
        borderRadius: 8,
        padding: 12,
        overflow: 'hidden',
    },
    textBase: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    buttonDefault: {
        backgroundColor: 'lightgray',
        borderColor: 'darkgray',
    },
    textDefault: {

    },
    buttonPrimary: {
        backgroundColor: '#ff7100',
        borderColor: '#ad5f00',
    },
    textPrimary: {
    },
    buttonSecondary: {
        backgroundColor: '#1cb7ff',
        borderColor: '#157fff',
    },
    textSecondary: {
        color: 'white',
    },
    buttonSuccess: {
        backgroundColor: 'green',
        borderColor: 'darkgreen',
    },
    textSuccess: {
        color: 'white',
    },
    buttonWarning: {
        backgroundColor: 'red',
        borderColor: 'darkred',
    },
    textWarning: {
    },
})

Button.defaultProps = {
    onPress: undefined,
    type: 'default',
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func,
    type: PropTypes.string,
}

export default Button
