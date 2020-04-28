import React from 'react'
import { StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import RockPaperScissorsLizardSpock from '../../components/other/RockPaperScissorsLizardSpock'
import BottomBar from '../../components/global/layout/BottomBar'
import background from '../../../assets/bg_abstract_02.jpg'
import BackgroundPage from '../../components/global/layout/BackgroundPage'
import IconButton from '../../components/global/ui/IconButton'

const SceneGameHome = ({ navigation }) => (
    <BackgroundPage background={background}>
        <View style={styles.contentBox}>
            <RockPaperScissorsLizardSpock />

            <IconButton
                icon="❌"
                size={30}
                customStyles={styles.buttonExit}
                onPress={() => navigation.navigate('Home')}
            />
        </View>

        <BottomBar />
    </BackgroundPage>
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

SceneGameHome.propTypes = {
    navigation: PropTypes.object.isRequired,
}

export default SceneGameHome
