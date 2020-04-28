import React from 'react'
import {
    StyleSheet, Text, View,
} from 'react-native'
import PropTypes from 'prop-types'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import PartialSettingsGame from './partialSettingsGame'
import PartialSettingsAbout from './partialSettingsAbout'
import PartialSettingsAccount from './partialSettingsAccount'
import BackgroundPage from '../../components/global/layout/BackgroundPage'
import background from '../../../assets/bg_abstract_03.jpg'
import IconButton from '../../components/global/ui/IconButton'
import Button from '../../components/global/ui/Button'

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
    <BackgroundPage background={background}>
        <View style={styles.container}>
            <Text style={styles.headline}>
                Settings
            </Text>
            <View style={styles.navigationBox}>
                <SettingsNavigation />
            </View>
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
            <IconButton
                icon="❌"
                customStyles={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                }}
                onPress={() => navigation.goBack()}
            />
        </View>
    </BackgroundPage>
)

const styles = StyleSheet.create({
    container: {
        height: '80%',
        width: '90%',
        display: 'flex',
        backgroundColor: 'lightgray',
        borderColor: '#000',
        borderWidth: 3,
        borderRadius: 5,
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headline: {
        fontWeight: 'bold',
        fontSize: 23,
    },
    navigationBox: {
        height: '80%',
        width: '90%',
        display: 'flex',
        backgroundColor: 'white',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 5,
        marginTop: 15,
        marginBottom: 5,
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
