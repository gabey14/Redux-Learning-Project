import React from 'react'
// components
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
// redux stuff
// store - stores data, think of it like a state
// reducer - function that used to update the store
// takes two arguments - state and action
// state - old state/state before update
// action - what happened/what update
// return updated or old state
import { createStore } from 'redux'
import reducer from './reducer'
// dispatch method - send actions to redux store
// actions (object) - MUST HAVE TYPE PROPERTY - what kind of action
// Dont mutate the state - redux built on immutablity

// store.getState() - get current state

// react-redux - Provider - wraps app, connect - used in components

import { Provider } from 'react-redux'

//store
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  )
}

export default App
