import React from 'react'
import { Button, Text } from 'react-native'
import PropTypes from 'prop-types'
import DefaultPage from '../../components/global/layout/DefaultPage'

const SceneSettings = ({ navigation }) => (
    <DefaultPage>
        <Text>
            Settings
        </Text>
        <Button title="Back" onPress={() => navigation.goBack()} />
    </DefaultPage>
)

SceneSettings.propTypes = {
    navigation: PropTypes.object.isRequired,
}

export default SceneSettings
