import React, { useState, useEffect } from 'react'
import { useAuth } from '../../../hooks'

import {
  regions,
  provinces,
  cities,
  barangays,
} from 'select-philippines-address'

export const Profile = () => {
  const { viewer, loadingViewer, logout } = useAuth()

  const [regionData, setRegion] = useState([])
  const [provinceData, setProvince] = useState([])
  const [cityData, setCity] = useState([])
  const [barangayData, setBarangay] = useState([])

  const [regionAddr, setRegionAddr] = useState('')
  const [provinceAddr, setProvinceAddr] = useState('')
  const [cityAddr, setCityAddr] = useState('')
  const [barangayAddr, setBarangayAddr] = useState('')

  if (loadingViewer || !viewer) {
    return <h1>Loading user profile...</h1>
  }

  const region = () => {
    regions().then((response) => {
      setRegion(response)
    })
  }

  const province = (e) => {
    setRegionAddr(e.target.selectedOptions[0].text)
    provinces(e.target.value).then((response) => {
      setProvince(response)
      setCity([])
      setBarangay([])
    })
  }

  const city = (e) => {
    setProvinceAddr(e.target.selectedOptions[0].text)
    cities(e.target.value).then((response) => {
      setCity(response)
    })
  }

  const barangay = (e) => {
    setCityAddr(e.target.selectedOptions[0].text)
    barangays(e.target.value).then((response) => {
      setBarangay(response)
    })
  }

  const brgy = (e) => {
    setBarangayAddr(e.target.selectedOptions[0].text)
  }

  const handleRegionDropdownClick = (e) => {
    region()
  }

  console.log('Viewer Data:', viewer)
  // console.log('Data:', viewer.accounts.nodes[0].accountStatus)
  // useEffect(() => {
  //   region()
  // }, handleRegionDropdownClick)

  console.log('Repeating')
  // region()

  return (
    <div className='profile'>
      <hgroup>
        <h2>Account</h2>
        <div>
          <p>
            Edit your account details below, or{' '}
            <button onClick={logout} className='link-button'>
              sign out here
            </button>
            .
          </p>
        </div>
      </hgroup>
      {/* <ProfileForm viewer={ viewer } /> */}

      {/* Top Navigation */}

      <div className='max-w-3xl mx-auto'>
        <div className='border-b-2 py-4'>
          <div className='uppercase tracking-wide text-xs font-bold text-gray-500 mb-1 leading-tight'></div>
          <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
            <div className='flex-1'>
              <div x-show='step === 1'>
                <div className='text-lg font-bold text-gray-700 leading-tight'>
                  Business Information
                </div>
              </div>
            </div>

            <div className='flex items-center md:w-64'>
              <div className='w-full bg-white rounded-full mr-2'>
                <div className='rounded-full bg-green-500 text-xs leading-none h-2 text-center text-white'></div>
              </div>
              <div
                className='text-xs w-10 text-gray-600'
                x-text="parseInt(step / 3 * 100) +'%'"
              ></div>
            </div>
          </div>
        </div>

        <div className='flex-1'>
          <main>
            <div className=''>
              <div>
                <div className='md:grid'>
                  {/* <div className='md:col-span-1'>
                    <div className='px-4 sm:px-0'>
                      <h3 className='text-lg font-medium leading-6 text-gray-900'>
                        Purchase Request Details
                      </h3>
                      <p className='mt-1 text-sm text-gray-600'>
                        Please be specific on what you need
                      </p>
                    </div>
                  </div> */}

                  <div className='mt-5 md:mt-0 md:col-span-2'>
                    <form action='#' method='POST'>
                      <div className='shadow sm:rounded-md sm:overflow-hidden'>
                        <div className='px-4 py-5 bg-white sm:p-6'>
                          <div className='grid grid-cols-6 gap-6'>
                            <div className='col-span-6 sm:col-span-3'>
                              <label
                                htmlFor='title'
                                className='block text-sm font-medium text-gray-700'
                              >
                                First name
                              </label>
                              <input
                                type='text'
                                name='firstname'
                                id='firstname'
                                placeholder='Enter your first name'
                                autoComplete='given-name'
                                className='mt-1 focus:ring-orange-400 focus:border-orange-400 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                              />
                            </div>

                            <div className='col-span-6 sm:col-span-3'>
                              <label
                                htmlFor='title'
                                className='block text-sm font-medium text-gray-700'
                              >
                                Last name
                              </label>
                              <input
                                type='text'
                                name='lastname'
                                id='lastname'
                                placeholder='Enter your last name'
                                autoComplete='given-name'
                                className='mt-1 focus:ring-orange-400 focus:border-orange-400 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                              />
                            </div>

                            <div className='col-span-6'>
                              <label
                                htmlFor='price'
                                className='block text-sm font-medium text-gray-700'
                              >
                                Date of birth
                              </label>
                              <div className='relative'>
                                <input
                                  type='date'
                                  name='dateOfBirth'
                                  placeholder='mm/dd/yyyy'
                                  className='mt-1 focus:ring-orange-400 focus:border-orange-400 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                                />
                              </div>
                            </div>

                            <div className='col-span-6'>
                              <label
                                htmlFor='title'
                                className='block text-sm font-medium text-gray-700'
                              >
                                Street address
                              </label>
                              <input
                                type='text'
                                name='streetAdress'
                                id='streetAdress'
                                placeholder='Enter your street adress'
                                autoComplete='given-name'
                                className='mt-1 focus:ring-orange-400 focus:border-orange-400 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                              />
                            </div>

                            <div className='col-span-6 sm:col-span-6 lg:col-span-2'>
                              <label
                                htmlFor='category'
                                className='block text-sm font-medium text-gray-700'
                              >
                                Region
                              </label>
                              <select
                                id='category'
                                name='category'
                                onChange={province}
                                onSelect={region}
                                onClick={handleRegionDropdownClick}
                                autoComplete='category'
                                className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400 sm:text-sm'
                              >
                                <option disabled>Select Region</option>
                                {regionData &&
                                  regionData.length > 0 &&
                                  regionData.map((item) => (
                                    <option
                                      key={item.region_code}
                                      value={item.region_code}
                                    >
                                      {item.region_name}
                                    </option>
                                  ))}
                              </select>
                            </div>

                            <div className='col-span-6 sm:col-span-6 lg:col-span-2'>
                              <label
                                htmlFor='province'
                                className='block text-sm font-medium text-gray-700'
                              >
                                Province
                              </label>
                              <select
                                id='province'
                                name='province'
                                onChange={city}
                                autoComplete='province'
                                className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400 sm:text-sm'
                              >
                                <option disabled>Select Province</option>
                                {provinceData &&
                                  provinceData.length > 0 &&
                                  provinceData.map((item) => (
                                    <option
                                      key={item.province_code}
                                      value={item.province_code}
                                    >
                                      {item.province_name}
                                    </option>
                                  ))}
                              </select>
                            </div>

                            <div className='col-span-6 sm:col-span-6 lg:col-span-2'>
                              <label
                                htmlFor='city'
                                className='block text-sm font-medium text-gray-700'
                              >
                                City
                              </label>
                              <select
                                id='city'
                                name='city'
                                onChange={barangay}
                                autoComplete='city'
                                className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400 sm:text-sm'
                              >
                                <option disabled>Select City</option>
                                {cityData &&
                                  cityData.length > 0 &&
                                  cityData.map((item) => (
                                    <option
                                      key={item.city_code}
                                      value={item.city_code}
                                    >
                                      {item.city_name}
                                    </option>
                                  ))}
                              </select>
                            </div>

                            <div className='col-span-6 sm:col-span-6 lg:col-span-2'>
                              <label
                                htmlFor='barangay'
                                className='block text-sm font-medium text-gray-700'
                              >
                                Barngay
                              </label>
                              <select
                                id='barangay'
                                name='barangay'
                                onChange={brgy}
                                autoComplete='barangay'
                                className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400 sm:text-sm'
                              >
                                <option disabled>Select Barangay</option>
                                {barangayData &&
                                  barangayData.length > 0 &&
                                  barangayData.map((item) => (
                                    <option
                                      key={item.brgy_code}
                                      value={item.brgy_code}
                                    >
                                      {item.brgy_name}
                                    </option>
                                  ))}
                              </select>
                            </div>

                            <div className='col-span-6 sm:col-span-3 lg:col-span-2'>
                              <label
                                htmlFor='postal-code'
                                className='block text-sm font-medium text-gray-700'
                              >
                                ZIP / Postal code
                              </label>
                              <input
                                type='text'
                                name='postal-code'
                                id='postal-code'
                                autoComplete='postal-code'
                                className='mt-1 focus:ring-orange-400 focus:border-orange-400 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                              />
                            </div>

                            <div className='col-span-6'>
                              <label
                                htmlFor='description'
                                className='block text-sm font-medium text-gray-700'
                              >
                                Full address
                              </label>
                              <div className='mt-1'>
                                <textarea
                                  id='address'
                                  name='address'
                                  rows={4}
                                  className='shadow-sm focus:ring-orange-400 focus:border-orange-400 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md'
                                  placeholder='Your full address'
                                  defaultValue={
                                    (barangayAddr,
                                    cityAddr,
                                    provinceAddr,
                                    regionAddr)
                                  }
                                />
                              </div>
                            </div>

                            <div className='col-span-6'>
                              <label
                                htmlFor='description'
                                className='block text-sm font-medium text-gray-700'
                              >
                                Are you a beneficial owner?
                              </label>
                              <div className='flex items-center mb-4'>
                                <input
                                  id='areYouABeneficialOwner'
                                  type='checkbox'
                                  value=''
                                  className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                                />
                                <label
                                  htmlFor='areYouABeneficialOwner'
                                  className='ml-2 block text-sm font-medium text-gray-700'
                                >
                                  Yes
                                </label>
                              </div>
                            </div>

                            <div className='col-span-6 sm:col-span-3'>
                              <label
                                htmlFor='category'
                                className='block text-sm font-medium text-gray-700'
                              >
                                Category
                              </label>
                              <select
                                id='category'
                                name='category'
                                autoComplete='category'
                                className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400 sm:text-sm'
                              >
                                <option value=''>Please Select</option>
                                <option>Agriculture</option>
                                <option>Construction Mats</option>
                                <option>Office Supplies</option>
                                <option>Mechanical</option>
                                <option>Electrical</option>
                                <option>Plumbing</option>
                                <option>Fire Protection</option>
                                <option>CCTV / Security</option>
                              </select>
                            </div>

                            <div className='col-span-6 sm:col-span-3'>
                              <label
                                htmlFor='budget'
                                className='block text-sm font-medium text-gray-700'
                              >
                                Budget
                              </label>
                              <div className='mt-1 relative rounded-md shadow-sm'>
                                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                  <span className='text-gray-500 sm:text-sm'>
                                    P
                                  </span>
                                </div>
                                <input
                                  type='text'
                                  name='budget'
                                  id='budget'
                                  className='focus:ring-orange-400 focus:border-orange-400 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md'
                                  placeholder='0.00'
                                />
                                <div className='absolute inset-y-0 right-0 flex items-center'>
                                  <label htmlFor='currency' className='sr-only'>
                                    Currency
                                  </label>
                                </div>
                              </div>
                            </div>

                            <div className='col-span-6'>
                              <label className='block text-sm font-medium text-gray-700'>
                                Files / Photos
                              </label>
                              <div className='mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md'>
                                <div className='space-y-1 text-center'>
                                  <svg
                                    className='mx-auto h-12 w-12 text-gray-400'
                                    stroke='currentColor'
                                    fill='none'
                                    viewBox='0 0 48 48'
                                    aria-hidden='true'
                                  >
                                    <path
                                      d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                                      strokeWidth={2}
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                    />
                                  </svg>
                                  <div className='flex text-sm text-gray-600'>
                                    <label
                                      htmlFor='file-upload'
                                      className='relative cursor-pointer bg-white rounded-md font-medium text-orange-500 hover:text-orange-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-orange-500'
                                    >
                                      <span>Upload a file</span>
                                      <input
                                        id='file-upload'
                                        name='file-upload'
                                        type='file'
                                        className='sr-only'
                                      />
                                    </label>
                                    <p className='pl-1'>or drag and drop</p>
                                  </div>
                                  <p className='text-xs text-gray-500'>
                                    PNG, JPG, GIF up to 10MB
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
                          <button
                            type='submit'
                            className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>

        {/* <div className='bg-white rounded-lg p-10 flex items-center shadow justify-between'>
          <div>
            <svg
              className='mb-4 h-20 w-20 text-green-500 mx-auto'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              {' '}
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                clipRule='evenodd'
              />
            </svg>

            <h2 className='text-2xl mb-4 text-gray-800 text-center font-bold'>
              Registration Success
            </h2>

            <div className='text-gray-600 mb-8'>
              Thank you. We have sent you an email to demo@demo.test. Please
              click the link in the message to activate your account.
            </div>

            <button className='w-40 block mx-auto focus:outline-none py-2 px-5 rounded-lg shadow-sm text-center text-gray-600 bg-white hover:bg-gray-100 font-medium border'>
              Back to home
            </button>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Profile
