import React from 'react'
import LoadingIndicator from './LoadingIndicator'
import PropTypes from 'prop-types'

const Wait = ({ isWaiting, children }) => (
  isWaiting
    ? <LoadingIndicator />
    : children
)

Wait.propTypes = {
  isWaiting: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired
}

export default Wait