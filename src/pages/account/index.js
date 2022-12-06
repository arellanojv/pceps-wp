import { Router } from '@gatsbyjs/reach-router'

import { useAuth } from '../../hooks'
import Profile from './profile'
import Login from './login'
import { ResetPasswordEmail, ResetPassword } from './reset'
import NotFound from '../../pages/not-found'

const Account = () => {
  const { isLoggedIn } = useAuth()
  const ViewComponent = isLoggedIn ? Profile : Login
  console.log('ISLOOGEDIN?', isLoggedIn)
  return (
    <Router>
      <NotFound default />
      <ViewComponent path='/*' />
      <ResetPasswordEmail path='/reset' />
      <ResetPassword path='/reset/:resetLogin/:resetKey' />
    </Router>
  )
}

export default Account
