import React from 'react'
import { Image, View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from '../../components/global/ui/Button'
import { userLogout } from '../../redux/actions/user.actions'
import VersionTag from '../../components/other/VersionTag'
import BackgroundPage from '../../components/global/layout/BackgroundPage'
import background from '../../../assets/bg_abstract_02.jpg'
import logo from '../../../assets/game_logo.png'
import IconButton from '../../components/global/ui/IconButton'

const SceneHome = ({ logoutUser, navigation }) => (
    <BackgroundPage background={background}>
        <Image
            source={logo}
            style={styles.logo}
        />
        <Button
            title="Play the game"
            type="success"
            onPress={() => navigation.navigate('Game')}
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
            onPress={() => logoutUser()}
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
    buttonGroup: {
        width: '80%',
        height: 200,
        marginTop: 40,
        justifyContent: 'space-between',
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
    logoutUser: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
    logoutUser: (name) => dispatch(userLogout({ name })),
})

export default connect(
    null,
    mapDispatchToProps,
)(SceneHome)
