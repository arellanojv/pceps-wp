import React, { useEffect } from 'react'

const StepperControl = ({ handleClick, currentStep, steps }) => {
  return (
    <div className='container flex justify-around mt-4 mb-8'>
      <button
        onClick={() => handleClick()}
        className={`bg-white text-slate-400 uppercase py-2 px-4 rounded-md text-sm font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out ${
          currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        Back
      </button>

      <button
        onClick={() => handleClick('next')}
        className='bg-orange-500 text-white uppercase py-2 px-4 font-semibold cursor-pointer hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out shadow-sm font-medium rounded-md'
        type='sumit'
      >
        {currentStep === steps.length - 1 ? 'Confirm' : 'Next'}
      </button>
    </div>
  )
}

export default StepperControl
