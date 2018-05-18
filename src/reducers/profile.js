import * as types from './types'
import { combineReducers } from 'redux'

const title = (state = '', action) => {
  switch (action.type) {
    case types.UPDATE_TITLE:
      return action.val
    default:
      return state
  }
}

const fullName = (state = '', action) => {
  switch (action.type) {
    case types.UPDATE_NAME:
      return action.val
    default:
      return state
  }
}

const dob = (state = '', action) => {
  switch (action.type) {
    case types.UPDATE_DOB:
      return action.val
    default:
      return state
  }
}

const income = (state = 0, action) => {
  switch (action.type) {
    case types.UPDATE_INCOME:
      return action.val
    default:
      return state
  }
}

const employmentStatus = (state = 'employed', action) => {
  switch (action.type) {
    case types.UPDATE_EMPLOYMENT:
      return action.val
    default:
      return state
  }
}

const profile = combineReducers({
  title,
  fullName,
  dob,
  income,
  employmentStatus
})

export default profile