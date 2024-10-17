'use client'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react';


const EmploymentList = () => {
  const [showDE, setShowDE] = useState(false);
  const [showEDS, setShowEDS] = useState(false);
  const [showBSD, setShowBSD] = useState(false);

  return (
    <div className='flex flex-col w-full h-full justify-around gap-3 pb-3'>
        
        <div className='bg-subtile p-3 lg:p-5 flex flex-col gap-3 rounded-xl shadow-md leading-none'>
            <div className='flex items-center gap-2'>
                <Image src='/avatars/diabloLogo.png' width={2291} height={2291} alt='soemthig' className='w-[64px]'/>
                <div className='flex flex-col leading-none justify-around items-start'>
                    <span className='text-[16px] font-semibold'>Full Stack Developer</span>
                    <span className='text-sm text-subtileText'>June 2023 - Present</span>
                    <span className='text-sm text-subtileText link_normal'>Diablo Escapes</span>
                    
                </div>
            </div>
            <div className='flex flex-col gap-2 relative text-subtileText'>
              <div className='flex gap-2'><div className='bulletPoint bg-current'/><span>Design, develop, and maintain an e-commerce application using Next.js, TailwindCSS, Node.js, and MongoDB ensuring security and compliance with industry standards.</span></div>
              <div className='flex gap-2'><div className='bulletPoint bg-current'/><span>Build and manage multiple responsive MERN applications.</span></div>
              <div className='flex gap-2'><div className='bulletPoint bg-current'/><span>Implement CI/CD pipelines using GitHub, ensuring seamless updates and integrations.</span></div>
              {!showDE && (<div className='max-md:hidden h-4'></div>)}
              {showDE && (
                <div className='flex flex-col gap-2'>
                  <div className='flex gap-2'><div className='bulletPoint bg-current'/><span>Enhance Search Engine Optimization (SEO) using tools such as Google Search Console and Google Analytics to monitor performance, analyze traffic data, track user behavior, and increase website traffic.</span></div>
                  <div className='flex gap-2'><div className='bulletPoint bg-current'/><span>Head marketing efforts using Google Ads. Manage Google Ad campaigns and collaborate with cross-functional teams to increase brand awareness.</span></div>
                </div>
              )}
              {!showDE && (
                <div
                  onClick={() => setShowDE(true)}
                  className="absolute -bottom-1 w-full h-[70%] flex flex-col"
                >
                  <div className='h-[50%] bg-gradient-to-b from-transparent to-subtile'></div>
                  <div className='h-[50%] bg-subtile flex justify-center items-center'>
                    <span className='text-foreground'>Show More</span>
                  </div>
                </div>
              )}
            </div>
            {showDE && (
                <a href='https://www.diabloescapes.com/' className='flex gap-1 items-center text-blue-500 cursor-pointer text-[14px]' target='_blank'>
                  <span>Visit diabloescapes.com</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              )}
        </div>

        <div className='bg-subtile p-3 lg:p-5 flex flex-col gap-3 rounded-xl shadow-md leading-none'>
            <div className='flex items-center gap-2'>
            <div className='w-16 h-16 bg-gray-400 rounded-xl'></div>
                <div className='flex flex-col leading-none justify-around items-start'>
                    <span className='text-[16px] font-semibold'>Web Development Intern</span>
                    <span className='text-sm text-subtileText'>December 2022 - June 2023</span>
                    <span className='text-sm text-subtileText link_normal'>Eminence Design & Solutions</span>
                    
                </div>
            </div>
            <div className='flex flex-col gap-2 relative text-subtileText'>
              <div className='flex gap-2'><div className='bulletPoint bg-current'/><span>Led the development of a React.js service portal, integrating PostgreSQL and MongoDB databases.</span></div>
              <div className='flex gap-2'><div className='bulletPoint bg-current'/><span>Strengthened web development fundamentals through hands-on experience with HTML, CSS, and Javascript.</span></div>
              <div className='flex gap-2'><div className='bulletPoint bg-current'/><span>Participated in Agile development practices including stand-ups, sprint planning, and continuous integration.</span></div>
              {showEDS && (
                <div className='flex flex-col gap-2'>
                  <div className='flex gap-2'><div className='bulletPoint bg-current'/><span>Utilized version control management with Github to contribute to collaborative repositories.</span></div>
                </div>
              )}
              {!showEDS && (
                <div
                  onClick={() => setShowEDS(true)}
                  className="absolute -bottom-1 w-full h-[70%] flex flex-col"
                >
                  <div className='h-[50%] bg-gradient-to-b from-transparent to-subtile'></div>
                  <div className='h-[50%] bg-subtile flex justify-center items-center'>
                    <span className='text-foreground'>Show More</span>
                  </div>
                </div>
              )}
            </div>
        </div>

        <div className='bg-subtile p-3 lg:p-5 flex flex-col gap-3 rounded-xl shadow-md leading-none'>
            <div className='flex items-center gap-2'>
                <Image src='/avatars/bsdxr.jpeg' width={200} height={200} alt='soemthig' className='w-[64px]'/>
                <div className='flex flex-col leading-none justify-around items-start'>
                    <span className='text-[16px] font-semibold'>Capstone Machine Learning Developer</span>
                    <span className='text-sm text-subtileText'>May 2022 - December 2022</span>
                    <span className='text-sm text-subtileText link_normal'>Bit Space Development</span>
                    
                </div>
            </div>
            <div className='flex flex-col gap-2 relative text-subtileText'>
              <div className='flex gap-2'><div className='bulletPoint bg-current'/><span>Completion of the BSDXR Computer Vision Project.</span></div>
              <div className='flex gap-2'><div className='bulletPoint bg-current'/><span>Contributed to the AI Model Training initiative using NVIDIA Jetson Nanos, utilizing live video feeds captured by CSI Cameras to enhance computer vision capabilities.</span></div>
              <div className='flex gap-2'><div className='bulletPoint bg-current'/><span>Successfully completed Machine Learning certifications through NVIDIA’s Deep Learning Institute, specializing in Model Building with Image Classification.</span></div>
              {showBSD && (
                <div className='flex flex-col gap-2'>
                  <div className='flex gap-2'><div className='bulletPoint bg-current'/><span>Managed project repository and participated in team collaboration tools such as Git, Asana, and Slack.</span></div>
                </div>
              )}
              {!showBSD && (
                <div
                  onClick={() => setShowBSD(true)}
                  className="absolute -bottom-1 w-full h-[70%] flex flex-col"
                >
                  <div className='h-[50%] bg-gradient-to-b from-transparent to-subtile'></div>
                  <div className='h-[50%] bg-subtile flex justify-center items-center'>
                    <span className='text-foreground'>Show More</span>
                  </div>
                </div>
              )}
            </div>
            {showBSD && (
                <a href='https://www.bitspacedevelopment.com/' className='flex gap-1 items-center text-blue-500 cursor-pointer text-[14px]' target='_blank'>
                  <span>bitspacedevelopment.com</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              )}
        </div>
        
    </div>
  )
}

export default EmploymentList