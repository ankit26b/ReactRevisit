import { useState, useCallback, useEffect, useRef} from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const [color, setColor] = useState('blue')

  const passwordRef = useRef(null)

  const generatePassword = useCallback(()=>{
    let pass =""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*()"

    for(let i=0;i<length;i++){
      const char = Math.floor(Math.random()*str.length + 1);
      pass+=str.charAt(char);
    }
    setPassword(pass)
  },[length,numberAllowed,charAllowed])

  const copyPasswordToClipboard = ()=>{
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
    setColor('green')
    setTimeout(() => {
      setColor('blue');
      window.getSelection().removeAllRanges();
    }, 2000);
  }

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed])
  

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-3xl font-bold mb-2 text-center'>
        Password Generator    
      </h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" 
          value = {password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} className='outline-none text-white px-3 py-0.5 shrink-0 ' style={{backgroundColor: color}}>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
         <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>setLength(e.target.value)} name='' id=""/>
            <label htmlFor="length">Length : {length}</label>
         </div>
         <div className='flex items-center gap-x-1'>
            <input type="checkbox" name="" id=""
            defaultChecked={numberAllowed}
            onChange={()=>{setNumberAllowed((prev)=>!prev)}}/>
            <label htmlFor="number">Numbers</label>
         </div>
         <div className='flex items-center gap-x-1'>
            <input type="checkbox" name="" id=""
            defaultChecked={charAllowed}
            onChange={()=>{setCharAllowed((prev)=>!prev)}}/>
            <label htmlFor="charecter">Charecters</label>
         </div>
      </div>
    </div>
  )
}

export default App
