import React, { useEffect, useState } from 'react'
import {
    Image,
    StyleSheet,
    View,
} from 'react-native'
import PropTypes from 'prop-types'
import * as assetLine from '../../../../assets/gtm/line'

const Line = ({
    orientation,
}) => {
    const [type, setType] = useState('largeStraight')
    const [rotationStyle, setRotationStyle] = useState({})

    useEffect(() => {
        switch (orientation) {
            case (1): {
                setType('largeStraight')
                setRotationStyle({}); break }
            case (2): {
                setType('largeStraight')
                setRotationStyle({ transform: [{ rotate: '90deg' }] }); break }
            case (3): {
                setType('largeCorner')
                setRotationStyle({}); break }
            case (4): {
                setType('largeCorner')
                setRotationStyle({ transform: [{ rotate: '90deg' }] }); break }
            case (5): {
                setType('largeCorner')
                setRotationStyle({ transform: [{ rotate: '180deg' }] }); break }
            case (6): {
                setType('largeCorner')
                setRotationStyle({ transform: [{ rotate: '270deg' }] }); break }
            case (9): {
                setType('doubleStraight')
                setRotationStyle({}); break }
            case (10): {
                setType('doubleStraight')
                setRotationStyle({ transform: [{ rotate: '90deg' }] }); break }
            case (11): {
                setType('doubleCorner')
                setRotationStyle({}); break }
            case (12): {
                setType('doubleCorner')
                setRotationStyle({ transform: [{ rotate: '90deg' }] }); break }
            case (13): {
                setType('doubleCorner')
                setRotationStyle({ transform: [{ rotate: '180deg' }] }); break }
            case (14): {
                setType('doubleCorner')
                setRotationStyle({ transform: [{ rotate: '270deg' }] }); break }
        }
    }, [orientation])

    return (
        <View style={[
            styles.device,
            rotationStyle,
        ]}
        >
            <Image
                source={assetLine[`${type}Bottom`]}
                style={styles.asset}
            />
            <Image
                source={assetLine[`${type}Top`]}
                style={styles.assetTop}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    device: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    asset: {
        width: 50,
        height: 50,
    },
    assetTop: {
        position: 'absolute',
        width: 50,
        height: 50,
    },
})

Line.propTypes = {
    orientation: PropTypes.number.isRequired,
}

export default Line
