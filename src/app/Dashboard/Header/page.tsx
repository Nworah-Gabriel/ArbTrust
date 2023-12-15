'use client'
import { Search } from 'lucide-react'
import Image from 'next/image'
import {useState} from 'react'

const page = () => {
    const [search, searchAct] = useState<boolean>(true)

  return (
    <div className='w-full h-26 mb-2 pr-10 pt-6 flex items-center justify-end '>
        <div className='flex justify-end mr-6 rounded-md w-3/5 lg:w-1/4 items-center lg:bg-white lg:shadow-lg'>
            <input type='text' className={`h-12 w-full lg:w-5/6 ${search ? 'hidden lg:block' : 'block'}`} />
            <Search onClick={() => searchAct(!search)} className={`${search ? '' : null}`} />
        </div>
      <div className='flex bg-white rounded-md p-4 px-6 justify-between shadow-lg'>
        {/* {User.name} */}
        <p className='hidden lg:block'>@Peculiar</p> 
        <Image alt='Profile' src={'/profile.webp'} width={30} height={100} />
      </div>
    </div>
  )
}

export default page
