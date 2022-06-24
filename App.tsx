import { StatusBar } from 'expo-status-bar'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './src/redux'
import Demo from './src/screens/Demo'

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
