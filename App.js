import React from 'react';
import { Provider } from 'react-redux'
import { enableScreens } from 'react-native-screens';
import store from './src/redux/store'
import Navigation from './src/navigation'

enableScreens();

export default function App() {
    return (
        <Provider store={store}>
            <Navigation />
        </Provider>
    )
}
