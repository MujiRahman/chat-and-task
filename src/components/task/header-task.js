import React, { useState } from 'react'
import expandBawah from '../../assets/icon/expand_more_bawah.png'
import expandAtas from '../../assets/icon/expand_more_atas.png'

function HeaderTask() {
    const [expand, setExpand] = useState(false)
  return (
    <div className='flex py-6 border-b border-[#828282]'>
        <button className='border-[#828282] border rounded-[5px] text-[14.57px] bg-white h-10 py-[10px] px-[14px] flex items-center gap-3 ml-[114.23px]' onClick={()=>setExpand(!expand)}>My Tasks <img src={!expand ? expandBawah : expandAtas } alt='expand more' /></button>
        {
          expand && <div className='w-[288px] h-max text-xs border border-[#828282] rounded-[5px] absolute left-[30px] top-[68px] bg-white z-10'>
          <p className='p-[14px] border-b border-[#828282]'>Personal Errands</p>
          <p className='p-[14px]'>Urgent To-Do</p>
        </div>
        }
        <button className='border-[#828282] ml-[379.33px] rounded-[5px] text-[14.57px] bg-[#2F80ED] h-10 py-[10px] px-[14px] text-white'>New Task</button>
    </div>
  )
}

export default HeaderTask