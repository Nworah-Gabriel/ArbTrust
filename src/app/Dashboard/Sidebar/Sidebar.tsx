'use client'
import {useState} from 'react'
import { Navigation } from '@/app/ul/Navs'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, LogOut } from 'lucide-react';

const Sidebar = () => {
    const Pathname = usePathname()
    const [bar, barHandle] = useState<boolean>(true)


  return (
    <div className={`hidden lg:block bg-white shadow-2xl  ${bar ? 'w-1/4' : 'w-24'} `}>
        <div className=' flex items-center justify-between'>
            <div>
                <Image src={'/Logo.webp'} alt='logo' width={100} height={100} className='mb-8' />
            </div>
            <div className='flex justify-end mx-4' onClick={() => barHandle(!bar)}>
                <ArrowLeft className={`${bar ? null : 'rotate-180'}`} />
            </div>
        </div>
        {Navigation.map((link,i) =>{
            const active = Pathname === link.path;

            return(
                <li key={i} className='grid h-20 items-center'>
                    <Link href={link.path} className={`flex items-center font-bold  text-black rounded-md   p-4 cursor-pointer ${bar ? 'w-2/4 lg:w-3/4 mx-4 lg:mx-8' : 'w-2/4 mx-4'} ${active ? 'bg-purple-950 text-white hover:bg-purple-900 hover:shadow-md hover:shadow-purple-500' : null}`}>
                        <span className='mr-2'>{link.icon}</span>
                        <span className={` ${bar ? 'block hidden lg:block' : 'hidden'}`} >{link.name}</span>
                    </Link>
                </li>
            )
        })}

        <div className={`flex items-center font-bold w-2/4 lg:w-3/4 text-black rounded-md  p-4 cursor-pointer text-red-500 mt-52 ${bar ? 'mx-4 lg:mx-8' : 'mx-4'}`}><span className='mr-2'><LogOut /></span><span className={`${bar ? 'block hidden lg:block' : 'hidden'}`}>Logout</span></div>
    </div>
  )
}

export default Sidebar
