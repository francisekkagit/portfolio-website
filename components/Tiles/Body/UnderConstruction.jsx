import React from 'react'

const UnderConstruction = () => {
  return (
    <div className='flex flex-col gap-3 p-3 sm:flex-row sm:gap-5 sm:p-5'>
        <div className='RedHat w-full sm:w-[50%] flex flex-col gap-3 p-3 sm:gap-5 sm:p-3 items-center justify-center text-center'>
            <p className='font-semibold text-[40px] textShadow-header'>Under Construction</p>
            <p>Welcome! Stay tuned for updates as I handcraft this space to highlight my projects, experience, and passion for web development.</p>
            <p>Feel free to reach out to me for collaborations or inquires. I&apos;d love to connect!</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 max-sm:rotate-90 ease-in-out duration-150">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>

        </div>
        <div className='RedHat bg-tile w-full sm:w-[50%] rounded-xl shadow-xl flex flex-col items-center gap-3 p-3 sm:gap-5 sm:p-5'>
            <img src='/component_imgs/francisProfile1.png' width={2979} height={2979} className='w-full max-w-[450px] rounded-full shadow-lg'/>

            <div className='flex flex-col gap-2'>
              <p className='text-[16px]'>Full Stack Developer in Danville, CA</p>
              <a className='flex gap-1 justify-center hover:bg-background hover:shadow-md ease-in-out duration-150 p-2 rounded-xl' href="mailto: francisxekka@gmail.com">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                </svg>
                <p className=''>francisxekka@gmail.com</p>
              </a>
            </div>
        
        </div>
    </div>
  )
}

export default UnderConstruction