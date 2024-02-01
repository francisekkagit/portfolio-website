import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import {Snippet} from "@nextui-org/react";
import LatinText from '@/components/LatinText';

const OverviewTile = () => {
  return (
    <section id='Overview' className='flex flex-col sm:flex-row items-center gap-5 justify-around mx-5 mt-2 md:mt-0'>
        
        <div className='flex flex-col gap-5 w-full sm:max-w-[400px] text-center'>
            <h1 className='regular-40 md:regular-64'>About Me</h1>
            {/* Arizona State Card */}
            <Card className="w-full">
                <CardHeader className="flex gap-3 justify-center">
                    <Image
                        alt="nextui logo"
                        height={28}
                        radius="sm"
                        src="/avatars/asuLogo.png"
                        width={40}
                    />
                    <div className="flex flex-col">
                        <p className="text-md">Arizona State University</p>
                        <p className="text-small text-default-500">Bachelor&#39;s Degree</p>
                    </div>
                </CardHeader>
      
                <CardBody className='text-default-500 text-center'>
                    <p className='text-textHighlight'>August 2018 - December 2022</p>
                    <p>B.S. in <span className='text-textHighlight'>Computer Science</span>.</p>
                    <p>GPA: <span className='text-textHighlight'>3.48</span> Cum Laude.</p>
                </CardBody>
                
                <CardFooter className='flex justify-center'>
                    <Link
                    showAnchorIcon
                    href="/About"
                    >
                        See More of My Education
                    </Link>
                </CardFooter>
            </Card>
            {/* AWS Certification Card */}
            <Card className="w-full">
                <CardHeader className="flex gap-3 justify-center">
                    <Image
                        alt="nextui logo"
                        height={40}
                        radius="sm"
                        src="/avatars/awsIcon.png"
                        width={40}
                    />
                    <div className="flex flex-col text-center">
                        <p className="text-md">Amazon Web Services</p>
                        <p className="text-small text-default-500">Certified Cloud Practitioner</p>
                    </div>
                </CardHeader>
      
                <CardBody className='text-center flex flex-col items-center'>
                    <p className='text-textHighlight'>AWS Certified Cloud Practitioner</p>

                    <Snippet hideSymbol size="sm" className='max-w-[190px] my-1'>N4BLKEQ14JV41VGZ</Snippet>

                    <p className='text-default-500'>April 2023 - April 2026</p>
                </CardBody>
                
                <CardFooter className='flex justify-center'>
                    <Link
                    isExternal
                    showAnchorIcon
                    href="https://aws.amazon.com/verification"
                    >
                        Validate My Certification
                    </Link>
                </CardFooter>
            </Card>
        </div>

        <div className='flex flex-col gap-5 w-full max-w-[750px]'>
            {/* Diablo Escapes Card */}
            <Card className="w-full">
                <CardHeader className="flex gap-3">
                    <Image
                        alt="nextui logo"
                        height={40}
                        radius="sm"
                        src="/avatars/diabloLogo.png"
                        width={40}
                    />
                    <div className="flex flex-col">
                        <p className="text-md">Diablo Escapes</p>
                        <p className="text-small text-default-500">Full Stack Developer</p>
                    </div>
                </CardHeader>
      
                <CardBody className='text-default-500'>
                    <p>Design and Develop responsive web applications using <span className='text-textHighlight'>Next.js, React.js, Node.js, and MongoDB</span>.</p>
                    <p>Monitor online presence, user traffic, and conversion metrics using tools such as <span className='text-textHighlight'>Google Analytics and Google Search Console</span>.</p>
                    <p>Perform <span className='text-textHighlight'>Technical SEO audits and mangage dynamic metadata</span> to improve search engine visibility.</p>
                </CardBody>
                
                <CardFooter>
                    <Link
                    isExternal
                    showAnchorIcon
                    href="https://www.diabloescapes.com/"
                    >
                        Visit Diabloescapes.com
                    </Link>
                </CardFooter>
            </Card>
            {/* Bit Space Development Card */}
            <Card className="w-full">
                <CardHeader className="flex gap-3">
                    <Image
                        alt="nextui logo"
                        height={40}
                        radius="sm"
                        src="/avatars/bsdxr.jpeg"
                        width={40}
                    />
                    <div className="flex flex-col">
                        <p className="text-md">Bit Space Development</p>
                        <p className="text-small text-default-500">Student Developer</p>
                    </div>
                </CardHeader>
      
                <CardBody className='text-default-500'>
                    <p><span className='text-textHighlight'>AI Model Training</span> with NVIDIA Jetson Nanos through Live Video Feeds captured by CSI Cameras.</p>
                    <p>Completion of the Bit Space Development Computer Vision Project.</p>
                    <p><span className='text-textHighlight'>Machine Learning Certifications through NVIDIA&#39;s Deep Learning Institute</span> in Model Building with Image Classification and implementation of the Jetson Nano.</p>
                    <p>Repository and Collaboration Tools such as <span className='text-textHighlight'>Git, Asana, and Slack</span>.</p>
                </CardBody>
                
                <CardFooter>
                    <Link
                    showAnchorIcon
                    href="/About"
                    >
                        See More of My Experience
                    </Link>
                </CardFooter>
            </Card>
        </div>

    </section>
  )
}

export default OverviewTile