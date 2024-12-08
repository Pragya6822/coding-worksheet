//task1 = debugging

// useEffect(() => {
//   const timerID = setInterval(() => setSeconds(seconds + 1), 1000);
//   return ()=> clearInterval(timerID);
// }, []);

// ----------------------------------------------------------------


// task 2 -output based question 

import React, { useState, useEffect } from "react";
import './App.css'
function App() {

  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerID;
    if (isRunning) {
      timerID = setInterval(() => setSeconds((prev) => prev +1), 1000);
    }
    // Cleanup function to clear the timer on unmount
    return () => clearInterval(timerID);
  }, [isRunning]);  // Dependency on `isRunning` ensures timer updates based on its state


  const handleReset = () => setSeconds(0)

  const handleToggle = () => setIsRunning((prev) => !prev)
  return (
    <>
      <div className="container">Elapsed Time: {seconds} seconds
      <div className="btn">
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleToggle}>{isRunning ? "Pause" :"Resume"}</button>
      </div>
      </div>
    </>
  )
  
}

export default App;

