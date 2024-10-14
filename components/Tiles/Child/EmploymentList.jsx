import React from 'react'
import Image from 'next/image'

const EmploymentList = () => {
  return (
    <div className='flex flex-col w-full h-full justify-around gap-3'>
        <div className='bg-subtile p-3 flex flex-col gap-3 rounded-xl shadow-md leading-none'>
            <div className='flex items-center gap-2'>
                <Image src='/avatars/diabloLogo.png' width={2291} height={2291} alt='soemthig' className='w-[64px]'/>
                <div className='flex flex-col leading-none justify-around items-start'>
                    <span className='text-base font-semibold'>Full Stack Developer</span>
                    <span className='text-sm text-subtext'>June 2023 - Present</span>
                    <span className='text-sm text-subtext link_normal'>Diablo Escapes</span>
                    
                </div>
            </div>
            <div className='flex flex-col gap-2 text-center border-2'>
                <span>BS in Computer Science</span>
                <span>GPA 3.48 Cum Laude</span>
            </div>
        </div>
        <div className='bg-subtile p-3 flex flex-col gap-3 rounded-xl shadow-md leading-none'>
            <div className='flex items-center gap-2'>
                <Image src='/avatars/bsdxr.jpeg' width={2291} height={2291} alt='soemthig' className='w-[64px]'/>
                <div className='flex flex-col leading-none justify-around items-start'>
                    <span className='text-base font-semibold'>Capstone Machine Learning Developer</span>
                    <span className='text-sm text-subtext'>May 2022 - December 2022</span>
                    <a className='text-sm text-subtext link_normal'>Bit Space Developement</a>
                    
                </div>
            </div>
            <div className='flex flex-col gap-2 text-center border-2'>
                <span>BS in Computer Science</span>
                <span>GPA 3.48 Cum Laude</span>
            </div>
        </div>
    </div>
  )
}

export default EmploymentList