import React from 'react';
import Image from 'next/image';

const HeroTileV2 = () => {
  return (
    <div className='flex flex-col md:flex-row'>
        
        <div className='border-2 border-red-500 w-full h-[50vh] md:w-[60vw] md:h-screenNav'>
          <h3>Hi, I'm Francis</h3>
          <h1 className='regular-64'>Fullstack Developer</h1>
          <h3>Located in Danville, CA</h3>
        </div>
        <div className='border-2 border-green-500 w-full h-[43.6vh] md:w-[40vw] md:h-screenNav'>
          <Image src="/component_imgs/francisProfile1.png" alt='Francis Ekka' width={400} height={400} className='drop-shadow-2xl'/>
        </div>
        
    </div>
  )
}

export default HeroTileV2