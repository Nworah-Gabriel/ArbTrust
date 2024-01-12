'use client'
import { DSettings } from '@/app/ul/Navs'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React from 'react'
import { Camera } from 'lucide-react'

const Page = () => {
    const Pathname = usePathname()
    // const [bar, barHandle] = useState<boolean>(true)


  return (
    <div className='bg-[#EDEDED] h-[100vh] overflow-y-scroll lg:overflow-hidden'>
        <div className='flex justify-between items-center text-black mx-6 pt-20 lg:pt-5 '>
            <div>
                <h1 className='text-3xl font-black pb-2'>Settings</h1>
                <p>Here you can change and edit your informations</p>
            </div>
            <div className='lg:flex hidden pl-12 w-1/3'>
                <button className='w-full mr-3 outline outline-1 outline-purple-800 text-purple-800 hover:bg-purple-800 hover:text-white p-3 rounded-md'>Cancel</button>
                <button className='w-full bg-purple-800 p-3 text-white rounded-md'>Save Changes</button>
            </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row-reverse text-black bg-[#EDEDED] lg:bg-white p-3 my-3 mx-6 rounded-md lg:h-[82vh]">
            <div className='w-full lg:w-4/5 mx-0 lg:mx-5 pt-3'>
                <h1 className='text-xl font-bold mb-2'>General Information</h1>
                <p>Here you can change and edit your informations</p>
                <div>
                    <div className='flex flex-col w-full lg:ml-0'>
                        <form className='mt-5'>
                            <div className='block lg:flex justify-between items-center mb-5'>
                                <div className='flex items-center'>
                                    <div className='border-4 border-purple-900 rounded-full  p-1 w-28 h-28'>
                                        <div className='flex justify-center items-center border-2 border-purple-900 rounded-full p-4 w-24 h-24 bg-white '></div>
                                            <div className=' flex justify-end mt-[-2.5rem]'>
                                            <div className='bg-purple-950 p-1 mt-3 text-white rounded-full'>
                                                <Camera />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='ml-5'>
                                        <h2 className='text-xl font-bold'>David David</h2>
                                        <p>@blacdav</p>
                                    </div>
                                    {/* <input type='file' /> */}
                                </div>
                                <div className='flex w-full lg:w-1/2 mt-5 pl-0 lg:pl-10'>
                                    <button className='w-full mr-3 bg-purple-800 text-white p-3 rounded-md'>Upload</button>
                                    <button className='w-full outline outline-1 outline-purple-800 text-purple-800 hover:bg-purple-500 hover:text-white p-3 rounded-md'>Delete</button>
                                </div>
                            </div>

                            <div className='grid lg:flex lg:justify-between'>
                                <div className='w-full mr-2'>
                                    <label htmlFor='first-name' className=''>First Name</label>
                                    <input type='text' placeholder='Enter First Name' className='w-full p-2 rounded-md mt-2 border-2' />
                                </div>

                                <div className='w-full mt-4 lg:mt-0'>
                                    <label htmlFor='first-name' className=''>Last Name</label>
                                    <input type='text' placeholder='Enter Last Name' className='w-full p-2 rounded-md mt-2 border-2' />
                                </div>
                            </div>
                            <div className='w-full mt-6'>
                                <label htmlFor='username'>Username</label>
                                <input type='text' placeholder='Enter Username' className='w-full p-3 rounded-md mt-2 border-2'/>
                            </div>
                            <div className='w-full mt-6'>
                                <label htmlFor='email'>Email Address</label>
                                <input type='email' placeholder='Enter Email Address' className='w-full p-3 rounded-md mt-2 border-2'/>
                            </div>
                            <div className='flex lg:hidden mt-5 items-center w-full'>
                                <button className='w-1/2 mr-3 outline outline-1 outline-purple-800 text-purple-800 hover:bg-purple-800 hover:text-white p-3 rounded-md'>Cancel</button>
                                <button className='w-full bg-purple-800 p-3 text-white rounded-md'>Save Changes</button>
                            </div>
                        </form>  
                    </div>
                </div>
            </div>
            <div className='flex lg:block m-auto overflow-x-scroll lg:overflow-hidden w-11/12 lg:w-1/4 lg:m-0 border-r-2 border-slate-300 text-sm'>
                    
                    {DSettings.map((settings, index) => {
                        const active = Pathname === settings.path;
                        return (
                            <div key={index}>
                                <div className='flex flex-row lg:flex-col h-16 lg:h-20 items-center p-2 hover:text-purple-800 font-bold'>
                                    <Link href={settings.path} className={`flex outline outline-1 outline-slate-100 lg:outline-none hover:bg-purple-300 hover:outline-none p-4 w-56 rounded-md mx-0 lg:mx-8 ${active ? 'bg-purple-300 text-purple-800' : null}`}>
                                        <span className='mr-2'>{settings.icon}</span>
                                        <span className="">{settings.name}</span>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    </div>
  )
}

export default Page;
