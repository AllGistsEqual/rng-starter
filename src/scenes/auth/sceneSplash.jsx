import React, { useEffect } from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'
import DefaultPage from '../../components/DefaultPage'

const SceneSplash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login')
        }, 2000)
    }, [])
    return (
        <DefaultPage>
            <Text>
                Splash
            </Text>
        </DefaultPage>
    )
}

SceneSplash.propTypes = {
    navigation: PropTypes.object.isRequired,
}

export default SceneSplash
