import React, {useState, useEffect} from 'react';

const Timer = ({ time = 1000000 }) => {
  const [remainingTime, setRemainingTime] = useState(time);
  const end = new Date().getTime() + remainingTime;

  useEffect(() => {
    const timer = setInterval(() => {
      console.log('here I am', remainingTime);
      const newRemainingTime = end - new Date().getTime();
      
      if (newRemainingTime <= 0) {
        clearInterval(timer);
        setRemainingTime(0);
      } else {
        setRemainingTime(newRemainingTime);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [remainingTime]);

  return (<span>{remainingTime}</span>);
}

export default Timer;