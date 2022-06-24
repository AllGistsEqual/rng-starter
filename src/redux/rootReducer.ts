import { combineReducers } from '@reduxjs/toolkit'
import userInfoReducer from './ducks/userInfoSlice'

const rootReducer = combineReducers({
    userInfo: userInfoReducer,
})

export default rootReducer