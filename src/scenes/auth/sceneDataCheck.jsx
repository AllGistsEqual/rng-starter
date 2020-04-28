import React, { useState, useEffect } from 'react'
import {
    Text, View, Animated, StyleSheet,
} from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import BackgroundPage from '../../components/global/layout/BackgroundPage'
import useInterval from '../../hooks'
import { initialiseApplication } from '../../redux/actions/application.actions'
import background from '../../../assets/bg_abstract_01.jpg'

const SceneDataCheck = ({ isUserLoggedIn, initApp, navigation }) => {
    const [count, setCount] = useState(0)
    const [timestamp] = useState(Date.now())

    useEffect(() => {
        initApp(timestamp)
    }, [initApp, timestamp])

    useEffect(() => {
        const navigationTarget = isUserLoggedIn ? 'Home' : 'Login'
        setTimeout(() => {
            navigation.navigate(navigationTarget)
        }, 3000)
    }, [isUserLoggedIn])

    useInterval(() => {
        if (count < 200) { setCount(count + 1) }
        if (count >= 200) { setCount(0) }
    }, 10)

    return (
        <BackgroundPage background={background}>
            <Text style={styles.headline}>
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
        </BackgroundPage>
    )
}

const styles = StyleSheet.create({
    headline: {
        fontWeight: 'bold',
        fontSize: 23,
    },
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
    initApp: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    isUserLoggedIn: state.user.isLoggedIn,
})

const mapDispatchToProps = (dispatch) => ({
    initApp: (timestamp) => dispatch(initialiseApplication(timestamp)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SceneDataCheck)
