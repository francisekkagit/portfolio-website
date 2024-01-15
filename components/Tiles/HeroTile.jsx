'use client'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

const HeroTile = () => {
  return (
    <div className='bg-website-10'>
        <div className='flex flex-col w-[60%]'>
            <h1>Hi There,</h1>
            <h1>I'm Francis Ekka</h1>
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
                <SwiperSlide><h2>Full Stack Developer.</h2></SwiperSlide>
                <SwiperSlide><h2>Frontend Fanatic.</h2></SwiperSlide>
                <SwiperSlide><h2>Motorsport Enthusiast.</h2></SwiperSlide>
            </Swiper>
        </div>

        
    </div>
  )
}

export default HeroTile