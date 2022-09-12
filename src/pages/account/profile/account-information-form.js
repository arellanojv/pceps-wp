import React, { useState } from 'react'
import Axios from 'axios'
import { useImmerReducer } from 'use-immer'

import { StepperContext } from '../../../context/stepper-context'
import { StepperDispatch } from '../../../context/stepper-dispatch'
import Stepper from './stepper'
import StepperControl from './stepper-control'
import Account from './steps/account'
import Details from './steps/details'
import Final from './steps/final'
import Payment from './steps/final'

const AccountInformationForm = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const steps = ['General Information', 'Business Information', 'Complete']

  //Handle State Context
  const originalState = {
    mainFirstName: '',
    mainLastName: '',
    mainDateOfBirth: '',
    mainRegionText: '',
    mainRegionValue: '',
    mainProvinceText: '',
    mainProvinceValue: '',
    mainMyFiles: [],
    isSaving: false,
    sendCount: 0,
  }

  const ourReducer = (draft, action) => {
    switch (action.type) {
    }
  }

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Details />

      case 2:
        return <Account />
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
    console.log('My Files', state.mainMyFiles)

    if (newStep == 3) {
      console.log('Executed Action')
      try {
        const response = await Axios.post(
          'http://localhost:10026/wp-json/wp/v2/users/me',
          {
            acf: {
              business_type: 'corporation',
              representatives_information: {
                first_name: 'JAA',
                last_name: 'how to fix this?',
                date_of_birth: '2022-06-30',
                street_address: 'Liloan',
                region: '07',
                province: '07',
                city: '07',
                barangay: '07',
                zip: '07',
                full_address: '08',
                sample_picture: state.mainMyFiles[0],
              },
            },
          },
          {
            headers: {
              'Content-Type': 'image/png; charset= UTF-8',
              'Content-Disposition':
                'attachment; filename=/"' + state.mainMyFiles[0].name + '/"',
            },
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

  const [state, dispatch] = useImmerReducer(ourReducer, originalState)

  return (
    <div className='md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white'>
      <div className='container horizontal mt-5'>
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

        <Stepper steps={steps} currentStep={currentStep} />

        <div className='my-10'>
          <StepperContext.Provider value={state}>
            <StepperDispatch.Provider value={dispatch}>
              {displayStep(currentStep)}
            </StepperDispatch.Provider>
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
