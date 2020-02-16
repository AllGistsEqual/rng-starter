export const USER = '[USER]'
export const USER_LOGIN = `${USER} Set user as logged in`
export const USER_LOGOUT = `${USER} Set user as logged out`

export const userLogin = ({ name }) => ({
    type: USER_LOGIN,
    payload: {
        name,
    },
})

export const userLogout = () => ({
    type: USER_LOGOUT,
    payload: {},
})
