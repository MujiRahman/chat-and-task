import React from 'react'
import back from '../../assets/icon/back.png'
import close from '../../assets/icon/close.png'

function headDetaiMessage({group, routing, participan}) {
  return (
    <div className='h-[73.5px] w-full flex items-center border-b border-[#BDBDBD]'>
        <button className='mr-[18.43px] ml-[29px]' onClick={()=>routing()}>
            <img src={back} alt='back' className='h-4 w-4'/>
        </button>
        <div className='w-full'>
            <h2 className='text-[#2F80ED] text-[16px] font-bold'>{group}</h2>
            <h6 className='text-[#333333] text-xs '>{participan}</h6>
        </div>
        <button className='mr-[21px]'>
            <img src={close} alt='close' className='w-[14px] h-[14px]'/>
        </button>
    </div>
  )
}

export default headDetaiMessage