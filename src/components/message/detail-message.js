import React, { useState } from 'react'
import HeadDetaiMessage from './head-detai-message'
import ListDetailMessage from './list-detail-message'
import SendMessage from './send-message'

function DetailMessage(props) {
  const {datas, group, routing, participan} = props
  const [data, setData] = useState(datas)
  const handleMessage = (msg) => {
    const msgs = [...data];
    const tanggal = new Date(); 
    msgs.push({ 
      idMessage: Date.now(),
      message: msg,
      nameMassage: "You",
      tanggalMessage: `${tanggal.getHours()}:${tanggal.getMinutes()}` 
    });
    setData(msgs);
  }
  console.log(data)
  return (
    <div>
        <HeadDetaiMessage group={group} routing={routing} participan={participan}/>
        <div className='w-[717px] h-[360px] ml-5 mr-[11px] mt-[11.5px] pl-2 overflow-y-scroll overflow-x-hidden scrollbar'>
          {
            data.map((list)=>{
              return(
                <ListDetailMessage 
                nama={list.nameMassage}
                time={list.tanggalMessage}
                comment={list.message}
                deleteMessage={()=> setData(data.filter(del => del.idMessage !== list.idMessage))}
                />
              )
            })
          }
        </div>
        <SendMessage handleMessage={handleMessage} />
    </div>
  )
}

export default DetailMessage