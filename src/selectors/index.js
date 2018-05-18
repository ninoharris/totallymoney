import { createSelector } from 'reselect'
import cards from '../reducers/cards'

export const getProfile = state => state.profile
export const getSelectedCards = state => state.selectedCards

export const getAvailableCards = createSelector(
  getProfile,
  getSelectedCards,
  (profile, selectedCards) => {
    console.log('plz show the right selected cards', selectedCards)
    const availableCards = cards.filter(card => {
      return card.conditions(profile)
    })
    const cardsWithSelection = availableCards.map(card => {
      const selected = selectedCards[card.cardName] ? true : false
      return {
        ...card, selected
      }
    })
    console.log('cardsWithSelection issssss....', cardsWithSelection)
    return cardsWithSelection
  }
)

export const getCreditTotal = createSelector(
  getAvailableCards,
  (cards) => {
    return cards.reduce((total, currCard) => {
      if(currCard.selected) {
        total += currCard.credit
      }
      return total
    }, 0)
  }
)