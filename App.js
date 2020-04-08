import React from 'react';
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { enableScreens } from 'react-native-screens';
import configureStore from './src/redux/store'
import Navigation from './src/navigation'

enableScreens();

const store = configureStore()

export default function App() {
    return (
        <Provider store={store}>
            <StatusBar hidden />
            <Navigation />
        </Provider>
    )
}
