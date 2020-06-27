import React from 'react'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'
import PropTypes from 'prop-types'
import DEVICES from '../../../data/devices'

const Splitter = (props) => {
    const {
        input,
        output,
        orientation,
        status,
    } = props
    const { asset, color } = DEVICES.device_splitter

    return (
        <View style={[
            styles.device,
            { backgroundColor: color },
        ]}
        >
            <Text style={styles.label}>{asset}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    device: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontSize: 18,
    },
})

Splitter.propTypes = {}

export default Splitter
