import React from 'react';
import Image from 'next/image';

const HeroTileV2 = () => {
  return (
    <div className='flex flex-col md:flex-row'>
        
        <div className='w-full h-[30vh] md:w-[60vw] md:h-screenNav flex flex-col items-center justify-center text-center md:pl-4 md:pr-2'>
          <h3>Hi, I&#39;m Francis</h3>
          <h1 className='regular-40 md:regular-64'>Fullstack Developer</h1>
          <h3>Located in Danville, CA</h3>
        </div>
        <div className='w-full pt-2 pb-6 md:w-[40vw] md:h-screenNav overflow-hidden flex items-center justify-center md:pr-4 md:pl-2'>
          <Image src="/component_imgs/francisProfile1.png" alt='Francis Ekka' width={350} height={350} className='drop-shadow-xl'/>
        </div>
        
    </div>
  )
}

export default HeroTileV2