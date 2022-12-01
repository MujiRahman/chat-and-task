import React from 'react'
import spinner from '../../assets/icon/spinner.gif'

function loading() {
  return (
    <div className='flex justify-center items-center flex-col w-full h-full'>
        <img src={spinner} alt='loading' className='w-[61.22px] h-[61.22px]'/>
        <h6 className='text-[#4F4F4F] text-[14.78px]'>Loading Chats...</h6>
    </div>
  )
}

export default loading