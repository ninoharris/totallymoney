import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { getCreditTotal } from '../selectors'

const Container = styled.div`
  padding: 0.7rem 0;
  font-weight: bold;
`

const CreditTotal = ({ total = 0}) => (
  <Container>
    With your choice of selected cards, your total available credit is: £{total}
  </Container>
)

const mapStateToProps = (state) => ({
  total: getCreditTotal(state)
})

export default connect(mapStateToProps)(CreditTotal)