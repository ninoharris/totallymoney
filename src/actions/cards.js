import * as types from '../reducers/types'
import cards from '../reducers/cards'

export const selectCard = (cardName, selected = false) => {
  // if card doesnt exist, ignore
  if(!cards.some(card => card.cardName === cardName)) return {
    type: types.UPDATE_CARD_SELECTION_FAILURE,
    cardName
  }

  return {
    type: types.UPDATE_CARD_SELECTION,
    cardName,
    selected,
  }
}

export const resetCards = () => ({
  type: types.RESET_CARD_SELECTION,
  val: true
})