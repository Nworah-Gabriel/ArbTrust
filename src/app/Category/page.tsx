import React from 'react'
import Image from 'next/image'
import { Camera } from 'lucide-react'
const page = () => {
  return (
    <div className='flex w-full h-[100vh] text-black bg-[#EDEDED]'>
      <section className='overflow-hidden h-[100vh] hidden lg:block'>
        <Image src={'/image.webp'} alt='Image' width={1200} height={100} className='h-[100vh]' />
      </section>

      <section className='flex flex-col w-full px-10 pt-5 lg:pt-0 lg:justify-center justify-normal'>
        <Image src={'/Logo2.webp'} alt='Logo' width={100} height={50}  className='block lg:hidden my-5' />
        <div>
          <Image src={'/Logo2.webp'} alt='Logo' width={100} height={50}  className='hidden lg:block my-5 lg:mt-0' />
          <div className='flex flex-col w-full'>
            <h1 className='font-bold text-[2rem] lg:text-[3rem] w-full opacity-80 '>Category</h1>
            <p className='mb-10'>Select the category you belong to</p>
          </div>

          <div className='flex flex-col w-full lg:ml-0'>
            <form className=''>
              <div className='bg-white p-4 lg:w-11/12 rounded-md'>
                <input type='radio' name='radio' className='mr-2'/> NFT Certificate Issuer
              </div>
              <div className='bg-white p-4 mt-8 lg:w-11/12 rounded-md'>
                <input type='radio' name='radio' className='mr-2'/> NFT Certificate Claimer
              </div>
              <div className='flex w-full lg:w-11/12 justify-between mt-8'>
                <button type='button' className='w-1/2 lg:w-full border-2 border-purple-900 p-3 rounded-md text-purple-900 mr-2'>Back</button>
                <button type='button' className='w-full bg-purple-900 border-2 border-purple-900 p-3 rounded-md text-white'>Submit</button>
              </div>
            </form>  
          </div>
        </div>
      </section>
    </div>
  )
}

export default page
