import React, { useRef } from 'react'
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native'
import { useReduxDevToolsExtension } from '@react-navigation/devtools'

import { MainRoutes, MainStack, MainStackParamList } from './routes'
import SplashScreen from '@Screens/SplashScreen'
import Demo from '@Screens/Demo'

const MainNavigation = (): React.ReactElement => {
    const navigationRef: React.RefObject<NavigationContainerRef<MainStackParamList>> = useRef(null)

    useReduxDevToolsExtension(navigationRef)

    return (
        <NavigationContainer ref={navigationRef}>
            <MainStack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <MainStack.Screen name={MainRoutes.Splash} component={SplashScreen} />
                <MainStack.Screen name={MainRoutes.Demo} component={Demo} />
            </MainStack.Navigator>
        </NavigationContainer>
    )
}
export default MainNavigation
