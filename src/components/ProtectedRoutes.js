import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import SignIn from './SignIn'

function ProtectedRoutes() {
  function useAuth() {
    const user = { loggedIn: true }
    return user && user.loggedIn
  }

  const isAuth = useAuth()
  return isAuth ? <Outlet /> : <SignIn />
}

export default ProtectedRoutes
