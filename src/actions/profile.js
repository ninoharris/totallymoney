import * as types from '../reducers/types'
import { possibleStatuses } from '../reducers/options'

export const updateName = (name) => ({
  type: types.UPDATE_NAME,
  val: name,
})

export const updateIncome = (income) => {
  if(isNaN(income) || income < 0) {
    income = 0
  }
  return {
    type: types.UPDATE_INCOME,
    val: income,
  }
}

export const updateEmploymentStatus = (employmentStatus) => {
  // if not a valid status
  if(!possibleStatuses.some(status => status === employmentStatus)) {
    return null
  }
  return {
    type: types.UPDATE_EMPLOYMENT,
    val: employmentStatus,
  }
}