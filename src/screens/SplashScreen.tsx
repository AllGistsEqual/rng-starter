import React, { useCallback } from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { MainNavigationProp, MainRoutes } from '@Routing/routes'
import DefaultPage from '@Components/layout/DefaultPage'

type SplashScreenProps = {
    navigation: MainNavigationProp<MainRoutes.Splash>
}

const SplashScreen = ({ navigation }: SplashScreenProps): React.ReactElement => {
    const navigate = useCallback(() => navigation.navigate(MainRoutes.Demo), [navigation])

    useFocusEffect(
        useCallback(() => {
            const navigationTimer = setTimeout(() => {
                navigate()
            }, 3000)

            return (): void => clearTimeout(navigationTimer)
        }, [navigate]),
    )

    return (
        <TouchableWithoutFeedback onPress={() => navigate()}>
            <View style={{ flex: 1 }}>
                <DefaultPage>
                    <Text>AllBitsEqual</Text>
                </DefaultPage>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default SplashScreen
