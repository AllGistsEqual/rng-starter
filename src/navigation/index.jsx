import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { navigationRef } from './RootNavigation'
import SceneSplash from '../scenes/auth/sceneSplash'
import SceneLogin from '../scenes/auth/sceneLogin'
import SceneHome from '../scenes/auth/sceneHome'
import SceneSettings from '../scenes/auth/sceneSettings'
import SceneGameHome from '../scenes/game/sceneGameHome'

const Stack = createStackNavigator()

const Navigation = ({ isUserLoggedIn }) => (
    <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
            {isUserLoggedIn ? (
                // App Stack
                <>
                    <Stack.Screen name="Home" component={SceneHome} />
                    <Stack.Screen name="Settings" component={SceneSettings} />
                    <Stack.Screen name="GameHome" component={SceneGameHome} />
                </>
            ) : (
                // Auth Stack
                <>
                    <Stack.Screen name="Splash" component={SceneSplash} />
                    <Stack.Screen name="Login" component={SceneLogin} />
                </>
            )}
        </Stack.Navigator>
    </NavigationContainer>
)

Navigation.propTypes = {
    isUserLoggedIn: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
    isUserLoggedIn: state.user.isLoggedIn,
})

export default connect(
    mapStateToProps
)(Navigation)
