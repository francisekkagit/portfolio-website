import React from 'react'
import Image from 'next/image'
import { Snippet } from '@nextui-org/react'

const EducationList = () => {
    return (
    <div className='flex flex-col w-full md:h-full gap-3 md:gap-7 pb-3'>

        <div className='bg-subtile p-3 lg:p-5 flex flex-col gap-3 rounded-xl shadow-md leading-none'>
            <div className='flex items-center gap-2'>
                <Image src='/avatars/asuLogo.png' width={3062} height={2160} alt='soemthig' className='w-[64px]'/>
                <div className='flex flex-col leading-0 justify-around gap-1'>
                    <span className='font-semibold text-[16px]'>Arizona State University</span>
                    <span className='text-subtext text-[14px]'>2018 - 2022</span>
                </div>
            </div>
            <div className='flex flex-col gap-2 text-subtext text-center'>
                <span>Ira A. Fulton Schools of Enineering</span>
                <span>BS in Computer Science</span>
                <span>GPA 3.48 Cum Laude</span>
            </div>
        </div>

        <div className='bg-subtile p-3 lg:p-5 flex flex-col gap-3 rounded-xl shadow-md leading-none'>
            <div className='flex items-center gap-2'>
                <Image src='/avatars/awsIcon.png' width={512} height={512} alt='soemthig' className='w-[64px]'/>
                <div className='flex flex-col leading-0 justify-around gap-1'>
                    <span className='font-semibold text-[16px]'>Amazon Web Services</span>
                    <span className='text-subtext text-[14px]'>April 2023</span>
                </div>
            </div>
            <div className='flex flex-col leading-none gap-2 text-subtext text-center'>
                <span>Certified AWS Cloud Practitioner</span>
                <span className='flex justify-center items-center gap-2'><span>Credential ID</span><Snippet size='sm' symbol='' className=''>N4BLKEQ14JV41VGZ</Snippet></span>
            </div>
            <a href='https://aws.amazon.com/verification' className='flex gap-1 items-center justify-center text-blue-500 cursor-pointer text-[14px]'>
                <span>Validate my certificate</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
            </a>
        </div>

        <div className='bg-subtile p-3 lg:p-5 flex flex-col gap-3 rounded-xl shadow-md leading-none'>
            <div className='flex items-center gap-2'>
                <Image src='/avatars/dlLogo.png' width={512} height={512} alt='soemthig' className='w-[64px]'/>
                <div className='flex flex-col leading-none justify-around gap-1'>
                    <span className='font-semibold text-[16px]'>DeepLearning.AI</span>
                    <span className='text-subtext text-[14px]'>September 2024</span>
                </div>
            </div>
            <div className='flex flex-col leading-none gap-2 text-subtext text-center'>
                <span>TensorFlow Professional Developer</span>
                <span>Credential ID 7MFYEEGDUM83</span>
            </div>
            <a href='https://www.coursera.org/account/accomplishments/professional-cert/7MFYEEGDUM83' className='flex gap-1 items-center justify-center text-blue-500 cursor-pointer text-[14px]'>
                <span>Validate my certificate</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
            </a>
        </div>
    </div>
  )
}

export default EducationList