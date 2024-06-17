import React from 'react'
import { Header,Main,SubMain } from './components'
function App() {
  return (
    <div>
      <Header/>
      <Main/>
      <div className='bg-gradient-to-r from-green-500 to-blue-500'>
        <p className='mb-4 text-center md:text-4xl text-3xl font-bold text-blue-800'>Pure Hardwork, No Shortcut!</p>
        <SubMain/>
      </div>
      
      
    </div>
  )
}

export default App
