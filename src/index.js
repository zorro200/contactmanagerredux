import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import AddPersonForm from './components/AddPersonForm/AddPersonForm'
import ContactList from './components/ContactList/ContactList'
import { createStore } from 'redux'
// React-redux library binds React with Redux,
// allowing components to read data from a Redux store
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals'

const initialState = {
  contacts: []
}

// The reducer function will handle those actions that will change the store content,
// the state info with it and return a new state object.
function reducer (state = initialState, action) {
  switch (action.type) {
    case 'ADD_PERSON':
      return {
        // We concat the current state with the new info and return a new one
        ...state,
        contacts: [...state.contacts, action.data]
      }

    default:
      return state
  }
}

/*
  The store will:
  Have a global state
  Allow access to state via getState()
  Allow state to be updated via dispatch functions (actions)
*/
const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    {/* Provider takes the store as an attribute and makes it available to its children components */}
    <Provider store={store}>
      <h1>Contact Manager</h1>
      <AddPersonForm />
      <ContactList />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
