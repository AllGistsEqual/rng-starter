import React, { useCallback } from 'react'
import { Image, View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { useFocusEffect } from '@react-navigation/native'
import DefaultPage from '../../components/DefaultPage/DefaultPage'
import ClickableScreen from '../../components/ClickableScreen'
import AbeLogo from '../../../assets/AllBitsEqual_logo_light.png'

const SceneSplash = ({ navigation }) => {
    useFocusEffect(
        useCallback(() => {
            const delayedNavigation = setTimeout(() => {
                navigation.navigate('DataCheck')
            }, 2000)
            return () => clearTimeout(delayedNavigation)
        }, [])
    )

    return (
        <ClickableScreen handlePress={() => navigation.navigate('DataCheck')}>
            <DefaultPage>
                <Image
                    style={{ width: 150, height: 120 }}
                    source={AbeLogo}
                />
                <View>
                    <Text style={{ fontSize: 23, marginTop: 80 }}>
                        by Konrad Abe
                    </Text>
                </View>
            </DefaultPage>
        </ClickableScreen>
    )
}

SceneSplash.propTypes = {
    navigation: PropTypes.object.isRequired,
}

export default SceneSplash
