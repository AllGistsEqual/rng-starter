import React from 'react'
import { Image, View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { userLogout } from '../../redux/actions/user.actions'
import TextButton from '../../components/global/ui/TextButton'
import IconButton from '../../components/global/ui/IconButton'
import BackgroundPage from '../../components/global/layout/BackgroundPage'
import backgroundImage from '../../../assets/bg_abstract_02.jpg'
import logo from '../../../assets/game_logo.png'
import VersionTag from '../../components/other/VersionTag'

const SceneHome = ({ logout, navigation }) => (
    <BackgroundPage background={backgroundImage}>
        <Image
            source={logo}
            style={styles.logo}
        />
        <IconButton
            icon="⚙️"
            size={42}
            customStyles={styles.buttonSettings}
            onPress={() => navigation.navigate('Settings')}
        />
        <IconButton
            icon="❌"
            size={30}
            customStyles={styles.buttonExit}
            onPress={logout}
        />
        <TextButton
            title="Play the game"
            type="primary"
            onPress={() => navigation.navigate('GameHome')}
        />
        <View style={styles.versionTag}>
            <VersionTag />
        </View>
    </BackgroundPage>
)

const styles = StyleSheet.create({
    logo: {
        width: 215,
        height: 230,
        marginBottom: 100,
    },
    buttonSettings: {
        position: 'absolute',
        top: 10,
        left: 10,
    },
    buttonExit: {
        position: 'absolute',
        top: 15,
        right: 15,
    },
    versionTag: {
        position: 'absolute',
        bottom: 10,
        left: 10,
    },
})

SceneHome.propTypes = {
    navigation: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
    logout: (name) => dispatch(userLogout({ name })),
})

export default connect(
    null,
    mapDispatchToProps,
)(SceneHome)
