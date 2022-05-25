import React, { useState, useEffect } from "react";
import "./Timer.css";

const Timer = ({ begin, end }) => {
  console.log(begin, end);
  const [watch, setWatch] = useState(begin);
  const [intervalId, setIntervalId] = useState();
  //miliseconds to hr, min, sec starts
  function msToTime(duration) {
    var milliseconds = Math.floor((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  }
  //miliseconds to hr, min, sec ends

  const start = () => {
    if (intervalId == null) {
      let id = setInterval(() => {
        setWatch((prev) => prev + 100);
        if (watch >= end) {
          clearInterval(intervalId);
        }
      }, 100);
      setIntervalId(id);
    }
  };
  const pause = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };
  const reset = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setWatch(0);
  };
  return (
    <div>
      <h1>{msToTime(watch)}</h1>
      <div className="timerButtons">
        <button onClick={start}>start</button>
        <button onClick={pause}>pause</button>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  );
};

export default Timer;
