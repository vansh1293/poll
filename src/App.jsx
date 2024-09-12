import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import poll from './Data.jsx'
import Poll_Creation from './Poll_Creation.jsx'
import Createpoll from './Createpoll.jsx'

function App() { 
  return (
    <>
      {poll.map(Poll_Creation)}
      <Createpoll />
    </>
  )
}

export default App
