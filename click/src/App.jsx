import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCount] = useState(0)
  //let counter=0;
  const AddValue=()=>{
    counter=counter+1;
    setCount(counter);
  }

  const RemoveValue=()=>{
    counter=counter-1;
    setCount(counter);
  }
  return (
    <>
     <div>
      <h1>count : {counter}</h1>
    <button onClick={AddValue}>Add Value</button>
    <br />
    <button onClick={RemoveValue}>Remove Value</button>
     </div> 
    </>
  )
}

export default App
