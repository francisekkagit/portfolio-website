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
    <section id='heroTile' className='bg-website-10 flex flex-row max-[878px]:flex-col max-[878px]:items-center justify-center max-[878px]:py-4 pb-8 pt-2'>

        <div className='flex flex-col justify-center max-[470px]:text-center'>
            <h1>Hi There,</h1>
            <h1>I&#39;m Francis Ekka</h1>
            <h2>Full Stack Developer in Danville, CA</h2>
            
            <div className='flex flex-row max-[470px]:hidden'>
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

        <Link href="/" className=''><Image src="/component_imgs/francisProfile1.png" alt='Francis Ekka' width={400} height={400} className='drop-shadow-2xl'/></Link>
    </section>
  )
}

export default HeroTile