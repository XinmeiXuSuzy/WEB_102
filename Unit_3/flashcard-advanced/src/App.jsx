import { useState } from 'react';
import './App.css';
import { content } from "./data";

const App = () => {
  const [status, setStatus] = useState('front');
  const [index, setIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [answered, setAnswered] = useState(false);

  const changeStatus = () => {
    setStatus(prevStatus => (prevStatus === "front" ? "back" : "front"));
  };

  const updateIndex = (direction) => {
    setIndex(prevIndex => {
      let newIndex = direction === "next" ? (prevIndex + 1) % content.length : (prevIndex - 1 + content.length) % content.length;
      return newIndex;
    });
    setStatus("front");
    setUserAnswer('');
    setFeedback('');
    setAnswered(false);
  };

  const checkAnswer = () => {
    if (userAnswer.trim().toLowerCase() === content[index].back.trim().toLowerCase()) {
      setFeedback('Correct! 🎉');
    } else {
      setFeedback('Incorrect. Try flipping the card for the correct answer.');
    }
    setAnswered(true);
  };

  return (
    <div className='App'>
      <h1>Business Finance Concept Review</h1>
      <p>Use flashcards to facilitate your revision efficiency.</p>
      <div className={`card ${status}`} onClick={changeStatus}>
        <div className="card-inner">
          <div className="card-front">
            <p>{content[index].front}</p>
          </div>
          <div className="card-back">
            <p>{content[index].back}</p>
          </div>
        </div>
      </div>
      <div className="answer-section">
        <input
          type="text"
          placeholder="Type your answer"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          disabled={answered}
        />
        <button onClick={checkAnswer} disabled={answered}>Submit</button>
        {feedback && <p className="feedback">{feedback}</p>}
      </div>
      <div className='navigation-buttons'>
        <button className='previous' onClick={() => updateIndex("prev")}>Previous</button>
        <button className='next' onClick={() => updateIndex("next")}>Next</button>
      </div>
    </div>
  );
};



export default App
