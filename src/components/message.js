import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Search from './message/search'
import Loading from './message/loading'
import ListMessage from './message/list-message'
import DetailMessage from './message/detail-message'
import DATABASE from '../utils/db'

function Message() {
  // const[routing, setRouting] = useState(1)
  const [datas, setDatas] = useState(DATABASE)
  const [detail, setDetail] = useState({routing: 1, id: 0})
  const [loading, setLoading] = useState(true)
  // const [id, setId] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])

  // useEffect(() => {
  //   console.log('isi useEffect', detail)
  //   if (detail.id > 0 ) {
  //     setDatas(datas.find(data => data.id === detail.id))
  //     alert('message')
  //     console.log('isi useEffect', detail)
  //   }
  // }, [datas, detail, detail.id])
  
  // async function getMessage() {
  //   try {
  //     const response = await axios.get('https://637ccdbb72f3ce38eaae325c.mockapi.io/todo/v1/chatting');
  //     setLoading(false)
  //     setListMsg(response.datsa)
  //   } catch (error) {
  //     setLoading(false)
  //     console.error(error);
  //   }
  // }

  // async function GetDetailMessage() {
  //   try {
  //     const response = await axios.get(`https://637ccdbb72f3ce38eaae325c.mockapi.io/todo/v1/chatting/${id}`);
  //     console.log('isi respon chat', response.data)
  //     setDetail(response.data)
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  function renderMessage () {
    console.log('isi message', detail)
    if (detail.routing === 1) {
        return(
          <>
            <Search />
            {loading ? <Loading /> :
            <div className='h-[444px] overflow-y-scroll'>
              {
                datas.map(data => {
                  return(
                    <ListMessage 
                    group={data.namaGroup === "" ? data.nama : data.namaGroup}
                    name={data.lastChat === "" ? "" : data.lastChat}
                    comment={data.lastMessage}
                    create={data.tanggal.slice(0, 10)}
                    seeDetail={()=>setDetail({id: data.id, routing: 2})} 
                    />
                  )
                })
              }
            </div>
            }
          </>
        )
    }
    if(detail.routing === 2 ){
      const datam = datas.find(data => data.id === detail.id)
      return(
        <>
          <DetailMessage 
          participan={datam.participan}
          group={datam.namaGroup === "" ? datam.nama : datam.namaGroup}
          datas={datam.message}
          routing={()=>setDetail({routing: 1})}
           />
        </>
      )
    }
  }
  
  return (
    <div className='w-[748px] h-[520px] bg-white absolute right-[34px] bottom-[108px] rounded-lg'>
      {renderMessage()}
    </div>
  )
}

export default Message