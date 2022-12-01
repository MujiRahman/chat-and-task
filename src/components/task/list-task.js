import React, { useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize';
import DatePicker from 'react-date-picker'
import expandAtas from '../../assets/icon/expand_more_atas.png'
import expandBawah from '../../assets/icon/expand_more_bawah.png'
import moreOption from '../../assets/icon/more-visible.png'
import note from '../../assets/icon/note-aktif.png'
import jam from '../../assets/icon/jam.png'
import DateExample from './date'

function ListTask(props) {
  const {selesai, judul, tanggal, id, ket} = props
  console.log(props)
  const [expands, setExpands] = useState(true)
  // const hanldeCheckboxChange=()=>{
  //   if(selesai)
  //       return null;
    // handleChange(id)
    // emitter.emit("NOTIFICATION",`"${todo.title}" task is completed successfully`)
  // }
  return (
    <div className='py-[22px] w-[671px] border-b border-[#828282] m-auto'>
      <div className='flex justify-between mb-5'>
        <div className='flex items-baseline'>
          <input 
            name='check'
            id='check'
            type='checkbox'
            checked={selesai} 
            // onChange={hanldeCheckboxChange}
            />
          {/* <h2 
            className='ml-[22.5px] font-bold text-[#4F4F4F] text-base max-w-[332px]'
            >{judul}</h2> */}
          <input 
            type='text' 
            placeholder='Type Task Title' 
            className={`ml-[22.5px] w-[380px] h-10 px-[14px] border-[#828282] rounded-[5px] placeholder:text-[#4F4F4F] focus:outline-none focus:border-sky-500 focus:ring-sky-500 ${judul === '' ? 'border' :'border-0'}`}
            value={judul}
            disabled={judul === '' ? false : true}
            />
        </div>
        <div className='flex items-center'>
          {/* <h6 className='text-[#EB5757] text-sm '>4 days left</h6> */}
          <h6 className='text-[#4F4F4F] text-sm ml-5'>{tanggal}</h6>
          <img src={expands ? expandAtas : expandBawah} alt='more expand' onClick={()=> setExpands(!expands)} className='w-[10px] h-1.5 mr-5 ml-4'/>
          <img src={moreOption} alt='more option' className='w-6 h-[22px]' />
        </div>
      </div>
      {
        expands &&
      <div>
        <div className='flex items-center ml-8 mb-4'>
          <label for='date'>
            <img src={jam} alt='date created' className='w-4 h-4 mr-5' />
          </label>
          <input 
            type='date' 
            id='date' 
            className='placeholder:text-[#4F4F4F] text-[#4F4F4F] p-[15px] h-10 w-[200px] border border-[#828282] rounded-[5px] focus:outline-none focus:border-sky-500 focus:ring-sky-500' 
            placeholder='Set Date'
            value={tanggal}
            />
          {/* <DatePicker id='date' className='h-10 w-[200px] border border-[#828282] rounded-[5px] focus:outline-none focus:border-sky-500 focus:ring-sky-500' placeholder='Set Date' /> */}
          {/* <DateExample tanggal={tanggal}/> */}
        </div>
        <div className='flex items-center ml-8'>
          <label for='create-note'>
            <img src={note} alt='created text' className='w-4 h-4 mr-5' />
          </label>
          {/* <textarea id='create-note' placeholder='No Description' className='h-6 w-full focus:border focus:rounded-[5px]  focus:outline-none focus:border-sky-500 focus:ring-sky-500'/> */}
          <TextareaAutosize 
            id='create-note' 
            placeholder='No Description' 
            value={ket}
            className=' placeholder:text-[#4F4F4F] h-6 w-full focus:border focus:rounded-[5px] focus:outline-none focus:border-sky-500 focus:ring-sky-500'/>
        </div>
      </div>
      }
    </div>
  )
}

export default ListTask