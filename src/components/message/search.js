import React from 'react'
import searchimg from '../../assets/icon/search_coklat.svg'

function search() {
  return (
    <div className='flex w-[666px] h-8 border border-[#828282] rounded-[5px] m-auto my-5 py-[10.04px] px-[58.82px]'>
        <input type='text' name='search' className='w-full mr-2 h-3 placeholder:text-[#333333]' placeholder='Search'/>
        <label id='search'>
            <img src={searchimg} alt='search' className=' w-3 h-3' />
        </label>
    </div>
  )
}

export default search