import { Link, Router } from '@gatsbyjs/reach-router'

import LoginForm from './login-form'
import RegisterForm from './register-form'

const Login = () => {
  return (
    <div className='section login'>
      <nav className='tab-nav'>
        <Link to=''>Sign in</Link>
        <Link to='create-account'>Create Account</Link>
      </nav>
      <Router primary={false}>
        <LoginForm path='/' />
        <RegisterForm path='/create-account' />
      </Router>
    </div>
  )
}

export default Login
