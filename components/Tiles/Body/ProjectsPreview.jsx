import React from 'react'
import { Chip } from '@nextui-org/react';

const ProjectsPreview = () => {
  const projects = [
    {
      name: "Portfolio Website",
      description: "Built with Next.js and Node.js, this responsive, server-rendered portfolio site provides a dynamic user experience with handcrafted TailwindCSS styling and a light/dark mode toggle for accessibility. The site is integrated with a PostgreSQL database using REST APIs for efficient data handling. Continuous integration and deployment are managed via GitHub, with Vercel ensuring a streamlined hosting process.",
      link: "https://francisekka-website.vercel.app/",
      img: "/component_imgs/proj_ptfo.png",
      chips: ["Next.js", "TailwindCSS", "NextUI", "Node.js", "PostgreSQL", "Vercel", "SSR", "Dark Mode"]
    },
    {
      name: "BSD Computer Vision Project",
      description: "Developed an AI-powered image classification and object detection system using a Python-trained deep learning model to recognize desktop items—keyboards, monitors, and on-screen windows—via live video feeds. NVIDIA Jetson Nanos with CSI cameras enabled real-time, low-latency detection. A custom Axure RP dashboard was also created to visualize model performance and display recognition statistics.",
      link: "https://www.linkedin.com/company/bit-space-development",
      img: "/component_imgs/proj_BSD.png",
      chips: ["Machine Learning", "Image Classification", "Model Training", "Python", "NVIDIA Hardware", "Axure RP"]
    },
    
  ];


  return (
    <div className='w-full max-tile flex flex-col gap-5 my-3' id='Projects'>
        {projects.map((proj, projIndex) => (
          <a className='rounded-xl flex max-md:flex-col p-3 md:p-5 gap-5 hover:bg-tile hover:shadow-lg ease-in-out duration-300' key={projIndex} href={proj.link} target='_blank'>
            <div className='w-full md:w-[50%] lg:w-[40%] 2xl:w-[30%] rounded-xl overflow-hidden shadow-md flex'>
              <img src={proj.img} alt={proj.name} className="w-full h-full object-cover"/>
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