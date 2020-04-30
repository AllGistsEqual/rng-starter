import React, { useState } from 'react'
import { Text, TextInput, Button } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { userLogin } from '../../redux/actions/user.actions'
import BackgroundPage from '../../components/global/layout/BackgroundPage'
import backgroundImage from '../../../assets/bg_abstract_01.jpg'

const SceneLogin = ({ loginUser, isUserLoggedIn, storedUserName }) => {
    const [name, setName] = useState('')

    return (
        <BackgroundPage background={backgroundImage}>
            <Text>
                Login
            </Text>
            <TextInput
                style={{
                    height: 50, width: 200, borderColor: 'gray', borderWidth: 3, padding: 10, margin: 10,
                }}
                onChangeText={(text) => setName(text)}
                value={name}
            />
            <Button
                title="Press me"
                onPress={() => loginUser(name || 'Anon')}
            />

            { isUserLoggedIn ? (<Text>{`Welcome, ${storedUserName}!`}</Text>) : undefined}

        </BackgroundPage>
    )
}

SceneLogin.defaultProps = {
    storedUserName: '',
}

SceneLogin.propTypes = {
    loginUser: PropTypes.func.isRequired,
    isUserLoggedIn: PropTypes.bool.isRequired,
    storedUserName: PropTypes.string,
}

const mapStateToProps = (state) => ({
    storedUserName: state.user.name,
    isUserLoggedIn: state.user.isLoggedIn,
})

const mapDispatchToProps = (dispatch) => ({
    loginUser: (name) => dispatch(userLogin({ name })),
})

export default connect(mapStateToProps, mapDispatchToProps)(SceneLogin)
