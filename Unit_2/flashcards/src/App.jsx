import { useState } from 'react'
import './App.css'
import list from './data.jsx'

const App = () => {

  const [index, setIndex] = useState(0);

  return (
    <div className='App'>
      <h1>Business Finance Concept Review</h1>
      <p>Use flashcards to facilitate your revision efficiency.</p>
      <div className='card'>
        <p className='text'>{list[index].front}</p>
      </div>
      <button className='next'></button>
    </div>
  )
}

export default App