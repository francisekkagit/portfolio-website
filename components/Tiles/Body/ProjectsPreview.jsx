import React from 'react'
import { Chip } from '@nextui-org/react';

const ProjectsPreview = () => {
  const projects = [
    {
      name: "Portfolio Website",
      description: "Designed and developed website using a Next.js, NextUI, and TailwindCSS frontend which is supported by a Node.js and Express.js backend. Implemented continuous integration through Github and deployed through Vercel.",
      link: "https://francisekka-website.vercel.app/",
      img: "/component_imgs/proj_ptfo.png",
      chips: ["Next.js", "TailwindCSS", "NextUI", "Node.js"]
    },
    {
      name: "BSD Computer Vision Project",
      description: "Engineered an AI system capable of recognizing household items in real time through live video feeds. Integration with NVIDIA’s Jetson Nanos for image classification and relayed statistics to a dashboard created using Axure RP.",
      link: "https://www.linkedin.com/company/bit-space-development",
      img: "/component_imgs/proj_BSD.png",
      chips: ["Machine Learning", "Image Classification", "Python", "Axure RP"]
    },
    
  ];


  return (
    <div className='w-full max-tile flex flex-col gap-5 my-3' id='Projects'>
        {projects.map((proj, projIndex) => (
          <a className='rounded-xl flex max-md:flex-col p-3 md:p-5 gap-5 hover:bg-tile hover:shadow-lg ease-in-out duration-300' key={projIndex} href={proj.link} target='_blank'>
            <div className='w-full md:w-[50%] lg:w-[40%] 2xl:w-[30%] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex'>
              <img src={proj.img} alt={proj.name}/>
            </div>
            <div className='w-full md:w-[50%] lg:w-[60%] 2xl:w-[70%] flex flex-col justify-between gap-2'>
              <div className='flex flex-col gap-1 md:gap-2'>
                <span className='font-semibold text-[18px]'>{proj.name}</span>
                <span className='font-thin'>{proj.description}</span>
              </div>
              <div className='flex flex-wrap gap-2 md:gap-3'>
                {proj.chips.map((chip, chipIndex) => (
                  <Chip variant='flat' key={chipIndex} className='hover:shadow-sm transition-all duration-300'>{chip}</Chip>
                ))}
              </div>
            </div>
          </a>
        ))}
    </div>
  )
}

export default ProjectsPreview