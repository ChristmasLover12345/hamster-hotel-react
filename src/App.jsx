import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  
      
    <div className='w-full h-screen flex flex-col items-center'>

      <div className="Bg-[#000324] h-[120px] w-full flex justify-center items-end">

        <p className='mx-3'>Overview</p>
        <p className='mx-3'>Rooms</p>
        <p className='mx-3'>Packages</p>
        <img src="./assets/Logo.png" alt="Logo" />
        <p className='mx-3'>Amenities</p>
        <p className='mx-3'>Contact</p>
        <p className='mx-3'>Reserve</p>

      </div>

    </div>
 
  )
}

export default App
