import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const PartialSettingsGame = () => (
    <View style={styles.container}>
        <Text>
            Settings Game
        </Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        display: 'flex',
        backgroundColor: 'red',
        padding: 20,
    },
})

export default PartialSettingsGame
