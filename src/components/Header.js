import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import HeaderLoggedIn from './HeaderLoggedIn'
import HeaderLoggedOut from './HeaderLoggedOut'
import StateContext from '../StateContext'

function Header(props) {
  const appState = useContext(StateContext)

  return (
    <header className='flex-none relative z-50 text-sm leading-6 font-medium ring-1 ring-gray-900 ring-opacity-5 shadow-sm py-5 bg-white'>
      <nav
        aria-label='Global'
        className='max-w-container mx-auto px-4 sm:px-6 lg:px-8'
      >
        <div className='flex items-center flex-wrap sm:flex-nowrap'>
          <Link to='/' className='flex-none text-orange-600 text-2xl'>
            <span className='sr-only'>PCEPS</span>
            PCEPS
          </Link>
          <p className='hidden lg:block text-sm text-gray-500 font-normal xl:border-l xl:border-gray-200 ml-3 xl:ml-4 xl:pl-4 xl:py-0.5'>
            <span className='hidden xl:inline'>
              Committed to connecting end users and vendors fast
            </span>
            <span className='xl:hidden'>
              Committed to connecting end users and vendors fast
            </span>
          </p>

          {appState.loggedIn ? (
            <HeaderLoggedIn setLoggedIn={props.setLoggedIn} />
          ) : (
            <HeaderLoggedOut setLoggedIn={props.setLoggedIn} />
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header
