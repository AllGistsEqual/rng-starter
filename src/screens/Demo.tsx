import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { useReduxDispatch, useReduxSelector } from '@Store'
import { getUserInfo, setUserInfo } from '@Store/ducks/userInfoSlice'

export default function Demo() {
    const dispatch = useReduxDispatch()
    const { name, id } = useReduxSelector(getUserInfo)

    useEffect(() => {
        if (id === 0) {
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
        <View style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
            <Text>{`${name} | ${id || 'loading'} `}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
