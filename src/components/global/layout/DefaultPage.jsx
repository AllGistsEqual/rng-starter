import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'

const DefaultPage = ({ children }) => (
    <View style={styles.container}>
        {children}
    </View>
)

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scroller: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

DefaultPage.propTypes = {
    children: PropTypes.node.isRequired,
}

export default DefaultPage
