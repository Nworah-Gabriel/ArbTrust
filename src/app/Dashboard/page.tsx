import React from 'react'
import Body from './Body/page'
import Creators from './Body/Creators'

const page = () => {
  return (
    <div className='overflow-y-scroll h-[90vh] bg-[#EDEDED] text-black'>
      <div>
      <Body />
      <Creators />
    </div>
    </div>
  )
}

export default page
