import { USER_LOGIN } from '../../actions/user.actions'
import * as RootNavigation from '../../../navigation/RootNavigation'

const fakeLoginCheck = () => true // It's an older code, sir, but it checks out.

const userMiddleware = () => (next) => (action) => {
    if (action.type === USER_LOGIN) {
        if (fakeLoginCheck()) {
            next(action) // continue with the login

            setTimeout(() => { // wait a moment before triggering the navigation
                RootNavigation.navigate('Home')
            }, 2000)
        }
    }
}

export default userMiddleware
