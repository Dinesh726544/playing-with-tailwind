import React from 'react'

function Header() {
  return (
    <nav className='w-full flex justify-between bg-blue-200 h-[48px] items-center lg:p-6 px-8'>
      <p className='font-bold text-lg'>theCodeCrusader</p>
      <ul className='md:flex hidden text-sm font-bold'>
        <li className='ml-3'>Home</li>
        <li className='ml-3'>About</li>
        <li className='ml-3'>Contact Us</li>
      </ul>
      <button className='hidden md:block bg-blue-400 p-2 text-sm font-bold rounded-md'>Login/SignUp</button>
      <button className='md:hidden text-4xl'>&#8801;</button>
    </nav>
  )
}

export default Header
