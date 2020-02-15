import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import { connect } from 'react-redux'

const VersionTag = ({ applicationState: { version, name } }) => (
    <Text>{`${name} (v${version})`}</Text>
)

VersionTag.propTypes = {
    applicationState: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    applicationState: state.application,
})

export default connect(
    mapStateToProps,
)(VersionTag)
