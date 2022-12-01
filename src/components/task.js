import React, { useState } from 'react'
import HeaderTask from './task/header-task'
import ListTask from './task/list-task'
import TASKDB from '../utils/taskdb'

function Task() {
  const [data, setData] = useState(TASKDB)
  console.log(data)
  return (
    <div className='w-[748px] h-[520px] bg-white absolute right-[34px] bottom-[108px] rounded-lg'>
      <HeaderTask />
      <div className='overflow-y-scroll h-[80%] scrollbar'>
        {data.map(data => {
          return(
            <div>
              <ListTask 
                judul={data.judul}
                tanggal={data.tanggal}
                ket={data.keterangan}
                selesai={data.complate}
              />
            </div>)
        })}
      </div>
    </div>
  )
}

export default Task