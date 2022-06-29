import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'

import { useReduxDispatch, useReduxSelector } from '@Store'
import { getUserInfo, setUserInfo } from '@Store/ducks/userInfoSlice'
import DefaultPage from '@Components/layout/DefaultPage'

export default function Demo() {
    const dispatch = useReduxDispatch()
    const { name, id } = useReduxSelector(getUserInfo)
    const [newUser, setNewUser] = useState<boolean>(false)

    useEffect(() => {
        if (id === 0) {
            setNewUser(true)
            const random4digits = Math.floor(Math.random() * 8999 + 1000)
            const timestamp = Math.floor((Date.now() - new Date(2022, 2, 23).getTime()) / 1000)
            const userId = timestamp * 10000 + random4digits
            dispatch(
                setUserInfo({
                    name: `Guest ${random4digits}`,
                    id: userId,
                    status: 'guest',
                }),
            )
        }
    }, [id, dispatch])

    return (
        <DefaultPage>
            <Text>Open up App.tsx to start working on your app!</Text>
            <Text>{`WELCOME${!newUser ? ' BACK' : ''} `}</Text>
            <Text>{`${name} | ${id || 'loading'} `}</Text>
        </DefaultPage>
    )
}
