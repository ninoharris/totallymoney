import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import { loadState } from './reducers/localStorage'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middleware = []

const initialState = {
  ...loadState()
}

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
)


export default store