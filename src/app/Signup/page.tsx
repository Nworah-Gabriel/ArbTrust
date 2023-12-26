import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div className='flex text-black bg-[#EDEDED] w-full h-[100svh]'>
      <section className='overflow-hidden h-[100vh] hidden lg:block w-1/2'>
        <Image src={'/image.webp'} alt='Image' width={1200} height={100} className='h-[100vh]' />
      </section>

      <section className='flex flex-col lg:justify-center justify-normal lg:w-1/2 px-5 h-[100vh] bg-[#EDEDED]'>
        <Image src={'/Logo2.webp'} alt='Logo' width={120} height={100}  className='hidden lg:block' />
        <div className='flex flex-col w-full lg:ml-0 h-screen'>
          <Image src={'/Logo2.webp'} alt='Logo' width={120} height={100} className='block lg:hidden mt-5 lg:mt-0' />
          <div className='flex flex-col justify-center w-full mt-5'>
            <h1 className='font-bold text-[2rem] lg:text-[4rem] w-3/4 opacity-70 '>Connect Your Wallet</h1>
            <p className='w-3/4 mt-10 mb-10 text-xs lg:text-xl'>Choose your prefered Blockchain and connect your on-chain Identity</p>
            <p className='font-bold mb-4'>Blockchain</p>
            <Link href="/Details">
              <button type='button' className='flex items-center w-full justify-center bg-purple-900 hover:bg-purple-800 p-2 mr-2 rounded-md text-white'><Image src={'/metamask.webp'} alt='Metamask Logo' width={40} height={100} /> Connect with Metamask</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page;
