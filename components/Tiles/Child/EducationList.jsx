import React from 'react'
import Image from 'next/image'

const EducationList = () => {
    return (
    <div className='flex flex-col w-full gap-3'>
        <div className='bg-subtile p-3 flex flex-col gap-3 rounded-xl shadow-md leading-none'>
            <div className='flex items-center gap-2'>
                <Image src='/avatars/asuLogo.png' width={3062} height={2160} alt='soemthig' className='w-[64px]'/>
                <div className='flex flex-col'>
                    <span className='font-semibold'>Arizona State University</span>
                    <span className='text-sm text-subtext'>2018 - 2022</span>
                </div>
            </div>
            <div className='flex flex-col gap-2 text-center'>
                <span>BS in Computer Science</span>
                <span>GPA 3.48 Cum Laude</span>
            </div>
        </div>
        <div className='bg-subtile p-3 flex flex-col gap-3 rounded-xl shadow-md leading-none'>
            <div className='flex items-center gap-2'>
                <Image src='/avatars/awsIcon.png' width={512} height={512} alt='soemthig' className='w-[64px]'/>
                <div className='flex flex-col'>
                    <span className='font-semibold'>Amazon Web Services</span>
                    <span className='text-sm text-subtext'>April 2023</span>
                </div>
            </div>
            <div className='flex flex-col gap-2 text-center'>
                <span>AWS Cloud Practitioner</span>
            </div>
        </div>
        <div className='bg-subtile p-3 flex flex-col gap-3 rounded-xl shadow-md leading-none'>
            <div className='flex items-center gap-2'>
                <Image src='/avatars/dlLogo.png' width={512} height={512} alt='soemthig' className='w-[64px]'/>
                <div className='flex flex-col'>
                    <span className='font-semibold'>DeepLearning.AI</span>
                    <span className='text-sm text-subtext'>September 2024</span>
                </div>
            </div>
            <div className='flex flex-col gap-2 text-center'>
                <span>TensorFlow Professional Certificate</span>
            </div>
        </div>
    </div>
  )
}

export default EducationList