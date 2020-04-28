import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types'
import DefaultPage from '../../components/global/layout/DefaultPage'
import BottomBar from '../../components/global/layout/BottomBar'
import IconButton from '../../components/global/ui/IconButton'

const SceneGameTab3 = ({ navigation }) => (
    <DefaultPage>
        <View style={styles.contentBox}>
            <Text>Tab 3</Text>
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

SceneGameTab3.propTypes = {
    navigation: PropTypes.object.isRequired,
}

export default SceneGameTab3
