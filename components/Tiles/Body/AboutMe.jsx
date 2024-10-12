import React from 'react'
import Education from '../Child/Education'
import AWSCert from '../Child/AWSCert'
import TensorFlowCert from '../Child/TensorFlowCert'
import Employment1 from '../Child/Employment1'
import Employment2 from '../Child/Employment2'

const AboutMe = () => {
  return (
    <div className='bg-background_tile w-full max-tile rounded-xl shadow-lg animate-slide-up p-7'>
        
       <div className='border-1 border-green-500 flex flex-col'> {/* Main Container col -> row */}
            <div className='flex flex-col items-center gap-5 w-full border-2 border-red-500'>
                <span className='text-[32px] min-[500px]:text-[42px] font-semibold textShadow-header transition-all duration-150 leading-none'>About Me</span>
                <div className='border-2 border-blue-500 flex flex-col w-full gap-3'>
                    <Education/>
                    <AWSCert/>
                    <TensorFlowCert/>
                </div>
            </div>

       </div>
        
    </div>
  )
}

export default AboutMe