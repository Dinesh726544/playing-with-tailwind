import React from 'react'

function Main() {
  return (
    <div className='p-10 md:p-20 md:flex justify-between items-center bg-gradient-to-r from-blue-500 to-green-500'>
      <p className='mb-4 text-xl font-bold md:text-5xl md:flex-none md:w-[60%]'>Coding is the art of turning ideas into actions, and problems into solutions, all with the stroke of a key</p>
      <div className=''>
        <img src="../../src/assets/main.jpg" alt="" className='w-[320px] rounded-lg transition duration-300 ease-in-out transform hover:shadow-lg'/>
      </div>
    </div>
  )
}

export default Main
