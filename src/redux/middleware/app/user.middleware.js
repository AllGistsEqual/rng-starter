import { USER_LOGIN, USER_LOGOUT } from '../../actions/user.actions'
import * as RootNavigation from '../../../navigation/RootNavigation'

const fakeLoginCheck = () => true // It's an older code, sir, but it checks out.

const userMiddleware = () => (next) => (action) => {
    switch (action.type) {
        case USER_LOGIN: {
            if (fakeLoginCheck()) {
                next(action) // continue with the login

                setTimeout(() => { // wait a moment before triggering the navigation
                    RootNavigation.navigate('Home')
                }, 2000)
            }
            break
        }

        case USER_LOGOUT: {
            next(action)
            RootNavigation.navigate('Login')
            break
        }

        default: {
            next(action)
        }
    }
}

export default userMiddleware
