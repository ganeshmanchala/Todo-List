import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <div className=' flex justify-between  py-2 px-6 items-center'>
      <div className="text-green-800 flex font-bold text-4xl mx-7 ">
        iTask
      </div>
      <ul className='flex gap-7 text-xl font-medium'>
        <li className='p-2 cursor-pointer hover:font-bold transition-all'></li>
        <li className='p-2 cursor-pointer hover:font-bold transition-all'></li>
      </ul>
    </div>
    <div>
      <ul className='flex py-2 px-4 bg-gray-200 text-green-700 font-bold text-xl gap-11 w-full'>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/todolist">TaskManager</Link></li>
      </ul>
      </div>
    </div>
  )
}

export default Navbar
