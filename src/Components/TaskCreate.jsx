import { useState } from 'react'
import Input from './input'
import FloatingLabel from './Floatinglabels'
import Button from './Button'
import { FaLessThan } from "react-icons/fa6";

export default function TaskCreate() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  return (
    <div className='p-10 flex flex-col gap-5'>
      
        <div className='flex gap-1'>
            <FaLessThan className='absolute left-[40px] bottom-[457px]'/>
            <h1 className='px-6'> New Task</h1>
        </div>
      
      <form action="/" className='flex flex-col gap-[15px] mt-10 '>

       
         <FloatingLabel label="Task Title">
          <Input
            type="text"
            id="task-title"
            name="task-title"
            placeholder="E.g Project Defense, Assignment ..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border-none outline-none"
          />
        </FloatingLabel>
       

        <FloatingLabel label="Description">
          <textarea
            placeholder="Briefly describe your task..."
            className="w-full border-none outline-none resize-none py-1"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FloatingLabel>

        <label for="Tags">
          <label htmlFor="Tags" className='absolute bottom-[145px] left-15 bg-[#ffffff] px-1 text-md text-gray-500'>Tags</label>
            <select name="" id="" className='w-135 relative border border-[#ebe8e8] rounded-md px-3 pt-4 pb-2 w-full'>
              
                <option value="urgent">Urgent</option>
                <option value="Important">Important</option>
            </select>
        </label>


        <Button content='Done' className='h-8 bg-blend-saturation'/>
        <p className='flex flex-col justify-center items-center '><u className='hover:bg-[#7423b1] cursor-pointer'>Back to the Top</u></p>
      </form>
    </div>
  )
}