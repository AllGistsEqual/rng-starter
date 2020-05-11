import { USER_LOGIN } from '../../actions/user.actions'

const fakeLoginCheck = () => true // It's an older code, sir, but it checks out.

const userMiddleware = () => (next) => (action) => {
    switch (action.type) {
        case USER_LOGIN: {
            if (fakeLoginCheck()) {
                setTimeout(() => { // wait a moment before triggering the navigation
                    next(action) // continue with the login
                }, 2000)
            }
            break
        }

        default: {
            next(action)
        }
    }
}

export default userMiddleware
