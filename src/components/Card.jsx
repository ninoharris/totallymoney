import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { desaturate } from 'polished'

const Container = styled.div`
  border: 1px solid rgba(0,0,0,0.1);
  min-width: 170px;
  padding: 2rem 1.2rem;
`
const Row = styled.div`
  display: flex;
  justify-content: ${p => p.center ? 'center' : 'space-between'};
`
const SelectCardButton = styled.button`
  background: ${p => p.selected ? p.theme.green : desaturate(0.4, p.theme.green)};
  font-size: 1.2rem;
  text-transform: uppercase;
  padding: 0.6rem 1.1rem;
  color: ${p => p.theme.white};
  border: 0;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.07s;
  &:hover {
    transform: scale(1.04);
  }
`

const Card = ({
  handleSelect,
  cardName,
  description,
  apr,
  balanceTransferOfferDuration,
  purchaseOfferDuration,
  credit,
  selected,
}) => {
  return (
    <Container>
      <h3>{cardName}</h3>
      <p>{description}</p>
      <Row>
        <strong>APR</strong>
        <span>{apr}%</span>
      </Row>
      <Row>
        <strong>Balance transfer offer duration</strong>
        <span>{balanceTransferOfferDuration}</span>
      </Row>
      <Row>
        <strong>Purchase offer duration</strong>
        <span>{purchaseOfferDuration}</span>
      </Row>
      <Row center={true}>
        <SelectCardButton selected={selected} onClick={() => handleSelect(cardName, !selected)}>
          {selected ? 'Unselect card' : 'Select card' }
        </SelectCardButton>
      </Row>
    </Container>
  )
}

export default Card