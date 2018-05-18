export const loadState = () => {
  try {
    const serializedState = window.localStorage.getItem('totallyMoneyState')
    return JSON.parse(serializedState)
  } catch (e) {
    return undefined
  }
}

export const saveState = (state) => {
  const { profile, selectedCards } = state
  const savedState = {
    profile,
    selectedCards,
  }
  const serializedState = JSON.stringify(savedState, null)
  window.localStorage.setItem('totallyMoneyState', serializedState)
}