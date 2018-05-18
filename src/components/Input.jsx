import React from 'react'
import styled from 'styled-components'
import { desaturate } from 'polished'
import PropTypes from 'prop-types'

const Input = ({ onChange, val, placeholder }) => {
  return (
    <InputElement onChange={onChange} placeholder={placeholder} value={val} />
  )
}

export default Input