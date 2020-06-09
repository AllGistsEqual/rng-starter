import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import BackgroundPage from '../../components/global/layout/BackgroundPage'
import IconButton from '../../components/global/ui/IconButton'
import backgroundImage from '../../../assets/bg_abstract_02.jpg'
import MagicGatherer from '../../components/other/MagicGatherer'

const gridCols = 5
const gridRows = 5

const SceneGridTest = ({ navigation }) => (
    <BackgroundPage background={backgroundImage}>
        <View style={styles.contentBox}>
            <MagicGatherer
                gridCols={gridCols}
                gridRows={gridRows}
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
