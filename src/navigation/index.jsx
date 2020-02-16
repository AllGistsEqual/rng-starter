import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SceneSplash from '../scenes/auth/sceneSplash'
import SceneAppLoading from '../scenes/auth/sceneAppLoading'
import SceneLogin from '../scenes/auth/sceneLogin'
import SceneHome from '../scenes/auth/sceneHome'
import SceneSettings from '../scenes/auth/sceneSettings'
import SceneGameHome from '../scenes/game/sceneGameHome'

const Stack = createStackNavigator()

const Navigation = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={SceneSplash} options={{ headerShown: false }} />
            <Stack.Screen name="AppLoading" component={SceneAppLoading} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={SceneLogin} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={SceneHome} options={{ headerShown: false }} />
            <Stack.Screen name="Settings" component={SceneSettings} options={{ headerShown: false }} />
            <Stack.Screen name="GameHome" component={SceneGameHome} options={{ headerShown: false }} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default Navigation
