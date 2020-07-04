import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    View,
    Image,
} from 'react-native'
import PropTypes from 'prop-types'
import assetImage from '../../../../assets/gtm/device_splitter_0.png'

const Splitter = (props) => {
    const { orientation } = props
    const [rotationStyle, setRotationStyle] = useState({})

    useEffect(() => {
        switch (orientation) {
            case (1): { setRotationStyle({}); break }
            case (2): { setRotationStyle({ transform: [{ rotate: '90deg' }] }); break }
            case (3): { setRotationStyle({ transform: [{ rotate: '180deg' }] }); break }
            case (4): { setRotationStyle({ transform: [{ rotate: '270deg' }] }); break }
        }
    }, [orientation])

    return (
        <View style={styles.device}>
            <Image
                source={assetImage}
                style={[
                    styles.asset,
                    rotationStyle,
                ]}
            />
        </View>
    )
}

Splitter.propTypes = {
    orientation: PropTypes.number.isRequired,
}

const styles = StyleSheet.create({
    device: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ccc',
    },
    asset: {
        width: 50,
        height: 50,
    },
})

export default Splitter
