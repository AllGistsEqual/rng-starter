import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './reducers/rootReducer'
import middleware from './middleware'

const initialState = {}

/* eslint-disable no-underscore-dangle */
const composeEnhancers = compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
/* eslint-enable no-underscore-dangle */

const configureStore = () => {
    const store = createStore(rootReducer, initialState, composeEnhancers)

    return store
}

export default configureStore
