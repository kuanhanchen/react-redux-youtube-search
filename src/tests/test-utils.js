import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {PersistGate} from 'redux-persist/lib/integration/react';
import storek from '../redux/store/store';
import {persistor} from '../redux/store/store';
// Import your own reducer
import reducer from '../redux/reducers'

function render(
  ui,
  {
    initialState,
    store=storek,
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={storek}>
    <PersistGate loading={null} persistor={persistor}>
    {children}
    </PersistGate>
    </Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }
