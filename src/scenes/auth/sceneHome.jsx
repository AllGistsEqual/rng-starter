import React from 'react'
import { Text, Button } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { userLogout } from '../../redux/actions/user.actions'
import DefaultPage from '../../components/global/layout/DefaultPage'

const SceneHome = ({ logout, navigation }) => (
    <DefaultPage>
        <Text>
            Home
        </Text>
        <Button title="Settings" onPress={() => navigation.navigate('Settings')} />
        <Button title="Logout" onPress={logout} />
        <Button title="Play the game" onPress={() => navigation.navigate('GameHome')} />
    </DefaultPage>
)

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
