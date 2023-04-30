import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/Sajek.png'
import { BsFillArrowRightCircleFill , BsFillArrowLeftCircleFill} from 'react-icons/bs';

const Slider = () => {
    return (
        <div className=''>
           <div>
           <div className='grid grid-cols-2'>
                <div className=''>
                    <h2 className='text-3xl font-bold uppercase'>Cox's bazar</h2>
                    <p className='mt-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa sit explicabo eos laudantium! Eum voluptatem esse vero nostrum fuga! Voluptatem qui eius similique totam expedita cumque omnis, dolore nesciunt ad eum perspiciatis? Accusamus, rem? Vel magnam ab nobis quis officiis, id, culpa incidunt porro itaque libero a molestias saepe ullam?</p>
                    <Link className='px-4 py-2 rounded-lg text-black bg-yellow-500 mt-10'>Booking</Link>
                </div>
                <div className='flex gap-3'>
                    <div className='w-4/12 relative'>
                            <img className='w-full rounded-xl bg-yellow-500  border-4  border-yellow-500' src={image} alt="" />
                          <div className='absolute bottom-1  rounded-xl bg-gradient-to-t w-full from-[#000000b0] to-transparent'>
                          <h2 className=' text-xl font-bold text-center p-2'>Cox bazar</h2>
                          </div>
                       
                    </div>
                    <div className='w-4/12 relative'>
                            <img className='w-full rounded-xl bg-black  border-4  border-black' src={image} alt="" />
                          <div className='absolute bottom-1  rounded-xl bg-gradient-to-t w-full from-[#000000b0] to-transparent'>
                          <h2 className=' text-xl font-bold text-center p-2'>Cox bazar</h2>
                          </div>
                       
                    </div>
                    <div className='w-4/12 relative'>
                            <img className='w-full rounded-xl bg-black  border-4  border-black' src={image} alt="" />
                          <div className='absolute bottom-1  rounded-xl bg-gradient-to-t w-full from-[#000000b0] to-transparent'>
                          <h2 className=' text-xl font-bold text-center p-2'>Cox bazar</h2>
                          </div>
                       
                    </div>

                </div>
            </div>
           
           </div>
      
            <div className='flex justify-center gap-5 mt-10'>
            <button><BsFillArrowLeftCircleFill  className='text-4xl'></BsFillArrowLeftCircleFill></button>
            <button><BsFillArrowRightCircleFill className='text-4xl'></BsFillArrowRightCircleFill></button>
           
            </div>

        </div>
    );
};

export default Slider;