import { useState } from 'react'
import PasswordStrengthBar from 'react-password-strength-bar'

import { useRegistration } from '../../../hooks'
import Page from '../../../components/Page'

export const RegisterForm = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { register, error, status } = useRegistration()
  const [passwordError, setPasswordError] = useState('')

  const onRegister = (e) => {
    e.preventDefault()
    setPasswordError('')
    if (username.length === 0) {
      setPasswordError('Please enter a username.')
      return
    }
    if (email.length === 0) {
      setPasswordError('Please enter your email address.')
      return
    }
    if (password.length === 0) {
      setPasswordError('Please enter a password.')
      return
    }
    register(username, email, password)
  }

  return (
    <Page title='Register'>
      <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8'>
          <div>
            <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
              Register
            </h2>
          </div>
          <form onSubmit={onRegister} className='mt-8 space-y-6'>
            {(error || passwordError) && (
              <div className='error-notice'>
                <div
                  className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative'
                  role='alert'
                >
                  <span className='block sm:inline'>
                    {passwordError || error}
                  </span>
                </div>
              </div>
            )}
            <div className='rounded-md shadow-sm -space-y-px'>
              <div className='border-0'>
                <div className='mb-6'>
                  <label
                    htmlFor='email'
                    className='block mb-2 text-sm font-medium text-gray-900'
                  >
                    Username
                  </label>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    id='email'
                    name='email'
                    type='text'
                    autoComplete='email'
                    className='border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                    placeholder='Your username'
                  />
                </div>

                <div className='mb-6'>
                  <label
                    htmlFor='email'
                    className='block mb-2 text-sm font-medium text-gray-900'
                  >
                    Email
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    id='email'
                    name='email'
                    type='text'
                    autoComplete='email'
                    className='border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                    placeholder='you@example.com'
                  />
                </div>
                <div className='mb-6'>
                  <label
                    htmlFor='password'
                    className='block mb-2 text-sm font-medium text-gray-900'
                  >
                    Password
                  </label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type='password'
                    id='password'
                    autoComplete='password'
                    className='border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                    placeholder='Your password'
                  />
                </div>
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </Page>
  )
}

export default RegisterForm
