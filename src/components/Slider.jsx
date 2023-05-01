import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/Sajek.png'
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const Slider = () => {

  const [data, setData] = useState([])


  useEffect(() => {
    fetch('https://travel-guru-server-coral-nine.vercel.app')
      .then(res => res.json())
      .then(d => {
        // console.log(d)
        setData(d)
      })
      .catch(e => {
        console.log(e)
      })
  }, [])

  const swiper = useSwiper();
  return (
    <div className='pt-10'>
      <div>
        <div className='grid grid-cols-2 gap-5'>
          <div className=''>
            <h2 className='text-4xl font-bold uppercase mb-5'>Cox's bazar</h2>
            <p className='mt-5 pb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa sit explicabo eos laudantium! Eum voluptatem esse vero nostrum fuga! Voluptatem qui eius similique totam expedita cumque omnis, dolore nesciunt ad eum perspiciatis? Accusamus, rem? Vel magnam ab nobis quis officiis, id, culpa incidunt porro itaque libero a molestias saepe ullam?</p>
            <Link className='px-4 py-2 rounded-lg text-black bg-yellow-500 mt-10'>Booking</Link>
          </div>
          <div className=''>
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={5}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
            >
              {
                data.map((item,i)=>  <SwiperSlide key={i}>
                    <div className='relative'>
                      <img className='w-full rounded-xl bg-yellow-500  border-4  border-yellow-500' src={item.image_url} alt="" />
                      <div className='absolute bottom-1  rounded-xl bg-gradient-to-t w-full from-[#000000b0] to-transparent'>
                        <h2 className=' text-xl font-bold text-center p-2'>{item.name}</h2>
                      </div>
    
                    </div></SwiperSlide>
                  
                )
              }
             
             
              ...
            </Swiper>




          </div>
        </div>

      </div>

      <div className='flex justify-center gap-5 mt-10'>
        <button onClick={() => swiper.slideNext()}><BsFillArrowLeftCircleFill className='text-4xl'></BsFillArrowLeftCircleFill></button>
        <button><BsFillArrowRightCircleFill className='text-4xl'></BsFillArrowRightCircleFill></button>

      </div>


    </div>
  );
};

export default Slider;