import React, { useEffect, useState } from 'react';
import Header from './Header';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import Slider from './Slider';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill, BsArrowRightCircle } from 'react-icons/bs';
import { BiArrowToRight } from 'react-icons/Bi';
import { RangeDatePicker } from 'react-google-flight-datepicker';
import 'react-google-flight-datepicker/dist/main.css';


const Booking = () => {
    const [isMobile, setIsMobile] = useState(false);
    const data = useLoaderData()

    useEffect(() => {
      function handleResize() {
        setIsMobile(window.innerWidth <= 600);
      }
  
      window.addEventListener('resize', handleResize);
  
      handleResize();
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    return (
        <div className='mt-10 flex justify-center items-center h-full'>
            <div className='pt-10 px-2'>
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <div className=''>
                            <h2 className='text-4xl font-bold uppercase mb-5'>{data.name}</h2>
                            <p className='mt-5 pb-5'>{data.description}</p>
                            {/* <Link className='px-4 py-2 w-40 rounded-lg text-black bg-yellow-500 mt-10 flex justify-center item-center'>Booking <BiArrowToRight className='text-3xl'></BiArrowToRight></Link> */}
                        </div>
                        <div className='bg-gray-300 text-black p-5 rounded-lg'>
                            <form>
                                <label >Origin</label> <br />
                                <input className='w-full rounded-lg p-2 mt-1' type="text" value='Dhaka' name="" id="" /> <br />
                                <label >Destination</label> <br />
                                <input className='w-full rounded-lg p-2 mt-1' value={data.name} type="text" name="" id="" /> <br />
                                <div className='w-full mt-5'>
                                    <div className={`${isMobile ? 'mobile': 'desktop'}`}><RangeDatePicker
                                        startDate={new Date()}
                                        endDate={new Date()}
                                        onChange={(startDate, endDate) => onDateChang(startDate, endDate)}
                                        minDate={new Date(1900, 0, 1)}
                                        maxDate={new Date(2100, 0, 1)}
                                        dateFormat="D"
                                        monthFormat="MMM YYYY"
                                        startDatePlaceholder="Start Date"
                                        endDatePlaceholder="End Date"
                                        disabled={false}
                                        className="date-class-name"
                                        startWeekDay="monday"
                                    />
                                    </div>
                                </div>
                                <button className='btn bg-yellow-500 w-full rounded-lg p-2 mt-1'>Start booking</button>

                            </form>




                        </div>
                    </div>

                </div>




            </div>
        </div>
    );
};

export default Booking;