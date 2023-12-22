'use client'
import { DSettings } from '@/app/ul/Navs'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React from 'react'

const page = () => {
    const Pathname = usePathname()
    // const [bar, barHandle] = useState<boolean>(true)


  return (
    <div className='bg-[#EDEDED] h-screen'>
        <div className='text-black pl-6'>
            <div>
                <h1 className='text-3xl font-black pb-2'>Settings</h1>
                <p>Here you can change and edit your informations</p>
            </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row-reverse text-black bg-white p-3 m-6 rounded-md lg:h-[75vh]">
            <div className='w-4/5 ml-5 pt-6'>
                <h1 className='text-xl font-bold mb-2'>Security Information</h1>
                <p>Here you can change and edit your informations</p>
                <div className='grid w-11/12 mt-5 lg:ml-0'>
                    <form className=''>
                        <div className='grid lg:flex lg:justify-between'>
                            <div className='w-full'>
                                <label htmlFor='first-name' className=''>First Name</label>
                                <input type='text' placeholder='Enter First Name' className='w-full p-2 rounded-md mt-2 border-2' />
                            </div>

                            <div className='w-full mt-4 lg:mt-0 lg:ml-2'>
                                <label htmlFor='first-name' className=''>Last Name</label>
                                <input type='text' placeholder='Enter Last Name' className='w-full p-2 rounded-md mt-2 border-2' />
                            </div>
                        </div>
                        <div className='w-full mt-5'>
                            <label htmlFor='username'>Username</label>
                            <input type='text' placeholder='Enter Username' className='w-full p-3 rounded-md mt-2 border-2'/>
                        </div>
                        <div className='full mt-5'>
                            <label htmlFor='email'>Email Address</label>
                            <input type='email' placeholder='Enter Email Address' className='w-full p-3 rounded-md mt-2 border-2'/>
                        </div>
                        {/* <button type='button' className='w-full bg-purple-900 mt-5 p-4 rounded-md text-white'>Next</button> */}
                    </form>  
                </div>
            </div>
            <div className='flex lg:block m-auto overflow-x-scroll lg:overflow-hidden w-11/12 lg:w-1/4 lg:m-0 border-r-2 border-slate-300'>
                {DSettings.map((setings,index) =>{
                    // const active = Pathname === setings.path;

                    return(
                        <div>
                            <div key={index} className='flex flex-row lg:flex-col h-16 lg:h-20 items-center p-2 hover:text-purple-800 font-bold'>
                            <Link href={setings.path} className='flex outline outline-1 outline-slate-100 lg:outline-none hover:bg-purple-300 hover:outline-none p-4 w-56 rounded-md mx-8'>
                                <span className='mr-2'>{setings.icon}</span>
                                <span className="" >{setings.name}</span>
                            </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default page;