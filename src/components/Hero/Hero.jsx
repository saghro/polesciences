import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./Hero.css"

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Hero({ slides }) {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  useEffect(() => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty('--progress', 0); 
      progressContent.current.textContent = '';
    }
  }, []); 

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
         <SwiperSlide key={index} style={{ backgroundImage: `url(${slide.image})` }}>
         <div className="slide-content">
           <h1>{slide.title}</h1>
           <p>{slide.text}</p>
           <button className='btnn btnn-gradientt btnn-gloww'>{slide.buttonText}</button>
         </div>
       </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
