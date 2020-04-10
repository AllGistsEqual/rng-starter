import React from 'react'
import { Text, Button } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import DefaultPage from '../../components/DefaultPage'
import { userLogout } from '../../redux/actions/user.actions'

const SceneHome = ({ logoutUser, navigation }) => (
    <DefaultPage>
        <Text>
            Home
        </Text>
        <Button title="Settings" onPress={() => navigation.navigate('Settings')} />
        <Button title="Play the game" onPress={() => navigation.navigate('Game')} />
        <Button title="Log Out" onPress={() => logoutUser()} />
    </DefaultPage>
)

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
