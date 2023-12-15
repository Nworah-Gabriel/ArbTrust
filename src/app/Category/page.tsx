import React from 'react'
import Image from 'next/image'
import { Camera } from 'lucide-react'
const page = () => {
  return (
    <div className='flex w-full justify-center h-[100svh]'>
      <section className='overflow-hidden h-[100svh] hidden lg:block'>
        <Image src={'/image.webp'} alt='Image' width={1200} height={100} />
      </section>

      <section className='grid w-full px-10 justify-center lg:justify-normal'>
        <div>
            <Image src={'/Logo.webp'} alt='Logo' width={100} height={50}  className='block mt-2 ml-6' />
      <div className='grid ml-8  mt-6 w-full'>
      <h1 className='font-bold text-[2rem] lg:text-[3rem] w-full opacity-80 '>Category</h1>
      <p className='mb-10'>Select the category you belong to</p>
      </div>

      <div className='grid w-full lg:ml-10 lg:ml-0'>
        <form className=''>
        <div className='bg-white p-6 lg:w-2/4 rounded-md'>
          <input type='radio' name='radio' className='mr-4'/> NFT Certificate Issuer
        </div>

        <div className='bg-white p-6 mt-8 lg:w-2/4 rounded-md'>
          <input type='radio' name='radio' className='mr-4'/> NFT Certificate Claimer
        </div>
        <div className='flex w-full lg:w-2/4 justify-between mt-8'>
            <button type='button' className='w-full border-2 border-purple-900 p-4 rounded-md text-purple-900 mr-2'>Back</button>
            <button type='button' className='w-full bg-purple-900 border-2 border-purple-900 p-4 rounded-md text-white'>Submit</button>
        </div>
        </form>  
      </div>
      </div>
      </section>
    </div>
  )
}

export default page
