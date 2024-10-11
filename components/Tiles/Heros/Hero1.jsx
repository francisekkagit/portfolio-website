import React from 'react'

const Hero1 = () => {
  return (
    <div className='h-[50vh] flex justify-center items-center p-3 sm:p-6 md:p-10 transition-all duration-300'>
      <div className='bg-background_tile max-tile h-full rounded-xl shadow-lg flex flex-col sm:flex-row justify-center items-center overflow-hidden'>
        <div className='flex flex-col gap-3 p-7 justify-center items-center text-center h-[45%] sm:h-full sm:w-[50%] leading-none RedHat overflow-hidden fullHeightSmall'>
          <span className='text-[20px] min-[500px]:text-[24px] font-light transition-all duration-300'>Francis Ekka</span>
          <span className='text-[32px] min-[500px]:text-[42px] font-semibold textShadow-header transition-all duration-300'>Full Stack Developer</span>
          <span className='text-[18px] min-[500px]:text-[20px] font-extralight transition-all duration-300'>Located in Danville, CA | <span className='italic text-green-500'>Open to Work</span></span>
        </div>
        <div className='w-full h-[50%] sm:w-[55%] sm:h-full flex justify-center items-center p-7 overflow-hidden hiddenSmall'>
          <div className='aspect-[1/1] max-h-full rounded-full shadow-md'>
            <img src='/component_imgs/francisProfile1.png' alt='francis_ekka' width={2979} height={2979} className=''/>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Hero1