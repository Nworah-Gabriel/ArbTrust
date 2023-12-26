'use client'
import { Collection } from '@/app/ul/Navs';
import Image from 'next/image';
import { Download } from 'lucide-react';

const page = () => {
   
   return (
    <div className='w-full mr-10 h-[90vh] overflow-y-scroll text-black bg-[#EDEDED]'>
    <div className='m-10'>
    </div>
    <div className='grid grid-cols-[repeat(auto-fit,_minmax(17rem,_1fr))] gap-x-2 gap-y-2 justify-center ml-10 lg:ml-0 mr-10 lg:mr-0'>
    {Collection.map((collect, index) => (
        <div key={index} className=' mb-4 ml-10 rounded-md bg-white shadow-lg grid justify-end'>
          <div className='flex mx-6 mt-4'>
          <div className='flex ml-2 w-full items-center '>
            <Download className='w-1/4 p-1 rounded-md text-white bg-purple-900 cursor-pointer hover:bg-purple-950'/>
            <div className='w-full'>
              <p className='font-bold text-[.7rem] opacity-70 w-full flex justify-end'>{collect.name}</p>
              <p className='text-[.8rem] lg:mt-[-.5rem] font-bold flex justify-end'>{collect.handle}</p>
            </div>
          </div>
          <div className='flex justify-end'>
          <Image src={collect.img} alt={collect.handle} width={30} height={100} className='' />
          </div>
          </div>
          <div className='relative m-6 flex justify-center items-center' >
              <div>
              <Image src={collect.nft} alt={collect.handle} width={320} height={100} className='rounded-md ' />
              <div className='grid'>
            <div>
                <p className='font-bold text-[1rem]'>{collect.title}</p>
            </div>
            <div className='flex justify-between'>
            <p className='opacity-70 text-[.8rem]'>Transaction fee</p>
            <div className='flex'>
            <Image src={collect.icon} alt={collect.handle} width={20} height={10} className='rounded-md ' />
            <p className='font-bold italic'>{collect.price}</p>
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
