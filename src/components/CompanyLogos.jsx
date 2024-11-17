import React from 'react'
import { companyLogos } from '../constants'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/pagination'; 
import 'swiper/css/navigation'; 
import awardone from '../assets/awardone.webp'
import Award2 from '../assets/Award2.webp'
import Award3 from '../assets/Award3.webp'
import Award4 from '../assets/Award4.webp'
import Award5 from '../assets/Award5.webp'
import Award6 from '../assets/Award6.webp'
import Award7 from '../assets/Award7.webp'
import Award8 from '../assets/Award8.webp'
import Award9 from '../assets/awardone.webp'
import fire from '../assets/fire.gif'

const CompanyLogos=({className})=> {
  return (
    <div className='mt-14' >
        <h5 className='tagline mb-6 text-center text-n-1/50'>Our Awards</h5>
        
        <ul className=' w-full  ' > <Swiper  grabCursor={true}   centeredSlides={true}   speed={900} spaceBetween={-20} slidesPerView={2} effect='coverflow' >
            <SwiperSlide><li data-aos="fade-up" className='flex relative animate-pulse items-center justify-center  h-[12.5rem]' >
                <img className=' z-10 lg:w-32 ' src={awardone} width={134} height={28}  alt={awardone} />
                <img className=' absolute z-0 -bottom-10 rotate-180 w-[50px]' src={fire} alt="" />
            </li></SwiperSlide>
            <SwiperSlide><li data-aos="fade-up" className='flex relative animate-pulse items-center justify-center  h-[12.5rem]' >
                <img className=' z-10' src={Award2} width={134} height={28}  alt={Award2} />
                <img className=' absolute z-0 -bottom-10 rotate-180 w-[50px]' src={fire} alt="" />
            </li></SwiperSlide>
            <SwiperSlide><li data-aos="fade-up" className='flex relative animate-pulse items-center justify-center flex-1 h-[12.5rem]' >
                <img className=' z-10' src={Award3} width={134} height={28}  alt={Award3} />
                <img className=' absolute z-0 -bottom-10 rotate-180 w-[50px]' src={fire} alt="" />
            </li></SwiperSlide>
            <SwiperSlide><li data-aos="fade-up" className='flex relative animate-pulse items-center justify-center flex-1 h-[12.5rem]' >
                <img className=' z-10' src={Award4} width={134} height={28}  alt={Award4} />
                <img className=' absolute z-0 -bottom-10 rotate-180 w-[50px]' src={fire} alt="" />
            </li></SwiperSlide>
            <SwiperSlide><li data-aos="fade-up" className='flex relative animate-pulse items-center justify-center flex-1 h-[12.5rem]' >
                <img className=' z-10' src={Award5} width={134} height={28}  alt={Award5} />
                <img className=' absolute z-0 -bottom-10 rotate-180 w-[50px]' src={fire} alt="" />
            </li></SwiperSlide>
            <SwiperSlide><li data-aos="fade-up" className='flex relative animate-pulse items-center justify-center flex-1 h-[12.5rem]' >
                <img className=' z-10' src={Award6} width={134} height={28}  alt={Award6} />
                <img className=' absolute z-0 -bottom-10 rotate-180 w-[50px]' src={fire} alt="" />
            </li></SwiperSlide>
            <SwiperSlide><li data-aos="fade-up" className='flex relative animate-pulse items-center justify-center flex-1 h-[12.5rem]' >
                <img className=' z-10' src={Award7} width={134} height={28}  alt={Award7} />
                <img className=' absolute z-0 -bottom-10 rotate-180 w-[50px]' src={fire} alt="" />
            </li></SwiperSlide>
            <SwiperSlide><li data-aos="fade-up" className='flex relative animate-pulse items-center justify-center flex-1 h-[12.5rem]' >
                <img className=' z-10' src={Award8} width={134} height={28}  alt={Award8} />
                <img className=' absolute z-0 -bottom-10 rotate-180 w-[50px]' src={fire} alt="" />
            </li></SwiperSlide>
            <SwiperSlide><li data-aos="fade-up" className='flex relative animate-pulse items-center justify-center flex-1 h-[12.5rem]' >
                <img className=' z-10' src={Award9} width={134} height={28}  alt={Award9} />
                <img className=' absolute z-0 -bottom-10 rotate-180 w-[50px]' src={fire} alt="" />
            </li></SwiperSlide></Swiper>
        </ul>
    </div>
  )
}

export default CompanyLogos