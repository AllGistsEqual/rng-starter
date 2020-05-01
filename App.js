import React from 'react';
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { enableScreens } from 'react-native-screens'
import store, { persistor } from './src/redux/store'
import Navigation from './src/navigation'
import SceneAppLoading from './src/scenes/auth/sceneAppLoading'

enableScreens()

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={<SceneAppLoading />} persistor={persistor}>
                <StatusBar hidden />
                <Navigation />
            </PersistGate>
        </Provider>
    )
}
