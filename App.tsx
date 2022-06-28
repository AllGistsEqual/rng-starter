import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from '@Store'
import Demo from '@Screens/Demo'

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Demo />
                <StatusBar style="auto" />
            </PersistGate>
        </Provider>
    )
}
