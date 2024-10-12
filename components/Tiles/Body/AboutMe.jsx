import React from 'react'
import EducationList from '../Child/EducationList'
import EmploymentList from '../Child/EmploymentList'

const AboutMe = () => {
  return (
    <div className='bg-tile w-full max-tile rounded-xl shadow-lg animate-slide-up p-7'>
        
       <div className='flex flex-col gap-2 md:flex-row'> {/* Main Container col -> row */}
            <div className='flex flex-col md:w-[40%] items-center gap-5 border-2 border-red-500'>
                <span className='text-[32px] min-[500px]:text-[42px] font-semibold textShadow-header transition-all duration-150 leading-none'>About Me</span>
                <EducationList/>
            </div>
            <div className='border-2 border-green-500 flex flex-col md:w-[60%]'>
                <EmploymentList/>
            </div>
       </div>
        
    </div>
  )
}

export default AboutMe