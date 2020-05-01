import React from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { enableScreens } from 'react-native-screens';
import store, { persistor } from './src/redux/store'
import Navigation from './src/navigation'

enableScreens();

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Navigation />
            </PersistGate>
        </Provider>
    )
}
