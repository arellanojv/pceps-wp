import { Link } from '@gatsbyjs/reach-router'

import { useAuth } from '../../hooks'

const Navlink = (props) => (
  <Link
    {...props}
    getProps={({ isCurrent, isPartiallyCurrent }) => {
      return {
        className:
          isCurrent || isPartiallyCurrent ? 'page page--current' : 'page',
      }
    }}
  />
)

export const SiteNav = () => {
  const { isLoggedIn, logout } = useAuth()

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
        to='/account'
        className='group border-l pl-6 border-gray-200 hover:text-orange-600 flex items-center'
      >
        {isLoggedIn ? 'Account' : 'Sign in'}
      </Link>
      {isLoggedIn && (
        <a
          href='/'
          onClick={logout}
          className='group pl-6 hover:text-orange-600 flex items-center'
        >
          Logout
        </a>
      )}
    </div>
  )
}

export default SiteNav
