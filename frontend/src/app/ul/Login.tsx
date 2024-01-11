'use client'
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Camera } from 'lucide-react';
import Axios from 'axios';
import {useRouter} from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const fileInputRef = useRef<HTMLInputElement | null>(null); 
const router = useRouter();
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')


const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const login = {
    email,
    password,
  };

  try {
    const response = await Axios.post("https://decertify.onrender.com/users", login);

    if (response.status === 200) {
      const userExists = response.data.userExists;

      if (userExists) {
        toast.success("Logged in successfully!");
        router.push("/Dashboard");
      } else {
        toast.error("Login failed! User does not exist");
      }
    } else {
      toast.error(response.data.error);
    }
  } catch (error) {
    toast.error("Login failed! " + String(error) + " User does not exist");
  }
};

    return (
        <div className='flex flex-col lg:flex-row w-full justify-center lg:items-center text-black bg-[#EDEDED]'>
          <Image src={'/Logo2.webp'} alt='Logo' width={100} height={50} className='block lg:hidden mt-5 ml-5' />
          <section className='overflow-hidden h-[100vh] hidden lg:block w-1/2'>
            <Image src={'/image.webp'} alt='Image' width={1200} height={100} className='h-[100vh]' />
          </section>
    
          <section className='flex flex-col lg:justify-center justify-normal lg:w-1/2 px-5 lg:px-5 h-fit bg-[#EDEDED]'>
              <div>
                <Image src={'/Logo2.webp'} alt='Logo' width={100} height={50}  className='hidden lg:block' />
              </div>
              <div className='flex justify-center my-3 w-full'>
                <div className='flex flex-col w-full text-center'>
                  <h1 className='font-bold text-[2rem] lg:text-[2rem] w-full opacity-80 '>Login</h1>
                  <p>Welcome back! Please proceed to Login</p>
                </div>
              </div>
    
    
              <div className='flex w-full lg:ml-0 h-fit bg-[#EDEDED]'>
              <form className='justify-center w-full' onSubmit={handleSubmit}>
                  <div className='w-full mt-5'>
                    <label htmlFor='email'>Email Address</label>
                    <input type='email' 
                    name='email'
                    id='email'
                    value={email}
                    placeholder='Enter Email Address' 
                    onChange={(event) => setEmail(event.target?.value)}
                    className='w-full p-3 rounded-md mt-1'
                    required
                    />
                  </div>
                  <div className='w-full mt-5'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' 
                    name='password'
                    id='password'
                    value={password}
                    placeholder='Enter Password' 
                    onChange={(event) => setPassword(event.target?.value)}
                    className='w-full p-3 rounded-md mt-1'
                    required
                    />
                  </div>
                  <button type='submit' className='w-full bg-purple-900 mt-6 p-3 rounded-md text-white hover:bg-purple-950'>Next</button>
                </form>  
              </div>
            </section>
            <ToastContainer />
          </div>
      )
    }

export default Login
