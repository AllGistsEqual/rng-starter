import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../index'

type UserStatus = 'init' | 'guest' | 'pending' | 'registered'

interface UserInfoState {
    name: string
    id: number
    status: UserStatus
}

const initialState: UserInfoState = {
    name: 'guest',
    id: 0,
    status: 'init',
}

export const userInfoSlice = createSlice({
    name: 'userInfoSlice',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setUserInfo: (state, action: PayloadAction<{ name: string; id: number; status: UserStatus }>) => {
            const { name, id, status } = action.payload
            state.name = name
            state.id = id
            state.status = status
        },
    },
})

// Actions
export const { setUserInfo } = userInfoSlice.actions

// Selectors
export const getUserInfo = (state: RootState): UserInfoState => state?.userInfo
export const getUserName = (state: RootState): string => state?.userInfo.name
export const getUserId = (state: RootState): number => state?.userInfo.id
export const getUserStatus = (state: RootState): UserStatus => state?.userInfo.status

// export the reducer as default
export default userInfoSlice.reducer
