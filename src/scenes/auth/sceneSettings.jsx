import React from 'react'
import {
    Button, StyleSheet, Text, View,
} from 'react-native'
import PropTypes from 'prop-types'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import DefaultPage from '../../components/DefaultPage'
import PartialSettingsGame from './partialSettingsGame'
import PartialSettingsAbout from './partialSettingsAbout'
import PartialSettingsAccount from './partialSettingsAccount'

const Stack = createStackNavigator()

const forFade = ({ current }) => ({
    cardStyle: {
        opacity: current.progress,
    },
})

const navigationRef = React.createRef()

function navigate(name, params) {
    navigationRef.current.navigate(name, params)
}

const SettingsNavigation = () => (
    <NavigationContainer
        ref={navigationRef}
        independent
    >
        <Stack.Navigator
            initialRouteName="SettingsGame"
            screenOptions={{
                headerShown: false,
                cardStyleInterpolator: forFade,
            }}
        >
            <Stack.Screen
                name="SettingsGame"
                component={PartialSettingsGame}
            />
            <Stack.Screen
                name="SettingsAccount"
                component={PartialSettingsAccount}
            />
            <Stack.Screen
                name="SettingsAbout"
                component={PartialSettingsAbout}
            />
        </Stack.Navigator>
    </NavigationContainer>
)

const SceneSettings = ({ navigation }) => (
    <DefaultPage>
        <Text>
            Settings
        </Text>
        <View style={styles.buttonBar}>
            <Button
                title="Game"
                onPress={() => navigate('SettingsGame')}
            />
            <Button
                title="Account"
                onPress={() => navigate('SettingsAccount')}
            />
            <Button
                title="About"
                onPress={() => navigate('SettingsAbout')}
            />
        </View>
        <View style={styles.container}>
            <SettingsNavigation />
        </View>
        <Button title="Back" onPress={() => navigation.goBack()} />
    </DefaultPage>
)

const styles = StyleSheet.create({
    container: {
        height: '80%',
        width: '90%',
        display: 'flex',
        backgroundColor: '#ff7100',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 5,
    },
    buttonBar: {
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})

SceneSettings.propTypes = {
    navigation: PropTypes.object.isRequired,
}

export default SceneSettings
