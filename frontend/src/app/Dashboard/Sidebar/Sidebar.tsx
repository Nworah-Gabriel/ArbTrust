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
    <div className={`h-screen hidden lg:block bg-white ${bar ? 'w-1/4' : 'w-24'} `}>
        <div className=' flex items-center justify-between text-black'>
            <div className='mt-4 ml-6 cursor-pointer'>
                <Link href='/Dashboard' className={``}>
                <Image src={'/Logo2.webp'} alt='logo' width={200} height={100} className={`mb-8 ${bar ? 'block' : 'hidden'}`} />
                <Image src={'/Logo3.webp'} alt='logo' width={100} height={100} className={`mb-8 ${bar ? 'hidden' : 'block'}`} />
                </Link>
            </div>
            <div className='flex justify-end mx-4 cursor-pointer' onClick={() => barHandle(!bar)}>
                <ArrowLeft className={`${bar ? null : 'rotate-180'}`} />
            </div>
        </div>
        {Navigation.map((link,i) =>{
            const active = Pathname === link.path;

            return(
                <li key={i} className='grid h-20 items-center'>
                    <Link href={link.path} className={`flex items-center font-bold text-black rounded-md p-4 cursor-pointer ${bar ? 'w-2/4 lg:w-3/4 mx-4 lg:mx-8' : 'w-2/4 mx-4'} ${active ? 'bg-purple-950 text-white hover:bg-purple-900 hover:shadow-md hover:shadow-purple-500' : null}`}>
                        <span className='mr-2'>{link.icon}</span>
                        <span className={` ${bar ? 'hidden lg:block' : 'hidden'}`} >{link.name}</span>
                    </Link>
                </li>
            )
        })}

        <div className={`flex items-center font-bold w-2/4 lg:w-3/4 rounded-md  p-4 cursor-pointer text-red-500 mt-48 ${bar ? 'mx-4 lg:mx-8' : 'mx-4'}`}><span className='mr-2'><LogOut /></span><span className={`${bar ? 'hidden lg:block' : 'hidden'}`}>Logout</span></div>
    </div>
  )
}

export default Sidebar