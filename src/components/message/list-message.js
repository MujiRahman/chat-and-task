import React from 'react'
import peaple from '../../assets/icon/peaple.png'
import peaple0 from '../../assets/icon/person.png'

function listMessage(props) {
  const {name, group, comment, create, seeDetail} = props
  return (
    <div className='w-[666px] mx-8 py-[22px] border-b border-[#828282] flex' >
        <button className='w-[57px] h-8 relative' onClick={()=>seeDetail()}>
          <div className='w-[34px] h-[34px] bg-[#E0E0E0] rounded-full absolute left-0 top-0 flex justify-center items-center'>
            <img src={peaple0} alt='imageListGroup' className=' w-3 h-3' />
          </div>
          <div className='w-[34px] h-[34px] bg-[#2F80ED] rounded-full absolute right-0 top-0 z-10 flex justify-center items-center'>
            <img src={peaple} alt='imageListGroup' className='w-3 h-3'/>
          </div>
        </button>
        <div className='ml-[17px] w-full -mt-2'>
            <div className='w-full flex items-baseline'>
                <h3 className='text-[#2F80ED] text-[16px] font-bold w-full' onClick={()=>seeDetail()}>{group}</h3>
                <p className='text-[#4F4F4F] text-[14px] ml-4 w-[118px]'>{create}</p>
            </div>
            <h6 className='text-[#4F4F4F] text-[14px] font-bold'>{name}</h6>
            <p className='text-[#4F4F4F] text-[10px]'>{comment}</p>
        </div>
    </div>
  )
}

export default listMessage