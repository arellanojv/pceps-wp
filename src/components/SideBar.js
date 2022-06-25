import React, { useEffect } from 'react'

function SideBar() {
  return (
    <div className='hidden md:block w-64 bg-gray-50 border-r border-gray-200 px-4 sm:px-6 lg:px-8x'>
      <div className='mb-10 mt-4'>
        <ul>
          <li className='mt-12 lg:mt-8'>
            <h5 className='mb-8 lg:mb-3 font-semibold text-slate-900'>
              PR Categories
            </h5>
            <ul className='space-y-6 lg:space-y-2 border-l border-slate-200'>
              <li>
                <a
                  className='text-xs text-gray tracking-widest block border-l pl-4 -ml-px border-transparent hover:border-slate-400 text-slate-700 hover:text-slate-900'
                  href='/docs/editor-setup'
                >
                  All
                </a>
              </li>
              <li>
                <a
                  className='text-xs text-gray tracking-widest block border-l pl-4 -ml-px border-transparent hover:border-slate-400 text-slate-700 hover:text-slate-900'
                  href='/docs/editor-setup'
                >
                  Urgent PRs
                </a>
              </li>
              <li>
                <a
                  className='text-xs text-gray tracking-widest block border-l pl-4 -ml-px border-transparent hover:border-slate-400 text-slate-700 hover:text-slate-900'
                  href='/docs/editor-setup'
                >
                  Agriculture
                </a>
              </li>
              <li>
                <a
                  className='text-xs text-gray tracking-widest block border-l pl-4 -ml-px border-transparent hover:border-slate-400 text-slate-700 hover:text-slate-900'
                  href='/docs/editor-setup'
                >
                  Construction Mats
                </a>
              </li>
              <li>
                <a
                  className='text-xs text-gray tracking-widest block border-l pl-4 -ml-px border-transparent hover:border-slate-400 text-slate-700 hover:text-slate-900'
                  href='/docs/editor-setup'
                >
                  Office Supplies
                </a>
              </li>
              <li>
                <a
                  className='text-xs text-gray tracking-widest block border-l pl-4 -ml-px border-transparent hover:border-slate-400 text-slate-700 hover:text-slate-900'
                  href='/docs/editor-setup'
                >
                  Mechanical
                </a>
              </li>
              <li>
                <a
                  className='text-xs text-gray tracking-widest block border-l pl-4 -ml-px border-transparent hover:border-slate-400 text-slate-700 hover:text-slate-900'
                  href='/docs/editor-setup'
                >
                  Electrical
                </a>
              </li>
              <li>
                <a
                  className='text-xs text-gray tracking-widest block border-l pl-4 -ml-px border-transparent hover:border-slate-400 text-slate-700 hover:text-slate-900'
                  href='/docs/editor-setup'
                >
                  Plumbing
                </a>
              </li>
              <li>
                <a
                  className='text-xs text-gray tracking-widest block border-l pl-4 -ml-px border-transparent hover:border-slate-400 text-slate-700 hover:text-slate-900'
                  href='/docs/editor-setup'
                >
                  Fire Protection
                </a>
              </li>
              <li>
                <a
                  className='text-xs text-gray tracking-widest block border-l pl-4 -ml-px border-transparent hover:border-slate-400 text-slate-700 hover:text-slate-900'
                  href='/docs/editor-setup'
                >
                  CCTV / Security
                </a>
              </li>
            </ul>
          </li>

          <li className='mt-12 lg:mt-8'>
            <h5 className='mb-8 lg:mb-3 font-semibold text-slate-900'>
              Location
            </h5>
            <ul className='space-y-6 lg:space-y-2 border-l border-slate-200 dark:border-slate-800'>
              <li>
                <a
                  className='text-xs text-gray tracking-widest block border-l pl-4 -ml-px border-transparent hover:border-slate-400 text-slate-700 hover:text-slate-900'
                  href='/docs/editor-setup'
                >
                  Badian
                </a>
              </li>
              <li>
                <a
                  className='text-xs text-gray tracking-widest block border-l pl-4 -ml-px border-transparent hover:border-slate-400 text-slate-700 hover:text-slate-900'
                  href='/docs/editor-setup'
                >
                  Balamban
                </a>
              </li>
              <li>
                <a
                  className='text-xs text-gray tracking-widest block border-l pl-4 -ml-px border-transparent hover:border-slate-400 text-slate-700 hover:text-slate-900'
                  href='/docs/editor-setup'
                >
                  Carmen
                </a>
              </li>
              <li>
                <a
                  className='text-xs text-gray tracking-widest block border-l pl-4 -ml-px border-transparent hover:border-slate-400 text-slate-700 hover:text-slate-900'
                  href='/docs/editor-setup'
                >
                  Catmon
                </a>
              </li>
              <li>
                <a
                  className='text-xs text-gray tracking-widest block border-l pl-4 -ml-px border-transparent hover:border-slate-400 text-slate-700 hover:text-slate-900'
                  href='/docs/editor-setup'
                >
                  Cebu City
                </a>
              </li>
            </ul>
          </li>

          <li className='mt-12 lg:mt-8'>
            <h5 className='mb-8 lg:mb-3 font-semibold text-slate-900'>
              Bidder Required
            </h5>
            <ul className='space-y-6 lg:space-y-2 border-l border-slate-200 dark:border-slate-800'>
              <li>
                <a
                  className='text-xs text-gray tracking-widest block border-l pl-4 -ml-px border-transparent hover:border-slate-400 text-slate-700 hover:text-slate-900'
                  href='/docs/editor-setup'
                >
                  Verified
                </a>
              </li>
              <li>
                <a
                  className='text-xs text-gray tracking-widest block border-l pl-4 -ml-px border-transparent hover:border-slate-400 text-slate-700 hover:text-slate-900'
                  href='/docs/editor-setup'
                >
                  Level 1
                </a>
              </li>
              <li>
                <a
                  className='text-xs text-gray tracking-widest block border-l pl-4 -ml-px border-transparent hover:border-slate-400 text-slate-700 hover:text-slate-900'
                  href='/docs/editor-setup'
                >
                  Level 2
                </a>
              </li>
              <li>
                <a
                  className='text-xs text-gray tracking-widest block border-l pl-4 -ml-px border-transparent hover:border-slate-400 text-slate-700 hover:text-slate-900'
                  href='/docs/editor-setup'
                >
                  Level 3
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar
