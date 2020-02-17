import React from 'react'
import { Text, Button } from 'react-native'
import PropTypes from 'prop-types'
import DefaultPage from '../../components/DefaultPage'

const SceneHome = ({ navigation }) => (
    <DefaultPage>
        <Text>
            Home
        </Text>
        <Button title="Settings" onPress={() => navigation.navigate('Settings')} />
        <Button title="Play the game" onPress={() => navigation.navigate('GameHome')} />
    </DefaultPage>
)

SceneHome.propTypes = {
    navigation: PropTypes.object.isRequired,
}

export default SceneHome
