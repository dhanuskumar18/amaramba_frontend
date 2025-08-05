
"use client"
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import KYCFormPage from '../kyc1/page'
import KYCUploadPage from '../kyc2/page'

const page = () => {

    const [step, setStep] = useState(1)

    // Calculate progress based on current step
    const getProgress = () => {
        return step === 1 ? 50 : 100;
    }

    // Handle next step
    const handleNext = () => {
        if (step === 1) {
            setStep(2);
        } else {
            // Handle submission logic here
            console.log('Form submitted!');
            // You can add your submission logic here
        }
    }

    // Get button text based on current step
    const getButtonText = () => {
        return step === 1 ? 'Next' : 'Done';
    }

  return (
    <>
     <div className="  flex justify-center ">
      <div className="w-full ">

        {/* Header and Progress Bar */}
        <div className="mb-8 text-center">
          <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">KYC LEVEL {step}</h2>
          
          {/* Step Indicators */}
          <div className="flex justify-center items-center mb-6 space-x-4">
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors duration-200 ${
                step >= 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-400'
              }`}>
                1
              </div>
              <span className={`ml-2 text-sm font-medium ${step >= 1 ? 'text-blue-500' : 'text-gray-400'}`}>
                Personal Info
              </span>
            </div>
            <div className={`w-12 h-0.5 transition-colors duration-200 ${step >= 2 ? 'bg-blue-500' : 'bg-gray-200'}`}></div>
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors duration-200 ${
                step >= 2 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-400'
              }`}>
                2
              </div>
              <span className={`ml-2 text-sm font-medium ${step >= 2 ? 'text-blue-500' : 'text-gray-400'}`}>
                Document Upload
              </span>
            </div>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
            <div 
              className="bg-blue-500 h-2.5 rounded-full transition-all duration-500 ease-in-out" 
              style={{ width: `${getProgress()}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-500">You have completed {getProgress()}% of the process</p>
        </div>

        {/* Form Grid */}
        {
            step === 1 ? <KYCFormPage /> : <KYCUploadPage />
        }
        

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-[2rem]">
          {/* Previous Button - only show on step 2 */}
          {step === 2 && (
            <Button 
              onClick={() => setStep(1)}
              variant="outline"
              className="border-blue-500 text-blue-500 hover:bg-blue-50 px-16 py-3 rounded-lg font-semibold text-base w-full max-w-lg transition-colors duration-200"
            >
              Previous
            </Button>
          )}
          
          {/* Spacer when on step 1 */}
          {step === 1 && <div></div>}
          
          {/* Next/Submit Button */}
          <Button 
            onClick={handleNext}
            className="bg-blue-500 hover:bg-blue-600 text-white px-16 py-3 rounded-lg font-semibold text-base w-full max-w-lg transition-colors duration-200"
          >
            {getButtonText()}
          </Button>
        </div>


      </div>
    </div>
    </>
  )
}

export default page