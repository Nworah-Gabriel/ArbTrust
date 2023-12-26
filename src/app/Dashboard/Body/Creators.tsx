import React from 'react'
import { Creator } from '@/app/ul/Navs'
import Image from 'next/image'
import Link from 'next/link'

const Creators = () => {
  return (
    <div className='lg:mr-10 h-full'>
      <div className='m-10'>
        <h2 className='text-[1.5rem] font-bold'>Featured Creators</h2>
      </div>
      <div className='grid grid-cols-[repeat(auto-fit,_minmax(30rem,_1fr))] gap-x-7 gap-y-3 justify-center ml-0 lg:ml-0 lg:mr-0'>
      {Creator.map((creator, index) => (
        <div key={index} className=' mb-4 mx-5 rounded-md px-3 py-4 bg-white shadow-lg flex justify-between'>
          <div className='flex'>
            <div>
              <Image src={creator.img} alt={creator.name} width={80} height={100}/>
            </div>
            <div className='flex flex-col ml-2'>
              <p className='font-bold text-[1.2rem] lg:mb-2'>{creator.name}</p>
              <p className='text-[.8rem] lg:mt-[-1rem]'>{creator.handle}</p>
              <Link href={'Dashboard/Creators'}><button type='button' className='bg-purple-900 p-2 rounded-md text-white text-[.7rem] lg:text-[1rem] hover:bg-purple-950 hover:shadow-lg hover:shadow-purple-500'>View Collections</button></Link>
            </div>
          </div>
          <div className='flex justify-between'>
            <Image src={creator.nft} alt={creator.name} width={100} height={0} className='rounded-md h-20 lg:h-24 ml-4'/>
            <Image src={creator.nft} alt={creator.name} width={60} height={0} className='hidden lg:block rounded-md ml-2 h-20 lg:h-24' />
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Creators
