import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const PartialSettingsAccount = () => (
    <View style={styles.container}>
        <Text>
            Settings Account
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

export default PartialSettingsAccount
