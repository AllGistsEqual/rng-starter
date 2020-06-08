import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import BackgroundPage from '../../components/global/layout/BackgroundPage'
import IconButton from '../../components/global/ui/IconButton'
import backgroundImage from '../../../assets/bg_abstract_02.jpg'
import SweepMiner from '../../components/other/SweepMiner'
import TextButton from '../../components/global/ui/TextButton'

const gridCols = 7
const gridRows = 10
const gridBombs = 9

const targetBombCount = Math.min(Math.floor(gridCols * gridRows * 0.33), gridBombs)

const SceneGridTest = ({ navigation }) => {
    const [cheating, setCheating] = useState(0)

    return (
        <BackgroundPage background={backgroundImage}>
            <View style={styles.contentBox}>
                <SweepMiner
                    gridCols={gridCols}
                    gridRows={gridRows}
                    bombs={targetBombCount}
                    cheating={cheating}
                />

                <TextButton
                    title="🕵️ Cheat this 🕵️"
                    type="default"
                    onPress={() => setCheating(cheating + 1)}
                />

                <IconButton
                    icon="❌"
                    size={30}
                    customStyles={styles.buttonExit}
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
        </BackgroundPage>
    )
}

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

SceneGridTest.propTypes = {
    navigation: PropTypes.object.isRequired,
}

export default SceneGridTest
