import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DefaultPage from '../../components/DefaultPage'
import BottomBar from '../../components/other/BottomBar'

const SceneGameTab2 = () => (
    <DefaultPage>
        <View style={styles.contentBox}>
            <Text>Tab 2</Text>
        </View>

        <BottomBar />
    </DefaultPage>
)

const styles = StyleSheet.create({
    contentBox: {
        flex: 1,
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default SceneGameTab2
