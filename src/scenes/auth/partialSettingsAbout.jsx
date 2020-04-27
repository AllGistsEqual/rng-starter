import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const PartialSettingsAbout = () => (
    <View style={styles.container}>
        <Text>
            Settings About
        </Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        display: 'flex',
        padding: 10,
    },
})

export default PartialSettingsAbout
