import { combineReducers } from 'redux'
import applicationReducer from './application.reducer'

export default combineReducers({
    application: applicationReducer,
})
