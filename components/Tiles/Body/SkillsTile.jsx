import React from 'react'
import Image from 'next/image'
import {Card, CardHeader, CardBody} from "@nextui-org/react";

const SkillsTile = () => {
  const skillLang = [
    {
      lang : "C / C++",
      color : "bg-green-500"
    },
    {
      lang : "Python",
      color : "bg-green-500"
    },
    {
      lang : "Java",
      color : "bg-green-500"
    },
  ]

  const skillWeb = [
    {
      attr : "HTML",
      color : "bg-[#f16529]" 
    },
    {
      attr : "CSS",
      color : "bg-[#25a1e1]"
    },
    {
      attr : "JavaScript",
      color : "bg-[#f1c40f]"
    },
    {
      attr : "React.js",
      color : "bg-[#61dafb]"
    },
    {
      attr : "Next.js",
      color : "bg-black"
    },
    {
      attr : "Node.js",
      color : "bg-[#8bc500]"
    },
    {
      attr : "Express.js",
      color : "bg-[#f1c40f]"
    },
    {
      attr : "TailwindCSS",
      color : "bg-[#161d2d]"
    },
    {
      attr : "NextUI",
      color : "bg-red-500"
    },
    {
      attr : "CI / CD",
      color : "bg-red-500"
    },
    {
      attr : "Github",
      color : "bg-red-500"
    },
    {
      attr : "Axure RP",
      color : "bg-red-500"
    },
  ]

  const skillData = [
    {
      datab: "MongoDB",
      color : "bg-blue-500"
    },
    {
      datab: "PostgreSQL",
      color : "bg-blue-500"
    },
  ]

  const skillSpecial = [
    {
      attr: "SEO Optimization",
      color: "bg-purple-500"
    },
    {
      attr: "Google Search Console",
      color: "bg-purple-500"
    },
    {
      attr: "Google Analytics",
      color: "bg-purple-500"
    },
    {
      attr: "Google Ads",
      color: "bg-purple-500"
    },
  ]

  return (
    <section id='Skills' className='mx-5 my-8 flex flex-col justify-center items-center'>
      <h1 className='regular-40 md:regular-64 mb-2'>My Skills</h1>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5'>
        <Card className='col-span-2'>
          <CardHeader className='flex justify-center text-center'>Web Developement</CardHeader>
          <CardBody>
            <div className='grid grid-cols-3 gap-3'>
              {skillWeb.map((skill) => (
                <div key={skill.attr} className={`bg-panelSub text-center px-3 py-2 rounded-md drop-shadow-xl`}>{skill.attr}</div>
              ))}
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader className='flex justify-center text-center'>Programming Languages</CardHeader>
          <CardBody>
            <div className='grid grid-cols-1 gap-3'>
              {skillLang.map((skill) => (
                <div key={skill.lang} className={`bg-panelSub text-center px-3 py-2 rounded-md drop-shadow-xl`}>{skill.lang}</div>
              ))}
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader className='flex justify-center text-center'>Database Management</CardHeader>
          <CardBody>
            <div className='grid grid-cols-1 gap-3'>
              {skillData.map((skill) => (
                <div key={skill.datab} className={`bg-panelSub text-center px-3 py-2 rounded-md drop-shadow-xl`}>{skill.datab}</div>
              ))}
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader className='flex justify-center text-center'>Specialized Skills</CardHeader>
          <CardBody>
            <div className='grid grid-cols-1 gap-3'>
              {skillSpecial.map((skill) => (
                <div key={skill.attr} className={`bg-panelSub text-center px-3 py-2 rounded-md drop-shadow-xl`}>{skill.attr}</div>
              ))}
            </div>
          </CardBody>
        </Card>

        <Card className='bg-panelDif sm:hidden'>
          <CardHeader className='flex justify-center text-center'>Quick Learner!</CardHeader>
          <CardBody>
            <div className=''>
              <p>Looking for a Developer? Unencumbered by years of corporate experience, I bring a unique perspective and dive headfirst into development!</p>
            </div>
          </CardBody>
        </Card>
      </div>

    </section>
  )
}

export default SkillsTile