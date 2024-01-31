import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='h-full'>
      <div className='flex m-10 bg-white rounded-md shadow-lg p-8 justify-between'>
        <div className='lg:w-3/6'>
            <h1 className='text-[1.5rem] lg:text-[2rem] font-bold'>Discover, Collect and Claim your NFT Certificate</h1>
            <p className='mt-6 lg:mt-8'>A platform that enables learners to earn and display non-fungible token (NFT) certificate as proof of their educational achievements </p>
            <button type='button' className='bg-purple-950 hover:bg-purple-900 hover:shadow-lg hover:shadow-purple-500 rounded-md p-4 text-white mt-4'>Explore Collection</button>
        </div>
        <Image src={'/placeholder.webp'} alt='Placeholder' width={350} height={100} className='pt-2 mr-28 mt-[-2rem] hidden lg:block'/>
      </div>
    </div>
  )
}

export default page
