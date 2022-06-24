import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import rootReducer from './rootReducer'
import middleware from './rootMiddleware'

// We do not want to maintain the return type of createStore function by hand
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createStore = () =>
    configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false, // ToDo: refactor to have an serializable state !!!
            }).concat(middleware),
    })
const store = createStore()

export type Store = ReturnType<typeof createStore>
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useReduxDispatch = (): AppDispatch => useDispatch<AppDispatch>()
export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
