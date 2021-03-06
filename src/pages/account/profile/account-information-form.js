import React, { useState } from 'react'
import Axios from 'axios'
import { StepperContext } from '../../../contexts/stepper-context'
import Stepper from './stepper'
import StepperControl from './stepper-control'
import Account from './steps/account'
import Details from './steps/details'
import Final from './steps/final'
import Payment from './steps/final'

const AccountInformationForm = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [userData, setUserData] = useState('')
  const [finalData, setFinalData] = useState([])

  const steps = ['Business Information', 'General Information', 'Complete']

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Account />
      case 2:
        return <Details />
      case 3:
        return <Final />
      default:
    }
  }

  const handleClick = async (direction) => {
    let newStep = currentStep

    direction === 'next' ? newStep++ : newStep--

    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep)

    console.log('My Steps', newStep)
    if (newStep == 3) {
      console.log('Data ready to submit')
      console.log('First Name', userData['firstname'])

      try {
        const response = await Axios.post(
          'http://localhost:10026/wp-json/wp/v2/users/me',
          {
            acf: {
              business_type: 'corporation',
              representatives_information: {
                first_name: userData['firstname'],
                last_name: 'Yeah boi z2',
                date_of_birth: '2022-06-30',
                street_address: 'Liloan',
                region: '07',
                province: '07',
                city: '07',
                barangay: '07',
                zip: '07',
                full_address: '07',
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
  }

  return (
    <div className='md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white'>
      <div className='container horizontal mt-5'>
        <Stepper steps={steps} currentStep={currentStep} />

        <div className='my-10'>
          <StepperContext.Provider
            value={{ userData, setUserData, finalData, setFinalData }}
          >
            {displayStep(currentStep)}
          </StepperContext.Provider>
        </div>
      </div>
      {currentStep !== steps.length && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </div>
  )
}

export default AccountInformationForm
