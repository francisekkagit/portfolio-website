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
        <div className='bg-subtile p-3 flex flex-col gap-3 rounded-xl shadow-md leading-none'>
            <div className='flex items-center gap-2'>
                <Image src='/avatars/diabloLogo.png' width={2291} height={2291} alt='soemthig' className='w-[64px]'/>
                <div className='flex flex-col leading-none justify-around items-start'>
                    <span className='text-[16px] font-semibold'>Full Stack Developer</span>
                    <span className='text-sm text-subtext'>June 2023 - Present</span>
                    <span className='text-sm text-subtext link_normal'>Diablo Escapes</span>
                    
                </div>
            </div>
            <div className='flex flex-col gap-2 relative text-subtext'>
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
        </div>

        <div className='bg-subtile p-3 flex flex-col gap-3 rounded-xl shadow-md leading-none'>
            <div className='flex items-center gap-2'>
            <div className='w-16 h-16 bg-gray-400 rounded-xl'></div>
                <div className='flex flex-col leading-none justify-around items-start'>
                    <span className='text-[16px] font-semibold'>Web Development Intern</span>
                    <span className='text-sm text-subtext'>December 2022 - June 2023</span>
                    <span className='text-sm text-subtext link_normal'>Eminence Design & Solutions</span>
                    
                </div>
            </div>
            <div className='flex flex-col gap-2 relative text-subtext'>
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

        <div className='bg-subtile p-3 flex flex-col gap-3 rounded-xl shadow-md leading-none'>
            <div className='flex items-center gap-2'>
                <Image src='/avatars/bsdxr.jpeg' width={200} height={200} alt='soemthig' className='w-[64px]'/>
                <div className='flex flex-col leading-none justify-around items-start'>
                    <span className='text-[16px] font-semibold'>Capstone Machine Learning Developer</span>
                    <span className='text-sm text-subtext'>May 2022 - December 2022</span>
                    <span className='text-sm text-subtext link_normal'>Bit Space Development</span>
                    
                </div>
            </div>
            <div className='flex flex-col gap-2 relative text-subtext'>
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
        </div>
    </div>
  )
}

export default EmploymentList