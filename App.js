import React from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { enableScreens } from 'react-native-screens';
import store, { persistor } from './src/redux/store'
import { initialiseApplication } from './src/redux/actions/application.actions'
import Navigation from './src/navigation'
import SceneAppLoading from './src/scenes/auth/sceneAppLoading'

enableScreens();

store.dispatch(initialiseApplication())

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={(<SceneAppLoading />)} persistor={persistor}>
                <Navigation />
            </PersistGate>
        </Provider>
    )
}
