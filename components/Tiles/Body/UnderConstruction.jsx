import React from 'react'

const UnderConstruction = () => {
  return (
    <div className='flex flex-col gap-3 p-3 sm:flex-row sm:gap-5 sm:p-5'>
        <div className='w-full sm:w-[50%] flex flex-col gap-3 p-3 sm:gap-5 sm:p-3 items-center justify-center text-center textShadow'>
            <p className='RedHat font-semibold text-[40px]'>Under Construction</p>
            <p>Welcome! Stay tuned for updates as I handcraft this space to highlight my projects, experience, and passion for web development.</p>
            <p>Feel free to reach out to me for collaborations or inquires. I'd love to connect!</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 max-sm:rotate-90 ease-in-out duration-150">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>

        </div>
        <div className='border-1 border-border_tile bg-background_tile w-full sm:w-[50%] rounded-xl shadow-xl flex flex-col items-center gap-3 p-3 sm:gap-5 sm:p-5 textShadow'>
            <img src='/component_imgs/francisProfile1.png' width={2979} height={2979} className='w-full max-w-[450px] rounded-full shadow-lg'/>

            <p>Full Stack Developer Open to Work</p>

            <a className='flex gap-1 items-center hover:bg-[#22303c]' href="https://maps.app.goo.gl/vdLfCyYAsGfLZqVL6" target="blank_">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>

              <p>Danville, CA</p>
            </a>
            <a className='flex gap-1 items-center' href="tel: 925-393-7171">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>

              <p>&#40;925&#41; 963 4640</p>
            </a>
            <a className='flex gap-1 items-center' href="mailto: francisxekka@gmail.com">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
              </svg>
              <p>francisxekka@gmail.com</p>
            </a>
        
        </div>
    </div>
  )
}

export default UnderConstruction