'use client'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from 'next/image';
import Link from 'next/link';

// Import Swiper styles <Image src="/component_imgs/francisProfile1.png" alt='Francis Ekka' width={500} height={500}/>
import "swiper/css";

const HeroTile = () => {
  return (
    <div className='bg-website-10 flex flex-row justify-center py-4'>

        <div className='flex flex-col justify-center'>
            <h1>Hi There,</h1>
            <h1>I&#39;m Francis Ekka</h1>
            <h2>Full Stack Developer in Danville, CA</h2>
            
            <div className='flex flex-row'>
                <h3 className='pr-[6px]'>My skills include</h3>
                <div className='max-w-[300px]'>
                    <Swiper 
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        speed={1000}
                        modules={[Autoplay]}
                        loop={true}
                        className="swiper w-full"
                    >
                        <SwiperSlide><h3>ReactJS | NextJS | NodeJS</h3></SwiperSlide>
                        <SwiperSlide><h3>HTML | CSS | JavaScript</h3></SwiperSlide>
                        <SwiperSlide><h3>C++ | Python | Java</h3></SwiperSlide>
                        <SwiperSlide><h3>MongoDB | PostgreSQL</h3></SwiperSlide>
                        <SwiperSlide><h3>Search Engine Optimization</h3></SwiperSlide>
                        <SwiperSlide><h3>Amazon Web Services</h3></SwiperSlide>
                        <SwiperSlide><h3>Google Analytics | GSC</h3></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>

        <Link href="/About"><Image src="/component_imgs/francisProfile1.png" alt='Francis Ekka' width={400} height={400} className='ml-4 drop-shadow-2xl'/></Link>
    </div>
  )
}

export default HeroTile