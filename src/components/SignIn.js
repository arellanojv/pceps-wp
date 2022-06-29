import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Page from './Page'
import Axios from 'axios'
function SignIn(props) {
  const [identifier, setIdentifier] = useState()
  const [password, setPassword] = useState()

  async function handleSubmit(e) {
    e.preventDefault()

    // await Axios.post('http://localhost:1337/api/auth/local/', {
    //   data: { identifier: 'test@test.com', password: 'Password' },
    // })
    //   .then((response) => {
    //     console.log('User profile', response.data.user)
    //     console.log('User token', response.data.jwt)
    //   })
    //   .catch((error) => {
    //     console.log('An error occurred:', error.response)
    //   })
    try {
      const response = await Axios.post(
        'http://localhost:1337/api/auth/local',
        {
          identifier,
          password,
        }
      )
      if (response.data) {
        localStorage.setItem('pcepsToken', response.data.jwt)
        localStorage.setItem('pcepsUsername', response.data.user.username)
      } else {
        console.log('Incorrect username/password.')
      }
    } catch (e) {
      console.log('there was a problem', e)
    }
  }

  return (
    <Page title='Sign In'>
      <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8'>
          <div>
            <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
              Sign in to your account
            </h2>
          </div>
          <form onSubmit={handleSubmit} className='mt-8 space-y-6'>
            <div className='rounded-md shadow-sm -space-y-px'>
              <div className='border-0'>
                <div className='mb-6'>
                  <label
                    htmlFor='email'
                    className='block mb-2 text-sm font-medium text-gray-900'
                  >
                    Email or Username
                  </label>
                  <input
                    onChange={(e) => setIdentifier(e.target.value)}
                    id='email-username'
                    name='email-username'
                    type='text'
                    autoComplete='email-username'
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

            <div className='flex items-center justify-between'>
              <div className='text-sm'>
                <Link
                  to='/signup'
                  className='font-medium text-orange-600 hover:text-orange-500'
                >
                  Sign up
                </Link>
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </Page>
  )
}

export default SignIn
