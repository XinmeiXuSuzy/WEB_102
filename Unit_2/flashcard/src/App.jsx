import { useState } from 'react';
import './App.css';
import { content } from "./data";

const App = () => {
  const [status, setStatus] = useState('front');
  const [index, setIndex] = useState(0);

  const display = () => {
    return status === "front" ? content[index].front : content[index].back;
  };

  const changeStatus = () => {
    setStatus(prevStatus => (prevStatus === "front" ? "back" : "front"));
  };

  const updateIndex = () => {
    setIndex(prevIndex => (prevIndex + 1) % content.length); // Prevent out-of-bounds error
    setStatus("front"); // Reset to front when switching cards
  };

  return (
    <div className='App'>
      <h1>Business Finance Concept Review</h1>
      <p>Use flashcards to facilitate your revision efficiency.</p>
      <div className='card' onClick={changeStatus}>
        <p className='text'>{display()}</p>
      </div>
      <button className='next' onClick={updateIndex}>Next</button>
    </div>
  );
};

export default App;
