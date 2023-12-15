import React from 'react'
import { Creator } from '@/app/ul/Navs'
import Image from 'next/image'

const Creators = () => {
  return (
    <div className='lg:mr-10 h-full'>
      <div className='m-10'>
        <h2 className='text-[1.5rem] font-bold'>Featured Creators</h2>
      </div>
      <div className='grid grid-cols-[repeat(auto-fit,_minmax(30rem,_1fr))] gap-x-7 gap-y-3 justify-center ml-10 lg:ml-0 mr-10 lg:mr-0'>
      {Creator.map((creator, index) => (
          <div key={index} className=' mb-4 ml-10 rounded-md px-6 py-4 bg-white shadow-lg flex justify-between'>
            <div className='flex'>
            <div>
            <Image src={creator.img} alt={creator.name} width={80} height={100}/>
            </div>
            <div className='grid ml-2'>
                <p className='font-bold text-[1.2rem]'>{creator.name}</p>
                <p className='text-[.8rem] lg:mt-[-1rem]'>{creator.handle}</p>
                <button type='button' className='bg-purple-900 p-2 rounded-md text-white text-[.7rem] lg:text-[1rem] hover:bg-purple-950 hover:shadow-lg hover:shadow-purple-500'>View Collections</button>
            </div>
            </div>
            <div className='flex ml-6 '>
                <Image src={creator.nft} alt={creator.name} width={120} height={0} className='rounded-md h-24 '/>
                <Image src={creator.nft} alt={creator.name} width={80} height={0} className='hidden lg:block rounded-md ml-4 h-24'/>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Creators
