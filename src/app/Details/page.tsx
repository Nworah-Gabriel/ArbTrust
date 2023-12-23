import React from 'react'
import Image from 'next/image'
import { Camera } from 'lucide-react'
const page = () => {
  return (
    <div className='flex w-full justify-center text-black h-screen bg-[#EDEDED]'>
      <div className='lg:flex lg:w-full'>
      <Image src={'/Logo2.webp'} alt='Logo' width={100} height={50}  className='block lg:hidden mt-2 ml-6 ' />
      <section className='overflow-hidden h-[100svh] hidden lg:block'>
        <Image src={'/image.webp'} alt='Image' width={1200} height={100} className='h-[100vh]' />
      </section>

      <section className='lg:grid w-full px-5 lg:px-5 h-[100vh]'>
      <div className='flex text-center items-center mt-6 w-full'>
      <Image src={'/Logo2.webp'} alt='Logo' width={100} height={50}  className='hidden lg:block mt-[-5rem] ml-6' />
        <div>
      <h1 className='font-bold text-[1rem] lg:text-[2rem] w-full opacity-80 '>Personal Details</h1>
      <p>Enter the following information for further verification</p>
      </div>
      </div>

      <div className='w-full flex flex-col justify-center items-center mb-4'>
        <div className='border-4 border-purple-900 rounded-full  p-1 w-28 h-28'>
          <div className='flex justify-center items-center border-2 border-purple-900 rounded-full p-4 w-24 h-24 bg-white '></div>
          <div className=' flex justify-end mt-[-2.5rem]'>
            <div className='bg-purple-950 p-1 mt-3 text-white rounded-full'>
              <Camera />
            </div>
          </div>
        </div>
        <input type='file' />
        <p className='font-bold text-[1.5rem]'>Upload a Picture</p>
      </div>

      <div className='grid w-full lg:ml-0 bg-[#EDEDED]'>
        <form className='justify-center w-11/12 m-auto'>
          <div className='grid lg:flex lg:justify-between'>
            <div className='w-full mr-2'>
              <label htmlFor='first-name' className=''>First Name</label>
              <input type='text' placeholder='Enter First Name' className='w-full p-3 rounded-md mt-2' />
            </div>

            <div className='w-full mt-4 lg:mt-0'>
              <label htmlFor='first-name' className=''>Last Name</label>
              <input type='text' placeholder='Enter Last Name' className='w-full p-3 rounded-md mt-2' />
            </div>
          </div>
          <div className='w-full mt-5'>
            <label htmlFor='username'>Username</label>
            <input type='text' placeholder='Enter Username' className='w-full p-3 rounded-md mt-1'/>
          </div>
          <div className='w-full mt-5'>
            <label htmlFor='email'>Email Address</label>
            <input type='email' placeholder='Enter Email Address' className='w-full p-3 rounded-md mt-1'/>
          </div>
          <button type='button' className='w-full bg-purple-900 mt-6 p-4 rounded-md text-white'>Next</button>
        </form>  
      </div>
      </section>
    </div>
    </div>
  )
}

export default page
