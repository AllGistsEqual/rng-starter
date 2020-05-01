import { applyMiddleware, createStore } from 'redux'
import rootReducer from './reducers/rootReducer'
import middleware from './middleware'

const store = createStore(
    rootReducer,
    applyMiddleware(...middleware),
)

export default store
