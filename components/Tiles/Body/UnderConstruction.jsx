import React from 'react'

const UnderConstruction = () => {
  return (
    <div className='h-screenNav flex flex-col gap-3 p-3 sm:flex-row sm:gap-5 sm:p-5'>
        <div className='w-full sm:w-[50%] flex flex-col gap-3 p-3 sm:gap-5 sm:p-3 items-center'>
            <p className='RedHat font-semibold text-[40px]'>Under Construction</p>
        </div>
        <div className='bg-slate-300 w-full sm:w-[50%] rounded-xl shadow-xl flex flex-col items-center gap-3 p-3 sm:gap-5 sm:p-5'>
            <img src='/component_imgs/francisProfile1.png' width={2979} height={2979} className='w-full max-w-[500px] rounded-full shadow-lg'/>
        </div>
    </div>
  )
}

export default UnderConstruction