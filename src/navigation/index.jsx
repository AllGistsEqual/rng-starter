import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { navigationRef } from './RootNavigation'
import SceneSplash from '../scenes/auth/sceneSplash'
import SceneAppLoading from '../scenes/auth/sceneAppLoading'
import SceneDataCheck from '../scenes/auth/sceneDataCheck'
import SceneLogin from '../scenes/auth/sceneLogin'
import SceneHome from '../scenes/auth/sceneHome'
import SceneSettings from '../scenes/auth/sceneSettings'
import SceneGameHome from '../scenes/game/sceneGameHome'
import SceneGameTab2 from '../scenes/game/SceneGameTab2'
import SceneGameTab3 from '../scenes/game/SceneGameTab3'

const Stack = createStackNavigator()

const forFade = ({ current }) => ({
    cardStyle: {
        opacity: current.progress,
    },
})

const GameNavigation = () => (
    <Stack.Navigator
        initialRouteName="GameHome"
        screenOptions={{
            headerShown: false,
            cardStyleInterpolator: forFade,
        }}
    >
        <Stack.Screen name="GameHome" component={SceneGameHome} />
        <Stack.Screen name="GameTab2" component={SceneGameTab2} />
        <Stack.Screen name="GameTab3" component={SceneGameTab3} />
    </Stack.Navigator>
)

const Navigation = () => (
    <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Splash" component={SceneSplash} />
            <Stack.Screen name="AppLoading" component={SceneAppLoading} />
            <Stack.Screen name="DataCheck" component={SceneDataCheck} />
            <Stack.Screen name="Login" component={SceneLogin} />
            <Stack.Screen name="Home" component={SceneHome} />
            <Stack.Screen name="Settings" component={SceneSettings} />
            <Stack.Screen name="Game" component={GameNavigation} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default Navigation
