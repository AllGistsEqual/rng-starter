import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types'
import DefaultPage from '../../components/DefaultPage/DefaultPage'
import BottomBar from '../../components/other/BottomBar'
import IconButton from '../../components/other/IconButton'

const SceneGameTab2 = ({ navigation }) => (
    <DefaultPage>
        <View style={styles.contentBox}>
            <Text>Tab 2</Text>
        </View>

        <IconButton
            icon="❌"
            size={30}
            customStyles={styles.buttonExit}
            onPress={() => navigation.navigate('Home')}
        />

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
    buttonExit: {
        position: 'absolute',
        top: 15,
        right: 15,
    },
})

SceneGameTab2.propTypes = {
    navigation: PropTypes.object.isRequired,
}

export default SceneGameTab2
