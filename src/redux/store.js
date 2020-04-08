import { applyMiddleware, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { AsyncStorage } from 'react-native'
import rootReducer from './reducers/rootReducer'
import middleware from './middleware'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
    persistedReducer,
    applyMiddleware(
        ...middleware,
    ),
)

export const persistor = persistStore(store)

export default store
