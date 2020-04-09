import React, { useState, useEffect } from 'react'
import {
    Text, View, Animated, StyleSheet,
} from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import DefaultPage from '../../components/DefaultPage'
import useInterval from '../../hooks'

const SceneDataCheck = ({ isUserLoggedIn, navigation }) => {
    const [count, setcount] = useState(0)

    useEffect(() => {
        const navigationTarget = isUserLoggedIn ? 'Home' : 'Login'
        setTimeout(() => {
            navigation.navigate(navigationTarget)
        }, 3000)
    }, [isUserLoggedIn])

    useInterval(() => {
        if (count < 200) { setcount(count + 1) }
        if (count >= 200) { setcount(0) }
    }, 10)

    return (
        <DefaultPage>
            <Text>
                Checking Data
            </Text>
            <View style={styles.progressBar}>
                <Animated.View style={{
                    ...styles.absoluteFill,
                    backgroundColor: '#FF7100',
                    left: `${count - Math.min(count, 100)}%`,
                    right: `${100 - Math.min(count, 100)}%`,
                }}
                />
            </View>
        </DefaultPage>
    )
}

const styles = StyleSheet.create({
    progressBar: {
        height: 20,
        marginTop: 20,
        width: 300,
        backgroundColor: 'white',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 5,
    },
    absoluteFill: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
})

SceneDataCheck.propTypes = {
    isUserLoggedIn: PropTypes.bool.isRequired,
    navigation: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    isUserLoggedIn: state.user.isLoggedIn,
})

export default connect(mapStateToProps)(SceneDataCheck)
