import { USER_LOGIN, USER_LOGOUT } from '../actions/user.actions'

const initialState = {
    isLoggedIn: false,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN: {
            const { name } = action.payload
            return {
                isLoggedIn: true,
                name,
            }
        }
        case USER_LOGOUT: {
            return {
                isLoggedIn: false,
            }
        }
        default: {
            return state
        }
    }
}

export default userReducer
