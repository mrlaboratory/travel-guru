import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';


const Register = () => {
    return (
        <div className='container mx-auto p-5'>
            <Header></Header>
            <div className='flex justify-center pt-10'>
               <div>
               <form  className='p-5 border border-2 rounded-lg w-[100%] max-w-[400px]'>
                    <h2 className='font-bold'>Create an account</h2>
                    <input required className='border-b-2 border-gray w-full mt-5 outline-none' type="text" placeholder='First name ' name="" id="" />
                    <input className='border-b-2 border-gray w-full mt-5 outline-none' type="text" placeholder='Last name ' name="" id="" />
                    <input required className='border-b-2 border-gray w-full mt-5 outline-none' type="email" placeholder='Email' name="" id="" />
                    <input required className='border-b-2 border-gray w-full mt-5 outline-none' type="password" placeholder='Password ' name="" id="" />
                    <input className='border-b-2 border-gray w-full mt-5 outline-none' type="password" placeholder='Confirm password ' required name="" id="" />
                    <button className='w-full text-center px-3 py-2 bg-yellow-500 rounded-lg mt-5'>Create and Account</button>
                    <p className='text-center'>Alredy have account ? <Link className='text-yellow-500 mt-4' to='/login'>Login</Link></p>
                </form>

                <div className='mt-10 p-10'>
                    <button className='px-3 py-2 rounded-xl w-full mt-2 border-2 border-yellow-500'> continue with facebook</button> <br />
                    <button className='px-3 py-2 rounded-xl w-full mt-2 border-2 border-yellow-500'> continue with google</button>
                </div>

               </div>

                
            </div>
          
        </div>
    );
};

export default Register;