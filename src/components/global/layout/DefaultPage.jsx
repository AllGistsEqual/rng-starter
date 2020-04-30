import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, ScrollView, View } from 'react-native'

const DefaultPage = ({ children }) => (
    <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scroller}>
            {children}
        </ScrollView>
    </View>
)

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ddd',
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
