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

            <p className='mt-8'>
              Sign in, or create an account, if you would like to submit a bid
              or creat a purchase request. Lost your password?{' '}
              <Link
                to='reset'
                className='text-orange-500 underline hover:text-orange-700'
              >
                Reset it here
              </Link>
              .
            </p>
          </div>
          <div className='section login'>
            <div className='text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700'>
              <ul className='flex flex-wrap -mb-px'>
                <li className='flex-[0_1_50%]'>
                  {matchSignIn ? (
                    <Link
                      to=''
                      className='w-full inline-block p-4 text-orange-600 rounded-t-lg border-b-2 border-orange-600 active dark:text-orange-500 dark:border-orange-500'
                    >
                      Sign in
                    </Link>
                  ) : (
                    <Link
                      to=''
                      className='w-full inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                    >
                      Sign in
                    </Link>
                  )}
                </li>
                <li className='flex-[0_1_50%]'>
                  {matchCreateAccount ? (
                    <Link
                      to='create-account'
                      className='w-full inline-block p-4 text-orange-600 rounded-t-lg border-b-2 border-orange-600 active dark:text-orange-500 dark:border-orange-500'
                    >
                      Create Account
                    </Link>
                  ) : (
                    <Link
                      to='create-account'
                      className='w-full inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                    >
                      Create Account
                    </Link>
                  )}
                </li>
              </ul>
            </div>
            {/* <nav classNameName='tab-nav'>
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
