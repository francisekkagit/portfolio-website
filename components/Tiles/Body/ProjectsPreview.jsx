import React from 'react'
import { Chip } from '@nextui-org/react';

const ProjectsPreview = () => {
  const projects = [
    {
      name: "Portfolio Website",
      description: "Designed and developed website using a Next.js, NextUI, and TailwindCSS frontend which is supported by a Node.js and Express.js backend. Implemented continuous integration through Github and deployed through Vercel.",
      link: "/",
      img: "/component_imgs/pfoSite.png",
      chips: ["Next.js", "TailwindCSS", "NextUI", "Node.js"]
    },
    
  ];


  return (
    <div className='w-full max-tile flex flex-col gap-5 my-3'>
        {projects.map((proj, projIndex) => (
          <div className='bg-tile rounded-xl shadow-lg flex max-md:flex-col p-3 md:p-5 gap-5' key={projIndex}>
            <a className='w-full md:w-[40%] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex' href={proj.link}>
              <img src={proj.img} alt={proj.name}/>
            </a>
            <div className='w-full md:w-[60%] flex flex-col justify-between gap-2'>
              <div className='flex flex-col gap-1 md:gap-2'>
                <span className='font-semibold text-[18px]'>{proj.name}</span>
                <span className='font-thin'>{proj.description}</span>
              </div>
              <div className='flex gap-2 md:gap-3'>
                {proj.chips.map((chip, chipIndex) => (
                  <Chip variant='flat' key={chipIndex} className='hover:shadow-sm transition-all duration-300'>{chip}</Chip>
                ))}
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default ProjectsPreview