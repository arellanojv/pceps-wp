import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { useImmerReducer } from 'use-immer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Router } from '@reach/router'

import Logo from './assets/altafino.svg'
import './app.styles.scss'
import './index.scss'

// Hooks
import { useAppApolloClient } from './hooks'

import StateContext from './StateContext'
import DispatchContext from './DispatchContext'
import { AuthContextProvider } from './context'

//My Components
import Header from './components/Header'
import HomeGuest from './components/HomeGuest'
import Footer from './components/Footer'
import PrivacyPolicy from './components/PrivacyPolicy'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Dashboard from './components/Dashboard'
import { ApolloProvider } from '@apollo/client'
import CreatePr from './components/CreatePr'
import ProtectedRoutes from './components/ProtectedRoutes'

import Account from './pages/account'

function App() {
  const client = useAppApolloClient()

  const initialState = {
    loggedIn: Boolean(localStorage.getItem('complexappToken')),
    flashMessages: [],
  }

  function ourReducer(draft, action) {
    switch (action.type) {
      case 'login':
        draft.loggedIn = true
        return
      case 'logout':
        draft.loggedIn = false
        return
      case 'flashMessage':
        draft.flashMessages.push(action.value)
        return
    }
  }
  const [state, dispatch] = useImmerReducer(ourReducer, initialState)

  return (
    <AuthContextProvider>
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          <ApolloProvider client={client}>
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path='/' element={<HomeGuest />} />
                <Route element={<ProtectedRoutes />}>
                  <Route path='/app' element={<Dashboard />} />
                  <Route
                    path='/create-purchase-request'
                    element={<CreatePr />}
                  />
                </Route>
                <Route path='/privacy-policy' element={<PrivacyPolicy />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/signin' element={<SignIn />} />
              </Routes>
              <Footer />
            </BrowserRouter>
            <Router primary={false}>
              <Account path='/account/*' />
            </Router>
          </ApolloProvider>
        </DispatchContext.Provider>
      </StateContext.Provider>
    </AuthContextProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
