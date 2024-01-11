'use client'
import { useState } from 'react'
import { Navigation } from '@/app/ul/Navs'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { X, LogOut, Menu } from 'lucide-react';

const MobileSidebar = () => {

    const Pathname = usePathname()
    const [mobileBar, mobileBarHandler] = useState<boolean>(true)

  return (
    <div className={`fixed block lg:hidden bg-white shadow-2xl h-[100svh] z-10 ${mobileBar ? 'w-0' : 'w-4/5'} text-black`}>
        < Menu  className={`ml-6 mt-5 ${mobileBar ? 'block' : 'hidden'}`} onClick={() => mobileBarHandler(!mobileBar)}/>
        <div className={`${mobileBar ? 'hidden' : 'block'}`} onClick={() => mobileBarHandler(!mobileBar)}>
            <div className='w-full flex items-center justify-between text-black'>
                <div className='mt-5 ml-5 cursor-pointer'>
                    <Link href='/Dashboard'>
                        <Image src={'/Logo2.webp'} alt='logo' width={200} height={100} className='mb-8' />
                    </Link>
                </div>
                <div className='flex justify-end mx-4'>
                    <X />
                </div>
            </div>
            {Navigation.map((link,i) => {
                const active = Pathname === link.path;

                return(
                    <li key={i} className='grid h-20 items-center p-4'>
                        <Link href={link.path} className={`flex items-center font-bold text-black rounded-md p-4 cursor-pointer ${active ? 'bg-purple-950 text-white hover:bg-purple-900 hover:shadow-md hover:shadow-purple-500' : null}`}>
                            <span className='mr-2'>{link.icon}</span>
                            <span className={` `} >{link.name}</span>
                        </Link>
                    </li>
                )
            })}

            <div className={`flex items-center font-bold w-2/4 lg:w-3/4 rounded-md p-4 cursor-pointer text-red-500 mt-24`}><span className='ml-5'><LogOut /></span><span className={``}>Logout</span></div>
        </div>
    </div>
  )
}

export default MobileSidebar
