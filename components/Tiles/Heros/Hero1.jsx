import React from 'react'
import Image from 'next/image';

const Hero1 = () => {
  return (
      <div className='h-[50vh] bg-background_tile max-tile rounded-xl shadow-lg flex flex-col sm:flex-row justify-center items-center overflow-hidden'>
        <div className='flex flex-col gap-3 p-7 justify-center items-center text-center h-[45%] sm:h-full sm:w-[60%] leading-none RedHat overflow-hidden fullHeightSmall'>
          <span className='text-[20px] min-[500px]:text-[24px] font-light transition-all duration-300'>Francis Ekka</span>
          <span className='text-[32px] min-[500px]:text-[42px] font-semibold textShadow-header transition-all duration-300'>Full Stack Developer</span>
          <span className='text-[18px] min-[500px]:text-[20px] font-extralight transition-all duration-300'>Located in Danville, CA | <span className='italic text-warning'>Under Construction</span></span>
        </div>
        <div className='w-full h-[55%] sm:w-[40%] sm:h-full flex justify-center items-center p-7 overflow-hidden heroHiddenSmall'>
          <div className='aspect-[1/1] max-h-full rounded-full shadow-md'>
            <Image src='/component_imgs/francisProfile1.png' width={2979} height={2979} alt='francis_ekka'/>
          </div>
        </div>
      </div>
  )
}

export default Hero1