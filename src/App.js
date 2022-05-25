import './App.css';
import Timer from './components/Timer';
import React, { useState } from 'react';

function App() {
  const [begin, setBegin] = useState(5000);
  const [end, setEnd] = useState(10000);

  return (
    <div className="App">
      <h1> This is my Timer</h1>
      {/* <input type="number" placeholder='enter start time' onChange={(e) => { setBegin(e.target.value) }} />
      <input type="number" placeholder='enter end time' onChange={(e) => { setEnd(e.target.value) }} /> */}
      <button>START TIMER</button>
      {/* {
        flag ? <Timer begin={Number("5000")} end={Number("10000")} /> : null
      } */}
      <Timer begin={begin} end={end} />
    </div>
  );
}

export default App;
