import { useState } from 'react'
import './App.css'
import BaristaForm from './components/BaristaForm.jsx'

function App() {

  return (
    <div>
      <div className='title-container'>
        <h1>On My Grind</h1>
        <p>So you think you can barista? Let's put that to the test...</p>
      </div>
      <BaristaForm />
    </div>
  )
}

export default App
