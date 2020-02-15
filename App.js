import React from 'react';
import { Provider } from 'react-redux'
import { enableScreens } from 'react-native-screens';
import configureStore from './src/redux/store'
import { initialiseApplication } from './src/redux/actions/application.actions'
import Navigation from './src/navigation'

enableScreens();

const store = configureStore()
store.dispatch(initialiseApplication())

export default function App() {
    return (
        <Provider store={store}>
            <Navigation />
        </Provider>
    )
}
