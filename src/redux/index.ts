import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import rootReducer from './rootReducer'
import middleware from './rootMiddleware'

// blacklist a store attribute using it's reducer name. Blacklisted attributes will not persist.
const persistConfig = {
    key: 'root',
    version: 1,
    storage: AsyncStorage,
    blacklist: [], //blacklisting a store attribute name, will not persist that store attribute.
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// We do not want to maintain the return type of createStore function by hand
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createStore = () =>
    configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }).concat(middleware),
    })
const store = createStore()

export type Store = ReturnType<typeof createStore>
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useReduxDispatch = (): AppDispatch => useDispatch<AppDispatch>()
export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector

export const persistor = persistStore(store)
export default store
