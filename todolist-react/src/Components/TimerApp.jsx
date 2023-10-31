import React, { useState, useEffect } from 'react';
import './TimerApp.css'
const CountdownTimer = () => {
  // Mock data for testing
  const countDownDate = new Date("Jan 30, 2024 00:00:00").getTime();
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(countDownDate));

  // Function to calculate time remaining
  function calculateTimeRemaining(targetDate) {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      return "Timer has completed.";
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeRemaining = calculateTimeRemaining(countDownDate);
      setTimeRemaining(newTimeRemaining);

      if (newTimeRemaining === "Timer has completed.") {
        clearInterval(timer);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [countDownDate]);

  return (
    <div id='timer'>
        <div id='small-box'>
            <h1 id='timer-title'>Freedom Timer</h1>
            <p id="timer-text">{timeRemaining}</p>
        </div>
    </div>
  );
};

export default CountdownTimer;