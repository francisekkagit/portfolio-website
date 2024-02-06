import React from 'react'
import {Card, CardHeader, CardBody, Image, Chip} from "@nextui-org/react";

const Projects = () => {
  return (
    <div className='m-5 flex flex-col gap-4 items-center'>
      <Card className='max-w-[90vw]'>
        <CardBody className='flex flex-col md:flex-row gap-4 max-md:items-center'>
          
          <div className='shrink-0 relative'>
            <Image alt="nextui logo" height={209} radius="sm" src="/component_imgs/portfolioPreview.png" width={400}/>
            <div className='absolute top-4 right-0'><Image alt="nextui logo" height={202} radius="sm" src="/component_imgs/portfolioPreviewM.png" width={102}/></div>
          </div>
          
          <div className='flex flex-col gap-2 min-w-0'>
            <p className='text-lg'>Portfolio Website</p>
            <p className='text-md text-default-500'>Designed and developed website using a Next.js, NextUI, and TailwindCSS frontend which is supported by a Node.js and Express.js backend. Implemented continuous integration through Github and deployed through Vercel.</p>
            <div className='flex flex-row gap-2 text-sm mt-2 flex-wrap'>
              <Chip variant='flat'>Next.js</Chip>
              <Chip variant='flat'>TailwindCSS</Chip>
              <Chip variant='flat'>NextUI</Chip>
              <Chip variant='flat'>Node.js</Chip>
              <Chip variant='flat'>Express</Chip>
              <Chip variant='flat'>Github</Chip>
              <Chip variant='flat'>CI / CD</Chip>
            </div> 
          </div>
          
        </CardBody>
      </Card>

      <Card className='max-w-[90vw]'>
        <CardBody className='flex flex-col md:flex-row max-md:items-center gap-4 '>
          
          <div className='shrink-0'><Image alt="nextui logo" height={254} radius="sm" src="/component_imgs/bsdxrPreview1.png" width={400}/></div>
          
          <div className='flex flex-col gap-2 min-w-0'>
            <p className='text-lg'>BSDXR Computer Vision Project</p>
            <p className='text-md text-default-500'>Engineered an AI system capable of recognizing household items in real-time through live video feeds. Integration with NVIDIA’s Jetson Nanos for image classification and relayed statistics to a dashboard created using Axure RP.</p>
            <div className='flex flex-row gap-2 text-sm mt-2 flex-wrap'>
              <Chip variant='flat'>Machine Learning</Chip>
              <Chip variant='flat'>Image Classification</Chip>
              <Chip variant='flat'>Hardware Integration</Chip>
              <Chip variant='flat'>Axure RP</Chip>
              <Chip variant='flat'>Github</Chip>
              <Chip variant='flat'>Asana</Chip>
              <Chip variant='flat'>Slack</Chip>
            </div> 
          </div>
          
        </CardBody>
      </Card>

      <Card className='max-w-[90vw] bg-panelDif'>
        <CardBody className='flex flex-col md:flex-row max-md:items-center gap-4 '>
          
          <div className='shrink-0'><Image alt="nextui logo" height={225} radius="sm" src="/component_imgs/morePreview.jpeg" width={400}/></div>
          
          <div className='flex flex-col gap-2 min-w-0'>
            <p className='text-lg'>More Projects Being Added!</p>
            <p className='text-md text-default-500'>This website is under construction and I&#39;m adding new components and features everyday! My projects that are yet to be updated here include applications developed in Swift and various games coded in Python and C++. I also have projects from my time obtaining my Bachelor&#39;s Degree in Computer Science relating to Data Structures, Algorithms, and Object Oriented Programming.</p>
            <div className='flex flex-row gap-2 text-sm mt-2 flex-wrap'>
              <Chip variant='faded'>C / C++</Chip>
              <Chip variant='faded'>Python</Chip>
              <Chip variant='faded'>Swift</Chip>
              <Chip variant='faded'>Game Development</Chip>
              <Chip variant='faded'>Data Structures</Chip>
              <Chip variant='faded'>Algorithms</Chip>
              <Chip variant='faded'>OOP</Chip>
            </div> 
          </div>
          
        </CardBody>
      </Card>
      
    </div>
  )
}

export default Projects