import { Link, Router, useMatch } from '@gatsbyjs/reach-router'
import Page from '../../../components/Page'

import LoginForm from './login-form'
import RegisterForm from './register-form'

const Login = () => {
  const matchSignIn = useMatch('/account')
  const matchCreateAccount = useMatch('/account/create-account')

  return (
    <Page title='Account'>
      <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8'>
          <div>
            <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
              Sign in to your account
            </h2>
          </div>
          <div className='section login'>
            <div class='text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700'>
              <ul class='flex flex-wrap -mb-px'>
                <li class='mr-2'>
                  {matchSignIn ? (
                    <Link
                      to=''
                      class='inline-block p-4 text-orange-600 rounded-t-lg border-b-2 border-orange-600 active dark:text-orange-500 dark:border-orange-500'
                    >
                      Sign in
                    </Link>
                  ) : (
                    <Link
                      to=''
                      class='inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                    >
                      Sign in
                    </Link>
                  )}
                </li>
                <li class='mr-2'>
                  {matchCreateAccount ? (
                    <Link
                      to='create-account'
                      class='inline-block p-4 text-orange-600 rounded-t-lg border-b-2 border-orange-600 active dark:text-orange-500 dark:border-orange-500'
                    >
                      Create Account
                    </Link>
                  ) : (
                    <Link
                      to='create-account'
                      class='inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                    >
                      Create Account
                    </Link>
                  )}

                  {/* <a
                    href='#'
                    class='inline-block p-4 text-orange-600 rounded-t-lg border-b-2 border-orange-600 active dark:text-orange-500 dark:border-orange-500'
                    aria-current='page'
                  >
                    Create Account
                  </a> */}
                </li>
              </ul>
            </div>
            {/* <nav className='tab-nav'>
              <Link to=''>Sign in</Link>
              <Link to='create-account'>Create Account</Link>
            </nav> */}

            <Router primary={false}>
              <LoginForm path='/' />
              <RegisterForm path='/create-account' />
            </Router>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default Login
