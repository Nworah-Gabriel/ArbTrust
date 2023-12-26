'use client'
import { Market } from '@/app/ul/Navs';
import Image from 'next/image';

const page = () => {   
   
   return (
    <div className='w-full mr-10 h-[90vh] overflow-y-scroll text-black bg-[#EDEDED]'>
    <div className='m-10'>
    </div>
    <div className='grid grid-cols-[repeat(auto-fit,_minmax(17rem,_1fr))] gap-x-2 gap-y-2 justify-center ml-10 lg:ml-0 mr-10 lg:mr-0'>
    {Market.map((brouse, index) => (
        <div key={index} className=' mb-4 ml-10 rounded-md bg-white shadow-lg grid justify-end'>
          <div className='flex mx-6 mt-4'>
          <div className='grid ml-2 w-full'>
              <p className='font-bold text-[.7rem] opacity-70 w-full flex justify-end'>{brouse.name}</p>
              <p className='text-[.8rem] lg:mt-[-.5rem] font-bold flex justify-end'>{brouse.handle}</p>
          </div>
          <div className='flex justify-end'>
          <Image src={brouse.img} alt={brouse.handle} width={30} height={100} className='' />
          </div>
          </div>
          <div className='relative trigger m-6 flex justify-center items-center' >
              <button type='button' className={`btn absolute justify-center  bg-white bg-opacity-80 p-2 rounded-md text-purple-900 font-bold text-[1rem] hover:shadow-lg hover:bg-opacity-100 hover:shadow-white`}>Mint NFT</button>
              <div>
              <Image src={brouse.nft} alt={brouse.handle} width={320} height={100} className='rounded-md ' />
              <div className='grid'>
            <div>
                <p className='font-bold text-[1rem]'>{brouse.title}</p>
            </div>
            <div className='flex justify-between'>
            <p className='opacity-70 text-[.8rem]'>Transaction fee</p>
            <div className='flex'>
            <Image src={brouse.icon} alt={brouse.handle} width={20} height={10} className='rounded-md ' />
            <p className='font-bold italic'>{brouse.price}</p>
            </div>
            </div>
          </div>
          </div>
        </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default page
