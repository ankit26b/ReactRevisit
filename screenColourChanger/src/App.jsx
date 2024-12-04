import { useState } from 'react'
import './App.css'

function App() {
  
  const [color, setcolor] = useState('olive')

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-0'>
        <div className='flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl'>
          <button className='px-4 py-1 rounded-lg bg-red-500' onClick={()=>{setcolor('red')}}>Red</button>
          <button className='px-4 py-1 rounded-lg bg-green-500' onClick={()=>{setcolor('green')}}>Green</button>
          <button className='px-4 py-1 rounded-lg bg-blue-500' onClick={()=>{setcolor('blue')}}>Blue</button>
          <button className='px-4 py-1 rounded-lg bg-yellow-500' onClick={()=>{setcolor('yellow')}}>Yellow</button>
          <button className='px-4 py-1 rounded-lg bg-violet-500' onClick={()=>{setcolor('violet')}}>Violet</button>
          <button className='px-4 py-1 rounded-lg bg-pink-500' onClick={()=>{setcolor('pink')}}>Pink</button>
        </div>
      </div>
    </div>
  )
}

export default App
