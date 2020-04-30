import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, ImageBackground } from 'react-native'

const BackgroundPage = ({ background, children }) => (
    <ImageBackground source={background} style={styles.imageBackground}>
        {children}
    </ImageBackground>
)

const styles = StyleSheet.create({
    imageBackground: {
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
