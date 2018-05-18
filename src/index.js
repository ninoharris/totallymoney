import React from 'react';
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { saveState } from './reducers/localStorage'
import App from './App'
import store from './configureStore'
import theme from './theme'

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)

store.subscribe(() => {
  saveState(store.getState())
})

registerServiceWorker();