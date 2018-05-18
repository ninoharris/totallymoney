import * as types from './types'
import { combineReducers } from 'redux'

import profile from './profile'

const selectedCards = (state = {}, action) => {
  switch(action.type) {
    case types.UPDATE_CARD_SELECTION:
      return { ...state, [action.cardName]: action.selected}
    case types.RESET_CARD_SELECTION:
      return {}
    default:
      return state
  }
}

const rootReducer = combineReducers({
  profile,
  selectedCards,
})

export default rootReducer