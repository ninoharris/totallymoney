import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { getAvailableCards } from '../selectors'
import { selectCard } from '../actions/cards'

import Card from './Card'

const Container = styled.div`
  display: flex;
  > div {
    width: 200px;
  }
`

const Cards = ({ cards, selectCard }) => {
  if(!cards) return <div>Enter in your details to find out which cards you can apply for!</div>
  return (
    <Container>
      {cards.map(card => <Card key={card.cardName} {...card} handleSelect={selectCard} />)}
    </Container>
  )
}

const mapStateToProps = (state) => ({
  cards: getAvailableCards(state)
})

export default connect(
  mapStateToProps,
  {
    selectCard
  }
)(Cards)