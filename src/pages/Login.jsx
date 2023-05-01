import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/AuthProvider';
import { toast } from 'react-hot-toast';


const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.pathname || '/'
   
    const {loginUser,user,loginWithGoogle,loginWithGithub} = useContext(AuthContext)
    const userLogin = (e) => {
        e.preventDefault()
        const form = e.target 
        const email = form.email.value  
        const password = form.password.value 
        loginUser(email,password)
        .then(res=> {
            console.log(res)
            toast.success('login successfull');
        })
        .catch(e=> {
            console.log(e)
            toast.error(e.message)
        })

    }
    useEffect(()=> {
        if(user){
            navigate(from)
        }
    },[user])

    return (
        <div className='container mx-auto p-5'>
            <Header></Header>
            <div className='flex justify-center pt-10'>
               <div>
               <form  onSubmit={userLogin} className='p-5  border-2 rounded-lg w-[100%] max-w-[400px]'>
                    <h2 className='font-bold'>Login</h2>
                   
                    <input required className='border-b-2 border-gray w-full mt-5 outline-none' type="email" placeholder='Email' name="email" id="" />
                    <input required className='border-b-2 border-gray w-full mt-5 outline-none' type="password" placeholder='Password ' name="password" id="" />
                
                    <button className='w-full text-center px-3 py-2 bg-yellow-500 rounded-lg mt-5'>Login</button>
                    <p className='text-center'>Dont have an account ? <Link className='text-yellow-500 mt-4' to='/register'>Register</Link></p>
                </form>

                <div className='mt-0 p-10'>
                    <button onClick={loginWithGithub} className='px-3 py-2 rounded-xl w-full mt-2 border-2 border-yellow-500'> continue with Github</button> <br />
                    <button onClick={loginWithGoogle} className='px-3 py-2 rounded-xl w-full mt-2 border-2 border-yellow-500'> continue with Google</button>
                </div>

               </div>

                
            </div>
          
        </div>
    );
};

export default Login;