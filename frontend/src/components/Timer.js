import React, { useState, useEffect } from "react";
import "../styles/Timer.css";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function calculateTimeLeft() {
    const targetDate = new Date("February 22, 2026 00:00:00").getTime();
    const currentTime = new Date().getTime();
    const difference = targetDate - currentTime;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <div className="timer-container">
      <div className="timer">
        <div className="time-block">
          <span className="time-number">{timeLeft.days}</span>
          <span className="time-label">Days</span>
        </div>
        <div className="time-block">
          <span className="time-number">{timeLeft.hours}</span>
          <span className="time-label">Hours</span>
        </div>
        <div className="time-block">
          <span className="time-number">{timeLeft.minutes}</span>
          <span className="time-label">Minutes</span>
        </div>
        <div className="time-block">
          <span className="time-number">{timeLeft.seconds}</span>
          <span className="time-label">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;