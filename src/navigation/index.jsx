import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SceneSplash from '../scenes/auth/sceneSplash'

const Stack = createStackNavigator()

const Navigation = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={SceneSplash} options={{ headerShown: false }} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default Navigation
