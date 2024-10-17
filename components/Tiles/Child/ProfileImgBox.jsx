'use client'
import React from 'react'
import Image from 'next/image'
import { useEffect, useState } from 'react';

const ProfileImgBox = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const handleMouseMove = (e) => {
          // Move the div away from the cursor by 10px
          setPosition({ x: e.clientX + 10, y: e.clientY + 10 });
        };
    
        // Attach event listener to the mouse move event
        document.addEventListener('mousemove', handleMouseMove);
    
        // Clean up event listener on unmount
        return () => {
          document.removeEventListener('mousemove', handleMouseMove);
        };
      }, []);
  return (
    <div className='h-[50%] max-sm:w-full sm:h-full flex justify-center items-center sm:p-7 overflow-hidden heroHiddenSmall animate-slide-up '>
        <div className='aspect-[1/1] max-h-full rounded-full shadow-md'>
            <Image src='/component_imgs/francisProfile1.png' width={2979} height={2979} alt='francis_ekka'/>
        </div>
    </div>
  )
}

export default ProfileImgBox