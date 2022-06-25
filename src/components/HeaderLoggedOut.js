import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import DispatchContext from '../DispatchContext'

function HeaderLoggedOut() {
  const appDispatch = useContext(DispatchContext)

  return (
    <div className='w-full flex-none mt-4 sm:mt-0 sm:w-auto sm:ml-auto flex items-center'>
      {' '}
      <a href='/' className=''>
        {/* <abbr className="sm:hidden" title="Documentation">Docs</abbr> */}
        <button className='rounded-md bg-orange-600 p-2 text-white hover:drop-shadow-lg'>
          Receive PR Alert
        </button>
      </a>
      <a href='/' className='mx-6'>
        {' '}
        <button className='rounded-md bg-white p-2 text-orange-600 border-2 border-orange-600 hover:drop-shadow-lg'>
          Submit a Bid
        </button>
      </a>
      <Link
        to='/signin'
        className='group border-l pl-6 border-gray-200 hover:text-orange-600 flex items-center'
      >
        Sign in
        <svg
          aria-hidden='true'
          width='11'
          height='10'
          fill='none'
          className='flex-none ml-1.5 text-gray-400 group-hover:text-orange-600'
        >
          <path
            d='M5.593 9.638L10.232 5 5.593.36l-.895.89 3.107 3.103H0v1.292h7.805L4.698 8.754l.895.884z'
            fill='currentColor'
          ></path>
        </svg>
      </Link>
    </div>
  )
}

export default HeaderLoggedOut
