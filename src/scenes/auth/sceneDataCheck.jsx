import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Text, StyleSheet } from 'react-native'
import BackgroundPage from '../../components/global/layout/BackgroundPage'
import { initialiseApplication } from '../../redux/actions/application.actions'
import background from '../../../assets/bg_abstract_01.jpg'

const SceneDataCheck = ({ initApp, currentVersion }) => {
    const [timestamp] = useState(Date.now())

    useEffect(() => {
        initApp(timestamp)
    }, [timestamp])

    return (
        <BackgroundPage background={background}>
            <Text style={styles.headline}>
                Checking Data
            </Text>
            <Text>{`version: ${currentVersion}`}</Text>
        </BackgroundPage>
    )
}

const styles = StyleSheet.create({
    headline: {
        fontWeight: 'bold',
        fontSize: 23,
    },
})

SceneDataCheck.propTypes = {
    isUserLoggedIn: PropTypes.bool.isRequired,
    currentVersion: PropTypes.string.isRequired,
    initApp: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    isUserLoggedIn: state.user.isLoggedIn,
    currentVersion: state.application.version,
})

const mapDispatchToProps = (dispatch) => ({
    initApp: (timestamp) => dispatch(initialiseApplication(timestamp)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SceneDataCheck)
