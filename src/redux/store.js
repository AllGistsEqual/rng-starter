import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './reducers/rootReducer'
import middleware from './middleware'

const initialState = {}

const composeEnhancers = compose(
    applyMiddleware(...middleware),
)

const configureStore = () => {
    const store = createStore(rootReducer, initialState, composeEnhancers)

    return store
}

export default configureStore
