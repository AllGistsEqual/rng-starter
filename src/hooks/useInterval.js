/* created by Dan Abramov
* src: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
* slightly adjusted for react native + react navigation by Konrad Abe (AllBitsEqual)
* */

import { useEffect, useCallback, useRef } from 'react'
import { useFocusEffect } from '@react-navigation/native'

function useInterval(callback, delay) {
    const savedCallback = useRef()

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback
    }, [callback])

    // Set up the interval.
    useFocusEffect(
        useCallback(() => {
            function tick() {
                savedCallback.current()
            }

            if (delay === null) { return () => {} }

            const id = setInterval(tick, delay)
            return () => clearInterval(id)
        }, [delay])
    )
}

export default useInterval
