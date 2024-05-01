import React, { useState, useEffect } from 'react';
import './TimeCount.css';

function TimerCount() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = () => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min.toString().padStart(2, '0')}:${sec
      .toString()
      .padStart(2, '0')}`;
  };

  return <div className="timer">{formatTime()}</div>;
}

export default TimerCount;
