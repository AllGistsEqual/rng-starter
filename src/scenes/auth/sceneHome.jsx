import React from 'react'
import { Image, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { userLogout } from '../../redux/actions/user.actions'
import TextButton from '../../components/global/ui/TextButton'
import BackgroundPage from '../../components/global/layout/BackgroundPage'
import backgroundImage from '../../../assets/bg_abstract_02.jpg'
import logo from '../../../assets/game_logo.png'

const SceneHome = ({ logout, navigation }) => (
    <BackgroundPage background={backgroundImage}>
        <Image
            source={logo}
            style={styles.logo}
        />
        <TextButton
            title="Settings"
            onPress={() => navigation.navigate('Settings')}
        />
        <TextButton
            title="Logout"
            onPress={logout}
        />
        <TextButton
            title="Play the game"
            onPress={() => navigation.navigate('GameHome')}
        />
    </BackgroundPage>
)

const styles = StyleSheet.create({
    logo: {
        width: 215,
        height: 230,
        marginBottom: 100,
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
