import React, { useState } from 'react'
import Stepper from './stepper'
import StepperControl from './stepper-control'
import Account from './steps/account'
import Details from './steps/details'
import Final from './steps/final'
import Payment from './steps/final'

const AccountInformationForm = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const steps = ['Account Information', 'Personal Details', 'Complete']

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

  return (
    <div className='md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white'>
      <div className='container horizontal mt-5'>
        <Stepper steps={steps} currentStep={currentStep} />
      </div>
      <StepperControl />
    </div>
  )
}

export default AccountInformationForm
