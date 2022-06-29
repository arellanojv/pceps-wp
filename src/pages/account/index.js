import React, { useContext } from 'react'
import { Router } from '@reach/router'

import StateContext from '../../StateContext'

import Profile from './profile'
import Login from './login'
import NotFound from '../../pages/not-found'

const Account = () => {
  const appState = useContext(StateContext)
  const ViewComponent = appState.loggedIn ? Profile : Login

  return (
    <Router>
      <NotFound default />
      <ViewComponent path='/*' />
      {/* <ResetPasswordEmail path="/reset" /> */}
      {/* <ResetPassword path="/reset/:resetLogin/:resetKey" /> */}
    </Router>
  )
}

export default Account
