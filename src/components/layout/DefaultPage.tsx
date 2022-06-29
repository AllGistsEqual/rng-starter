import React from 'react'
import { View, StyleSheet, ViewStyle } from 'react-native'

type DefaultPageProps = {
    children: React.ReactNode
}

const DefaultPage = ({ children }: DefaultPageProps): React.ReactElement => <View style={styles.page}>{children}</View>

type Styles = {
    page: ViewStyle
}

const styles = StyleSheet.create<Styles>({
    page: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default DefaultPage
