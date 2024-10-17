import React from 'react'
import Image from 'next/image';
import QuickMessage from '../Child/QuickMessage';
import ProfileImgBox from '../Child/ProfileImgBox';

const Hero1 = () => {
  return (
      <div className='h-[40vh] flex flex-col sm:flex-row justify-center items-center overflow-hidden w-full max-tile gap-5'>
        
        <div className=' flex flex-col gap-10 md:gap-12 lg:gap-14 justify-center items-center sm:h-full RedHat overflow-hidden heroFullHeightSmall '>
          <div className='flex flex-col gap-3 text-center leading-none  w-full'>
            <span className='text-[20px] min-[500px]:text-[24px] font-light transition-all duration-150'>Francis Ekka</span>
            <span className='text-[32px] min-[500px]:text-[42px] font-semibold textShadow-header transition-all duration-150'>Full Stack Developer</span>
            <span className='text-[18px] min-[500px]:text-[20px] font-extralight transition-all duration-150'>Located in Danville, CA | <span className='italic text-success'>Open to Work</span></span>
          </div>

          {/* <QuickMessage/> */}
        </div>


        <ProfileImgBox/>

      </div>
  )
}

export default Hero1