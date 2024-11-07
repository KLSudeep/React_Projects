import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {

  // let myobj={
  //   userName:"K L Sudeep",
  //   age:21
  // }
  return (
    <>
    <h1 className="bg-green-400 text-black p-6 rounded-xl mb-6">
    Hello world!
  </h1>
  <Card username="Sudeep" btntxt="click me"/>
  <Card username="Sathish" />
  </>
  )
}

export default App
