import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

const Header = () => {
    return (
        <div className='flex justify-between pt-8'>
            <div>
                <h2 className='text-xl font-bold'>Travel Guru</h2>
            </div>
            <form className='relative  rounded-lg px-2 outline-none bg-[#ffffff38] border border-white flex justify-center'>
            <button type='submit' className='px-2'>  <BsSearch></BsSearch></button>
            <input className='px-3 py-2 roundeed-lg outline-none bg-transparent'  placeholder='Search Your destination ...' type="text" name="search"/>
              
            </form>
            <div className='flex gap-3 justify-center items-center rounded-lg '>
                <NavLink >News</NavLink>
                <NavLink >Destination</NavLink>
                <NavLink >Blog</NavLink>
                <NavLink >Contact</NavLink>
                <NavLink className='px-4 py-2 rounded-lg text-black bg-yellow-600'>Login</NavLink>

            </div>
        </div>
    );
};

export default Header;