import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='w-full max-w-container mx-auto border-t py-10 text-center text-sm text-gray-500 sm:flex sm:items-center sm:justify-center'>
      <p>
        Copyright &copy; {new Date().getFullYear()} PCEPS. All rights reserved.
      </p>
      <p className='mt-2 sm:mt-0 sm:ml-3 sm:border-l sm:border-gray-200 sm:pl-3'>
        {/* <Link to='/privacy-policy' className='hover:text-orange-400'> */}
        Privacy Policy
        {/* </Link> */}
      </p>
    </footer>
  )
}

export default Footer
