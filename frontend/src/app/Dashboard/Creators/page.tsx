'use client'
import { VeiwCollection } from '@/app/ul/Navs'
import Image from 'next/image'

const Page = ()=> {
    return(
        <div className='w-full mr-10 pt-5 h-[90vh] overflow-y-scroll text-black bg-[#EDEDED]'>
            <div className='ml-12 flex items-center'>
                <Image src={'/face.svg'} alt='...' width={150} height={150} className='sm:h-[60px] sm:w-[60px]' />
                <div className='pl-4'>
                    <p className='font-bold text-32'>Great Adams</p>
                    <p>@greatadams</p>
                </div>
            </div>
            <h1 className='ml-12 my-8 font-black'>View Collections</h1>
            <div className='grid grid-cols-[repeat(auto-fit,_minmax(17rem,_1fr))] gap-x-2 gap-y-2 justify-center ml-10 lg:ml-0 mr-10 lg:mr-0'>
                {VeiwCollection.map((collect, index) => (
                <div key={index} className=' mb-4 ml-10 rounded-md bg-white shadow-lg grid justify-end'>
                    <div className='flex mx-6 mt-4'>
                        <div className='grid ml-2 w-full'>
                            <p className='font-bold text-[.7rem] opacity-70 w-full flex justify-end'>{collect.name}</p>
                            <p className='text-[.8rem] lg:mt-[-.5rem] font-bold flex justify-end'>{collect.handle}</p>
                        </div>
                        <div className='flex justify-end'>
                            <Image src={collect.img} alt={collect.handle} width={30} height={100} className='' />
                        </div>
                    </div>
                    <div className='relative trigger m-6 flex justify-center items-center' >
                        <button type='button' className={`btn absolute justify-center  bg-white bg-opacity-80 p-2 rounded-md text-purple-900 font-bold text-[1rem] hover:shadow-lg hover:bg-opacity-100 hover:shadow-white`}>Mint NFT</button>
                        <div>
                            <Image src={collect.nft} alt={collect.handle} width={320} height={100} className='rounded-md h-40' />
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

export default Page;