import React, { useEffect } from 'react'
import Page from './Page'
import { gql, useQuery } from '@apollo/client'

const GET_ALL_PURCHASE_REQUESTS = gql`
  query NewQuery {
    purchaseRequests {
      nodes {
        date
        deadline
        dateGmt
        id
        pRTitle
        description
        zip
        streetAddress
        pRCategories {
          nodes {
            name
            pRCategoryId
          }
        }
      }
    }
  }
`

function HomeGuest() {
  const { loading, error, data } = useQuery(GET_ALL_PURCHASE_REQUESTS)

  console.log('PR DATA HERE', data)

  return (
    <Page title='Welcome! | PCEPS' wide={true}>
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

      <div className='flex-1'>
        <main>
          <div className='p-5 h-screen bg-gray-100'>
            <h5 className='mb-8 lg:mb-3 font-semibold text-slate-900'>
              PR (Purchase Requests in Consolacion, Cebu)
            </h5>

            {/* Pagination */}
            <div className='px-4 py-3 flex items-center justify-between sm:px-6'>
              <div className='flex-1 flex justify-between sm:hidden'>
                <a
                  href='#'
                  className='relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
                >
                  {' '}
                  Previous{' '}
                </a>
                <a
                  href='#'
                  className='ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
                >
                  {' '}
                  Next{' '}
                </a>
              </div>
              <div className='hidden sm:flex-1 sm:flex sm:items-center sm:justify-between'>
                <div>
                  <p className='text-xs text-gray-700'>
                    Showing
                    <span className='font-medium'>1</span>
                    to
                    <span className='font-medium'>10</span>
                    of
                    <span className='font-medium'>97</span>
                    results
                  </p>
                </div>
                <div>
                  <nav
                    className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px'
                    aria-label='Pagination'
                  >
                    <a
                      href='#'
                      className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-xs font-medium text-gray-500 hover:bg-gray-50'
                    >
                      <span className='sr-only'>Previous</span>
                      {/* Heroicon name: solid/chevron-left */}
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          fillRule='evenodd'
                          d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </a>
                    {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
                    <a
                      href='#'
                      aria-current='page'
                      className='z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-xs font-medium'
                    >
                      {' '}
                      1{' '}
                    </a>
                    <a
                      href='#'
                      className='bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-xs font-medium'
                    >
                      {' '}
                      2{' '}
                    </a>
                    <a
                      href='#'
                      className='bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-xs font-medium'
                    >
                      {' '}
                      3{' '}
                    </a>
                    <span className='relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-xs font-medium text-gray-700'>
                      {' '}
                      ...{' '}
                    </span>
                    <a
                      href='#'
                      className='bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-xs font-medium'
                    >
                      {' '}
                      8{' '}
                    </a>
                    <a
                      href='#'
                      className='bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-xs font-medium'
                    >
                      {' '}
                      9{' '}
                    </a>
                    <a
                      href='#'
                      className='bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-xs font-medium'
                    >
                      {' '}
                      10{' '}
                    </a>
                    <a
                      href='#'
                      className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-xs font-medium text-gray-500 hover:bg-gray-50'
                    >
                      <span className='sr-only'>Next</span>
                      {/* Heroicon name: solid/chevron-right */}
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          fillRule='evenodd'
                          d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </a>
                  </nav>
                </div>
              </div>
            </div>

            <div className='overflow-auto rounded-lg shadow hidden md:block'>
              <table className='w-full'>
                <thead className='bg-opacity-50 border-transparen'>
                  <tr>
                    <th className='p-3 text-sm font-semibold tracking-wide text-left'>
                      Purchase Request
                    </th>
                    <th className='w-64 p-3 text-sm font-semibold tracking-wide text-left'>
                      Company
                    </th>
                    <th className='w-64 p-3 text-sm font-semibold tracking-wide text-left'>
                      Location
                    </th>
                    <th className='w-64 p-3 text-sm font-semibold tracking-wide text-left'>
                      Date Posted
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-100'>
                  <tr className='bg-green-100 hover:drop-shadow-md'>
                    {/* <a className='hover:cursor-pointer' href='#'> */}
                    <td className='p-3'>
                      <span className='text-sm font-bold text-blue-500 whitespace-nowrap'>
                        <a className='hover:cursor-pointer'>
                          Supply of 16 Channel CCTV System for Warehouse
                        </a>
                      </span>
                      <p className='mb-0.5 text-xs text-gray-500'>
                        Budget: PHP 150,000.00
                      </p>
                      <div className='flex'>
                        <div className='rounded-full h-3 w-3 bg-yellow-600 mt-1'></div>
                        <h6 className='ml-1 text-xs text-gray-500 mt-0.5'>
                          Verified Bidders Only
                        </h6>
                      </div>
                      <div className='flex'>
                        <div className='rounded-full h-3 w-3 bg-red-600 mt-1'></div>
                        <h6 className='ml-1 text-xs text-gray-500 mt-0.5'>
                          Level 2 Bidders
                        </h6>
                      </div>
                    </td>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      <div className='flex'>
                        <svg
                          className='fill-green-600 h-5 w-5 mt-1.5'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path
                            fillRule='evenodd'
                            d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                            clipRule='evenodd'
                          />
                        </svg>
                        <span className='p-1.5 text-sm'>MCPI Corporation</span>
                      </div>
                    </td>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      <span className='text-sm text-gray-700 font-bold'>
                        Consolacion, Cebu
                      </span>
                      <p className='mb-0.5 text-xs text-gray-500'>
                        Tugbungan, Consolacion, Cebu
                      </p>
                      <p className='mb-0.5 text-xs text-gray-500'>
                        Established in 1980
                      </p>
                      <p className='mb-0.5 text-xs text-gray-500'>
                        100-500 Employees
                      </p>
                    </td>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      Featured
                    </td>
                    {/* </a> */}
                  </tr>
                  <tr className='bg-yellow-50'>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      <span className='text-sm font-bold text-blue-500 whitespace-nowrap'>
                        <a className='hover:cursor-pointer'>
                          Service Cleaning of 10 Units Window Type Aircon
                        </a>
                      </span>
                      <p className='mb-0.5 text-xs text-gray-500'>
                        Budget: PHP 3,000.00
                      </p>
                      <div className='flex'>
                        <div className='rounded-full h-3 w-3 bg-yellow-600 mt-1'></div>
                        <h6 className='ml-1 text-xs text-gray-500 mt-0.5'>
                          Verified Bidders Only
                        </h6>
                      </div>
                      <div className='flex'>
                        <div className='rounded-full h-3 w-3 bg-red-600 mt-1'></div>
                        <h6 className='ml-1 text-xs text-gray-500 mt-0.5'>
                          Level 2 Bidders
                        </h6>
                      </div>
                    </td>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      <div className='flex'>
                        <svg
                          className='fill-green-600 h-5 w-5 mt-1.5'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path
                            fillRule='evenodd'
                            d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                            clipRule='evenodd'
                          />
                        </svg>
                        <span className='p-1.5 text-sm'>BMEG Corporation</span>
                      </div>
                    </td>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      <span className='text-sm text-gray-700 font-bold'>
                        Consolacion, Cebu
                      </span>
                      <p className='mb-0.5 text-xs text-gray-500'>
                        Tayud, Consolacion, Cebu
                      </p>
                      <p className='mb-0.5 text-xs text-gray-500'>
                        Established in 1990
                      </p>
                      <p className='mb-0.5 text-xs text-gray-500'>
                        300-800 Employees
                      </p>
                    </td>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      Urgent
                    </td>
                  </tr>
                  <tr className='bg-yellow-50'>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      <span className='text-sm font-bold text-blue-500 whitespace-nowrap'>
                        <a className='hover:cursor-pointer'>
                          Supply of Office Chairs and Tables
                        </a>
                      </span>
                      <p className='mb-0.5 text-xs text-gray-500'>
                        Budget: PHP 50,000.00
                      </p>
                      <div className='flex'>
                        <div className='rounded-full h-3 w-3 bg-red-600 mt-1'></div>
                        <h6 className='ml-1 text-xs text-gray-500 mt-0.5'>
                          Level 1 Bidders
                        </h6>
                      </div>
                    </td>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      <div className='flex'>
                        <svg
                          className='fill-green-600 h-5 w-5 mt-1.5'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path
                            fillRule='evenodd'
                            d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                            clipRule='evenodd'
                          />
                        </svg>
                        <span className='p-1.5 text-sm'>
                          Sta. Lucia Realty Inc.
                        </span>
                      </div>
                    </td>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      <span className='text-sm text-gray-700 font-bold'>
                        Consolacion, Cebu
                      </span>
                      <p className='mb-0.5 text-xs text-gray-500'>
                        Poblacion, Oriental <br />
                        Consolacion, Cebu
                      </p>
                      <p className='mb-0.5 text-xs text-gray-500'>
                        Established in 2000
                      </p>
                      <p className='mb-0.5 text-xs text-gray-500'>
                        500-1000 Employees
                      </p>
                    </td>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      Urgent
                    </td>
                  </tr>
                  <tr className='bg-white'>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      <span className='text-sm font-bold text-blue-500 whitespace-nowrap'>
                        <a className='hover:cursor-pointer'>
                          Repair of Water Pump Motor Controller
                        </a>
                      </span>
                      <p className='mb-0.5 text-xs text-gray-500'>
                        Budget: PHP 50,000.00
                      </p>
                      <div className='flex'>
                        <div className='rounded-full h-3 w-3 bg-yellow-600 mt-1'></div>
                        <h6 className='ml-1 text-xs text-gray-500 mt-0.5'>
                          Verified Bidders Only
                        </h6>
                      </div>
                      <div className='flex'>
                        <div className='rounded-full h-3 w-3 bg-red-600 mt-1'></div>
                        <h6 className='ml-1 text-xs text-gray-500 mt-0.5'>
                          Level 1 Bidders
                        </h6>
                      </div>
                    </td>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      <span className='p-1.5 text-sm'>SM Consolacion</span>
                    </td>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      <span className='text-sm text-gray-700 font-bold'>
                        Consolacion, Cebu
                      </span>
                      <p className='mb-0.5 text-xs text-gray-500'>
                        Lamac, Consolacion, Cebu
                      </p>
                      <p className='mb-0.5 text-xs text-gray-500'>
                        Established in 1980
                      </p>
                      <p className='mb-0.5 text-xs text-gray-500'>
                        1000-5000 Employees
                      </p>
                    </td>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      1 Day Ago
                    </td>
                  </tr>
                  <tr className='bg-white'>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      <span className='text-sm font-bold text-blue-500 whitespace-nowrap'>
                        <a className='hover:cursor-pointer'>
                          Construction of Swimming Pool Facility
                        </a>
                      </span>
                      <p className='mb-0.5 text-xs text-gray-500'>
                        Budget: PHP 50,000.00
                      </p>
                      <div className='flex'>
                        <div className='rounded-full h-3 w-3 bg-yellow-600 mt-1'></div>
                        <h6 className='ml-1 text-xs text-gray-500 mt-0.5'>
                          Verified Bidders Only
                        </h6>
                      </div>
                      <div className='flex'>
                        <div className='rounded-full h-3 w-3 bg-red-600 mt-1'></div>
                        <h6 className='ml-1 text-xs text-gray-500 mt-0.5'>
                          Level 2 Bidders
                        </h6>
                      </div>
                    </td>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      <span className='p-1.5 text-sm'>Informatics School</span>
                    </td>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      <span className='text-sm text-gray-700 font-bold'>
                        Consolacion, Cebu
                      </span>
                      <p className='mb-0.5 text-xs text-gray-500'>
                        Sitio Lumot, Garing <br />
                        Consolacion, Cebu
                      </p>
                      <p className='mb-0.5 text-xs text-gray-500'>
                        Established in 1980
                      </p>
                      <p className='mb-0.5 text-xs text-gray-500'>
                        50-100 Employees
                      </p>
                    </td>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      1 Month Ago
                    </td>
                  </tr>
                  <tr className='bg-white'>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      <span className='text-sm font-bold text-blue-500 whitespace-nowrap'>
                        <a className='hover:cursor-pointer'>
                          Supply of 16 Cubic Gravel YY
                        </a>
                      </span>
                      <p className='mb-0.5 text-xs text-gray-500'>
                        Budget: PHP 50,000.00
                      </p>
                      <div className='flex'>
                        <div className='rounded-full h-3 w-3 bg-yellow-600 mt-1'></div>
                        <h6 className='ml-1 text-xs text-gray-500 mt-0.5'>
                          Verified Bidders Only
                        </h6>
                      </div>
                      <div className='flex'>
                        <div className='rounded-full h-3 w-3 bg-red-600 mt-1'></div>
                        <h6 className='ml-1 text-xs text-gray-500 mt-0.5'>
                          Level 2 Bidders
                        </h6>
                      </div>
                    </td>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      <span className='p-1.5 text-sm'>Santiago Shipyard</span>
                    </td>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      <span className='text-sm text-gray-700 font-bold'>
                        Consolacion, Cebu
                      </span>
                      <p className='mb-0.5 text-xs text-gray-500'>
                        Tayud, Consolacion, Cebu
                      </p>
                      <p className='mb-0.5 text-xs text-gray-500'>
                        Established in 2008
                      </p>
                      <p className='mb-0.5 text-xs text-gray-500'>
                        100-300 Employees
                      </p>
                    </td>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      58 minutes ago
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden'>
              <div className='bg-white space-y-3 p-4 rounded-lg shadow'>
                <div className='flex items-center space-x-2 text-sm'>
                  <div>
                    <a
                      href='#'
                      className='text-blue-500 font-bold hover:underline'
                    >
                      #1000
                    </a>
                  </div>
                  <div className='text-gray-500'>10/10/2021</div>
                  <div>
                    <span className='p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50'>
                      Delivered
                    </span>
                  </div>
                </div>
                <div className='text-sm text-gray-700'>
                  Supply of 16 Channel CCTV System for Warehouse
                </div>
                <div className='text-sm font-medium text-black'>Featured</div>
              </div>
              <div className='bg-white space-y-3 p-4 rounded-lg shadow'>
                <div className='flex items-center space-x-2 text-sm'>
                  <div>
                    <a
                      href='#'
                      className='text-blue-500 font-bold hover:underline'
                    >
                      #1001
                    </a>
                  </div>
                  <div className='text-gray-500'>10/10/2021</div>
                  <div>
                    <span className='p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50'>
                      Shipped
                    </span>
                  </div>
                </div>
                <div className='text-sm text-gray-700'>
                  Service Cleaning of 10 Units Window Type Aircon
                </div>
                <div className='text-sm font-medium text-black'>Urgent</div>
              </div>
              <div className='bg-white space-y-3 p-4 rounded-lg shadow'>
                <div className='flex items-center space-x-2 text-sm'>
                  <div>
                    <a
                      href='#'
                      className='text-blue-500 font-bold hover:underline'
                    >
                      #1002
                    </a>
                  </div>
                  <div className='text-gray-500'>10/10/2021</div>
                  <div>
                    <span className='p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-50'>
                      Canceled
                    </span>
                  </div>
                </div>
                <div className='text-sm text-gray-700'>
                  Supply of Office Chairs and Tables
                </div>
                <div className='text-sm font-medium text-black'>Urgent</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Page>
  )
}

export default HomeGuest
