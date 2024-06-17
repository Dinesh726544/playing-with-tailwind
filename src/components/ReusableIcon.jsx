import React from 'react'
function ReusableIcon({num,val,icon}) {
  return (
    <div className='flex justify-center'>
      <div className='max-w-[240px] m-4 '>
        <div className='flex justify-center text-8xl text-blue-200'>
          {icon}
        </div>
        <p className='text-center font-bold text-2xl'>{num}</p>
        <p className='text-center text-2xl font-bold'>{val}</p>
      </div>
    </div>
    
  )
}

export default ReusableIcon
