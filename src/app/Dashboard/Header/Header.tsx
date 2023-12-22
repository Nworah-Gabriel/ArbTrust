'use client'
import { Search } from 'lucide-react'
import Image from 'next/image'
import {useState} from 'react'

const Header = () => {
    const [search, searchAct] = useState<boolean>(true)

  return (
    <div className='w-full h-[10vh] pr-10 pt-5 flex items-center justify-end bg-[#EDEDED] text-black'>
        <div className={`flex justify-end mr-5 px-3 rounded-md w-3/6 lg:w-1/4 items-center lg:bg-white lg:shadow-lg ${search ? 'shadow-none' : 'shadow-lg'}`}>
            <input type='text' className={`h-12 w-full lg:w-5/6 ${search ? 'hidden lg:block' : 'block'} p-2`} />
            <Search onClick={() => searchAct(!search)} className={`${search ? '' : null}`} />
        </div>
      <div className='flex bg-white rounded-md p-2 px-3 items-center justify-between shadow-lg'>
        {/* {User.name} */}
        <p className='hidden lg:block mr-2'>@Vivian</p> 
        <Image alt='Profile' src={'/profile.webp'} width={30} height={100} />
      </div>
    </div>
  )
}

export default Header
