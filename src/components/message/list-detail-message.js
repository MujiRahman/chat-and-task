import React, { useState } from 'react'
import more from '../../assets/icon/more-visible.png'

function ListDetailMessage({nama, time, comment, deleteMessage}) {
  const [mores, setMores] = useState(false)
  return (
    <div className={nama === 'You' ? "flex flex-col items-end my-4" : "my-4"}>
      {nama === 'You' ?
        <h6 className='text-[10.23px] text-[#9B51E0]'>you</h6> :
        <h6 className='text-[12.75px] text-[#E6A443]'>{nama}</h6>
      }
        <div className={`flex items-start gap-[7.67px] ${nama === 'You' ? ' flex-row-reverse':''}`}>
          <div className={`max-w-[518px] p-[10px] rounded-[5px] ${nama === 'You' ? "bg-[#EEDCFF]":"bg-[#FCEED3]"}`}>
            <p className='text-[12.71px] text-[#4F4F4F]'>{comment}</p>
            <div className='text-[8.79px] text-[#4F4F4F] mt-3'>{time}</div>
          </div>
            <div className='relative'>
            {nama === 'You' ? 
                <div>
                  <button onClick={()=>setMores(true)}>
                    <img src={more} alt='options' className='w-[16.67px] h-[16.67px]' />
                  </button>
                  {
                  mores &&
                  <div className={`absolute bg-white rounded border-[#BDBDBD] border cursor-pointer w-[126px]`}>
                    <div className='text-[#2F80ED] text-xs p-3 border-b border-[#BDBDBD]' onClick={()=>setMores(false)}>Edit</div>
                    <div className='text-[#EB5757] text-xs p-3' onClick={()=>deleteMessage()}>Delete</div>
                  </div>
                  }
                </div> :
                <button>
                  <img src={more} alt='options' className='w-[16.67px] h-[16.67px]' />
                </button>
              }
            </div>
        </div>
        {/* <div className='h-[1px] bg-[#4F4F4F] w-[698px] relative mt-[45.37px]'>
          <p className='text-[#4F4F4F] text-[14.57px] absolute px-[30px] bg-white left-[36%] -top-[10px]'>Today June 09, 2021</p>
        </div>
        <div className='w-[141.83px] h-[33.89px] bg-[#E9F3FF] rounded-[5px] text-[#2F80ED] text-[14.46px] flex justify-center items-center m-auto mt-10 '>
          New Message 
        </div> */}
    </div>
  )
}

export default ListDetailMessage