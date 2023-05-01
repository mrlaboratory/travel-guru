import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/Sajek.png'
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill, BsArrowRightCircle } from 'react-icons/bs';
import { BiArrowToRight } from 'react-icons/Bi';


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const Slider = () => {
  const [running,setRunning] = useState(1)

  const [data, setData] = useState([])


  useEffect(() => {
    fetch('https://travel-guru-server-coral-nine.vercel.app')
      .then(res => res.json())
      .then(d => {
        console.log(d)
        setData(d)
      })
      .catch(e => {
        console.log(e)
      })
  }, [])
  const current = data.find(m=> m.id == running)
  console.log(current)
  const swiper = useSwiper();
  const handlePrev = () => {
    if(running == 1){
      setRunning(data.length)
    }else{
      const rr = running-1
      setRunning(rr)
    }
  }

  const handleNext = () => {
    if(data.length == running){
      setRunning(1)
    }else{
      const rr = running+1
      setRunning(rr)
    }
  }
  return (
    <div className='pt-10'>
      <div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          <div className=''>
            <h2 className='text-4xl font-bold uppercase mb-5'>{current?.name}</h2>
            <p className='mt-5 pb-5'>{current?.description}</p>
            <Link to={`/booking/${running}`} className='px-4 py-2 w-40 rounded-lg text-black bg-yellow-500 mt-10 flex justify-center item-center'>Booking <BiArrowToRight className='text-3xl'></BiArrowToRight></Link>
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
                    <button onClick={()=> setRunning(item.id)} className='relative'>
                      <img className={`w-full rounded-xl  border-4  ${item?.id  == running ? 'bg-yellow-500  border-yellow-500' : ''}`} src={item.image_url} alt="" />
                      <div className='absolute bottom-1  rounded-xl bg-gradient-to-t w-full from-[#000000b0] to-transparent'>
                        <h2 className=' text-xl font-bold text-center p-2'>{item.name}</h2>
                   
                      </div>
    
                    </button></SwiperSlide>
                  
                )
              }
             
             
              ...
            </Swiper>




          </div>
        </div>

      </div>

      <div className='flex justify-center gap-5 mt-10'>
        <button onClick={handlePrev}><BsFillArrowLeftCircleFill className='text-4xl'></BsFillArrowLeftCircleFill></button>
        <button onClick={handleNext}><BsFillArrowRightCircleFill className='text-4xl'></BsFillArrowRightCircleFill></button>

      </div>


    </div>
  );
};

export default Slider;