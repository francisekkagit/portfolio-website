import React from 'react'
import EducationList from '../Child/EducationList'
import EmploymentList from '../Child/EmploymentList'

const AboutMe = () => {
  return (
    <div className='home-tile p-10' id='AboutMe'>
        
       <div className='flex flex-col md:flex-row md:gap-10'> {/* Main Container col -> row */}
            <div className='flex flex-col md:w-[50%] lg:w-[40%] items-center justify-around  gap-10'>
                <span className='text-[32px] min-[500px]:text-[42px] font-semibold textShadow-header transition-all duration-150 leading-none'>About Me</span>
                <EducationList/>
            </div>
            <div className='flex flex-col md:w-[50%] lg:w-[60%]'>
                <EmploymentList/>
            </div>
       </div>
        
    </div>
  )
}

export default AboutMe