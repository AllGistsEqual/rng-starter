import React from 'react'
import { View, StyleSheet } from 'react-native'
import BackgroundPage from '../../components/global/layout/BackgroundPage'
import backgroundImage from '../../../assets/bg_abstract_02.jpg'
import MagicGatherer from '../../components/other/MagicGatherer'

const gridCols = 5
const gridRows = 5

const SceneGridTest = () => (
    <BackgroundPage background={backgroundImage}>
        <View style={styles.contentBox}>
            <MagicGatherer
                gridCols={gridCols}
                gridRows={gridRows}
            />
        </View>
    </BackgroundPage>
)

const styles = StyleSheet.create({
    contentBox: {
        width: '100%',
        flex: 1,
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonExit: {
        position: 'absolute',
        top: 15,
        right: 15,
    },
})

export default SceneGridTest
