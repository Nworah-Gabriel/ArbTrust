'use client'
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Camera } from 'lucide-react';
import Axios from 'axios';
import {useRouter} from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null); 
const router = useRouter();
const [firstname, setFirstName] = useState('')
const [lastname, setLastName] = useState('')
const [username, setUserName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const [selectedImage, setSelectedImage] = useState<string | null>(null);



  const handleCameraClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const signup = {
      profile: selectedImage,
      firstname,
      lastname,
      username,
      email,
      password
    }

    try {
      const response = await Axios.post("https://decertify.onrender.com/users", signup);
      // console.log(response.data);
  
      if (response.status === 200) {
        toast.success("Account created successfully!");
        
        router.push("/Category");
      } else {
        toast.error(response.data.error);
      }
    } catch (error) {
      toast.error("Username or email already exist. " + String(error));

    }
  }

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
              <h1 className='font-bold text-[2rem] lg:text-[2rem] w-full opacity-80 '>Personal Details</h1>
              <p>Enter the following information for further verification</p>
            </div>
          </div>

          <div className='w-full flex flex-col justify-center items-center mb-4 bg-[#EDEDED]'>
        <div className='border-4 border-purple-900 rounded-full  p-1 w-28 h-28 relative'>
          <div
            className='flex justify-center items-center border-2 border-purple-900 rounded-full p-4 w-24 h-24 bg-white'
            style={{ backgroundImage: `url(${selectedImage || ''})`, backgroundSize: 'cover' }}
          >
            {selectedImage ? null : <Camera onClick={handleCameraClick} />}
          </div>
          <input
            ref={fileInputRef}
            type='file'
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          <div className='absolute bottom-0 right-0 bg-purple-950 p-1 text-white rounded-full'>
            <Camera onClick={handleCameraClick} />
          </div>
        </div>
        <p className='font-bold text-[1.5rem]'>Upload a Picture</p>
      </div>

          <div className='flex w-full lg:ml-0 h-fit bg-[#EDEDED]'>
          <form className='justify-center w-full' onSubmit={handleSubmit}>
              <div className='grid lg:flex lg:justify-between'>
                <div className='w-full mr-2'>
                  <label htmlFor='first-name' className=''>First Name</label>
                  <input type='text' 
                  name='firstname'
                  id='firstname'
                  value={firstname}
                  onChange={(event) => setFirstName(event.target?.value)}
                  placeholder='Enter First Name' 
                  className='w-full p-3 rounded-md mt-2'
                  required
                  />
                </div>

                <div className='w-full mt-4 lg:mt-0'>
                  <label htmlFor='first-name' className=''>Last Name</label>
                  <input type='text' 
                  id='lastname'
                  value={lastname}
                  onChange={(event) => setLastName(event.target?.value)}
                  placeholder='Enter Last Name' 
                  className='w-full p-3 rounded-md mt-2' 
                  required
                  />
                </div>
              </div>
              <div className='w-full mt-5'>
                <label htmlFor='username'>Username</label>
                <input type='text' 
                id='username'
                value={username}
                onChange={(event) => setUserName(event.target?.value)}
                placeholder='Enter Username' 
                className='w-full p-3 rounded-md mt-1'
                required
                />
              </div>
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

export default Form