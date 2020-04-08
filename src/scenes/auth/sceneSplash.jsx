import React, { useEffect } from 'react'
import { Image } from 'react-native'
import PropTypes from 'prop-types'
import DefaultPage from '../../components/DefaultPage'
import ClickableScreen from '../../components/ClickableScreen'
import AbeLogo from '../../../assets/AllBitsEqual_logo_light.png'

const SceneSplash = ({ navigation }) => {
    let navigationTriggered = false

    const saveNavigate = () => {
        if (!navigationTriggered) {
            navigationTriggered = true
            navigation.navigate('AppLoading')
        }
    }

    useEffect(() => {
        setTimeout(() => {
            saveNavigate()
        }, 2000000)
    }, [])

    return (
        <ClickableScreen handlePress={() => saveNavigate()}>
            <DefaultPage>
                <Image
                    style={{width: 150, height: 120}}
                    source={AbeLogo}
                />
            </DefaultPage>
        </ClickableScreen>
    )
}

SceneSplash.propTypes = {
    navigation: PropTypes.object.isRequired,
}

export default SceneSplash
