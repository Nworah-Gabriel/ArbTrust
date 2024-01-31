"use client"
import React from 'react'
import Image from 'next/image'

type propTypes = {
    isVisible: boolean;
    onClose: ()=> void;
    // children: React.ReactNode;
}

const Delete: React.FC<propTypes> = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    const handleClose = (event:any) => {
        if(event.target.id === "wrapper") onClose();
    }
  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' id="wrapper" onClick={handleClose}>
        <section className='w-[80%] lg:w-[50%] p-5 bg-white text-black flex flex-col justify-center items-center text-center rounded-lg'>
            <Image src={'/sad.svg'} alt='...' width={100} height={100} className='mb-2' />
            <h1 className='text-xl font-bold my-5'>We are Sad you are leaving already!</h1>
            <p>Are you sure you want to delete your account? All data would be lost if you proceed with this action</p>
            <button className='w-full bg-[#EB1515] text-white p-3 rounded-md mt-3'>Delete Account</button>
        </section>
    </div>
  )
}

export default Delete
