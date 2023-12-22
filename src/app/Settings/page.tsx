import React from 'react'

const page = () => {
  return (
    <div className='w-full h-full m-10 pt-10 lg:pt-0'>
      <div className='grid lg:flex justify-between items-center'>
        <div className='w-full'>
            <h1 className='font-bold text-[2rem] '>Settings</h1>
            <p>Here you can change and edit your information</p>
        </div>
      <div className='flex w-full justify-end'>
        <button type='button' className='border-2 border-purple-900 p-2 px-8 rounded-md mr-4 hover:bg-purple-500 hover:text-white hover:shadow-lg hover:shadow-purple-500'>Cancel</button>
        <button type='button' className='bg-purple-900 p-2 border-2 border-purple-900  rounded-md text-white hover:bg-purple-950 hover:shadow-lg hover:border-purple-950 hover:shadow-purple-500' >Save Changes</button>
      </div>
    </div>

    <div>

    </div>
    </div>
  )
}

export default page
