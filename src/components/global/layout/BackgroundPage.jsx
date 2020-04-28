import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, ImageBackground } from 'react-native'

const BackgroundPage = ({ background, children }) => (
    <View style={styles.container}>
        <ImageBackground source={background} style={styles.background}>
            {children}
        </ImageBackground>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    background: {
        flex: 1,
        flexDirection: 'column',
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

BackgroundPage.propTypes = {
    background: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired,
}

export default BackgroundPage
