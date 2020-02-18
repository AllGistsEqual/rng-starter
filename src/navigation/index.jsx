import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { navigationRef } from './RootNavigation'
import SceneSplash from '../scenes/auth/sceneSplash'
import SceneAppLoading from '../scenes/auth/sceneAppLoading'
import SceneLogin from '../scenes/auth/sceneLogin'
import SceneHome from '../scenes/auth/sceneHome'
import SceneSettings from '../scenes/auth/sceneSettings'
import SceneGameHome from '../scenes/game/sceneGameHome'

const Stack = createStackNavigator()

const Navigation = () => (
    <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={SceneSplash} />
            <Stack.Screen name="AppLoading" component={SceneAppLoading} />
            <Stack.Screen name="Login" component={SceneLogin} />
            <Stack.Screen name="Home" component={SceneHome} />
            <Stack.Screen name="Settings" component={SceneSettings} />
            <Stack.Screen name="GameHome" component={SceneGameHome} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default Navigation
