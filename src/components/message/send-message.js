import React, { useState } from 'react'
import loading from '../../assets/icon/spinner.gif'

function SendMessage({handleMessage}) {
  const [sent, setSent] = useState("")
  const sentMessage = () => {
    handleMessage(sent);
    setSent("");
  }
  return (
    <div className='mt-5'>
        {/* <div className='bg-[#E9F3FF] p-[14.41px] flex items-center h-[54.41px] mx-5 rounded-[5px]'>
            <img src={loading} alt='alert reconnect' className='w-[18.34px] h-[18.34px] mr-[15.41px]' />
            <div className='text-[#4F4F4F] text-[12.75px] w-full'>Please wait while we connect you with one of our team ... </div>
        </div> */}
        <div className=' m-5 flex'>
            <input 
              value={sent}
              onChange={ (e) => setSent(e.target.value)}
              type='text' 
              placeholder='Type a new message' 
              className='w-full h-10 border-[#828282] rounded-[5px] mr-[13px] border placeholder:text-[#333333] p-4 py-[12.81px]'
              />
            <button 
              onClick={sentMessage}
              className='w-[76px] h-10 bg-[#2F80ED] flex justify-center items-center rounded-[5px]'
              >
                Send
            </button>
        </div>
    </div>
  )
}

export default SendMessage