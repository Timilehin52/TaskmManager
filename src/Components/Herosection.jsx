import React from 'react'
import Button from './Button'
import AddTaskimg from "../assets/AddTaskimg.png"
import AddTassk from './AddTassk'
import { Link } from 'react-router-dom'

export default function Herosection() {
  return (
    <div className='flex m-auto px-16 mt-5'>
        <div className='p-[16px] flex flex-col gap-3'>
            <div>
                <h1 className='text-black text-[25px]'>Manage your Tasks on </h1>
                <h1 className='text-[#7c18c9] text-[25px]'>TaskDuty</h1>
            </div>
            <div className='flex flex-col gap-2.5'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tellus, sapien, morbi ante nunc euismod ac felis ac. Massa et, at platea tempus duis non eget.
                 Hendrerit tortor fermentum bibendum mi nisl semper porttitor. Nec accumsan.</p>
                
                <Link to="/mytask">
                   <Button className=' bg-[#7c18c9] text-white w-[130px] h-[30px]' content="Go to My Tasks" />
                </Link>
            </div>
             
        </div>
        <div className='w-[720px] p-[32px]'>
            <AddTassk />
        </div>
       
    </div>
  )
}
