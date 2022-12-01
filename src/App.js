import menu from './assets/icon/menu.png'
import message from './assets/icon/message.png'
import messageAaktif from './assets/icon/message-aktif.png'
import task from './assets/icon/task.png'
import taskAktif from './assets/icon/task-aktif.png'
import './App.css';
import Message from './components/message'
import Task from './components/task'
import { useState } from 'react'

function App() {
	const [primary, setPrimary] = useState(true)
	const [show, setShow] = useState(false)
	const [mssgAktif, setMssgAktif ] = useState(false)
	const [tasksAktf, setTasksAktf ] = useState(false)
	const [switched, setSwitched] = useState(false)
	const todoAktif = () => {
		setTasksAktf(true)
		setSwitched(true)
		setPrimary(false)
		setMssgAktif(false)
	}
	const pesanAktif = () => {
		setMssgAktif(true)
		setSwitched(false)
		setTasksAktf(false)
		setPrimary(false)
	}
	const close = () => {
		setPrimary(true)
		setShow(false)
		setSwitched(false)
		setMssgAktif(false)
		setTasksAktf(false)
	}
  return (
	<>
		<div className={`fixed flex gap-10 bottom-[27px] right-[34px] ${switched ? 'flex-row-reverse' : "" }`}>
		{show &&
			<div>
				{!tasksAktf && primary &&<p className='absolute text-xs text-[#F2F2F2] font-bold -top-[26px] left-5'>Task</p>}
				<button 
					className={`w-[68px] h-[68px] rounded-full flex justify-center items-center ${tasksAktf ? 'bg-[#F8B76B]' : 'bg-[#F2F2F2]'}`}
					onClick={todoAktif}>
					<img src={tasksAktf ? task : taskAktif} alt='task' />
				</button>
				{tasksAktf && <button className='w-[68px] h-[68px] bg-[#4F4F4F] rounded-full absolute top-0 right-4 -z-10' onClick={close}></button>}
			</div>
		}
		{show &&
			<div> 
				{!mssgAktif && primary && <p className='absolute text-xs text-[#F2F2F2] font-bold -top-[26px] left-32'>Inbox</p>}
				<button 
					className={`w-[68px] h-[68px]  rounded-full flex justify-center items-center ${mssgAktif ? 'bg-[#2F80ED]' : 'bg-[#F2F2F2]' }`}
					onClick={pesanAktif}>
					<img src={mssgAktif ? message : messageAaktif} alt='message' />
				</button>
				{mssgAktif && <button className='w-[68px] h-[68px] bg-[#4F4F4F] rounded-full absolute top-0 right-4 -z-10' onClick={close}></button>}
			</div>
		}
		{primary&&	
			<button 
				className='w-[68px] h-[68px] bg-[#2F80ED] rounded-full flex justify-center items-center' 
				onClick={()=>setShow(!show)} >
				<img src={menu} alt='menu'/>
			</button>
		}
		</div>
		{mssgAktif && <Message />}
		{tasksAktf && <Task />}
	</>
  );
}

export default App;
