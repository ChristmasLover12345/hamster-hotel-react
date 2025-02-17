import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  
      
    <div className='w-full h-screen flex flex-col items-center'>

      <div className="bg-[#000324] h-[120px] w-full flex justify-center items-end">

        <p className='mx-3 mb-2'>Overview</p>
        <p className='mx-3 mb-2'>Rooms</p>
        <p className='mx-3 mb-2'>Packages</p>
        <img src="./assets/Logo.png" alt="Logo" className='mx-3 mb-2' />
        <p className='mx-3 mb-2'>Amenities</p>
        <p className='mx-3 mb-2'>Contact</p>
        <p className='mx-3 mb-2'>Reserve</p>

      </div>

    </div>
 
  )
}

export default App
