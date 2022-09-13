import React, { useState, useEffect } from 'react'
import { useAuth } from '../../../hooks'
import Axios from 'axios'

import {
  regions,
  provinces,
  cities,
  barangays,
} from 'select-philippines-address'
import AccountInformationForm from './account-information-form'

import Loader from '../../../components/loader'

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

  console.log('Viewer Data:', viewer.businessInformation.businessInfoSubmitted)
  // console.log('Data:', viewer.accounts.nodes[0].accountStatus)
  // useEffect(() => {
  //   region()
  // }, handleRegionDropdownClick)

  console.log('Repeating')
  // region()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const response = await Axios.post(
        'http://localhost:10026/wp-json/wp/v2/users/me',
        {
          acf: {
            business_type: 'corporation',
            representatives_information: {
              first_name: 'Jah4n From React App 3',
              last_name: 'Yeah boi',
              date_of_birth: '2022-06-30',
              line_1: 'Liloan',
              region: 'VII',
            },
          },
        },
        {
          auth: {
            username: 'developer',
            password: 'sJz1 wy6e jel5 J6CG gLlt 86mn',
          },
        }
      )
      console.log('TEST Save', response)
    } catch (e) {
      console.log('there was a problem')
    }
  }

  if (!viewer.businessInformation.businessInfoSubmitted) {
    window.location.replace('http://localhost:10026/account/')
  }

  return (
    <div className='profile mb-10'>
      {!viewer.businessInformation.businessInfoSubmitted ? (
        <Loader />
      ) : (
        <AccountInformationForm logout={logout} />
      )}
    </div>
  )
}

export default Profile
