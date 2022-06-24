import { StatusBar } from 'expo-status-bar'
import { Provider } from 'react-redux'
import store from './src/redux'
import Demo from './src/screens/Demo'

export default function App() {
  return (
    <Provider store={store}>
      <Demo />
      <StatusBar style="auto" />
    </Provider>
  );
}