import React from 'react'
import profile from "../assets/profile.svg"
import Taskduty from "../assets/Taskduty.png"
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


export default function Header() {
  const location = useLocation()
  const isOnNewTask = location.pathname === '/'
  return (
    <div className='p-[16px]'>
      
        <nav>
           <div className='flex gap-[30px]'>
             
                <Link to="/">
                <div className='flex absolute left-21'>
                  <img src={Taskduty} alt="" className='w-[30px] h-[30px]'/>
                  <h1 className='text-[#2D0050] font-semibold'>TaskDuty</h1>
                  </div>
                </Link>
            
            <div className='flex gap-4 absolute right-36'>
              {isOnNewTask && (
                <Link to="/newtask"> 
                  <h3 className='hover:bg-[#dad8e3] cursor-pointer justify-center rounded-md'>New Task</h3>
               </Link>
              )}
               <Link to="/mytask">
                  <h3 className='hover:bg-[#f7f7f9] cursor-pointer justify-center rounded-md'>All Tasks</h3> 
               </Link>
               <img src={profile} alt="" className='w-[30px] h-[30px] hover:bg-[#5f3ce7] cursor-pointer justify-center rounded-md'/>
            </div>
           </div>
            {/* <div className=''>
                <hr />
            </div> */}
        </nav>
   
    </div>
    
    
  )
}
