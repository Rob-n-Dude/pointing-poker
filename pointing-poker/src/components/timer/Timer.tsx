import React, { useCallback, useEffect, useState, FC } from 'react';
import './timer.scss';

type TTimer = {
  secondsTotal: number;
};

const Timer: FC<TTimer> = ({ secondsTotal }) => {
  const [timeLeft, setTimeLeft] = useState<number>(secondsTotal);
  const [parsedTime, setParsedTime] = useState<string[]>(['00', '00']);
  const animationStyle = `countdown ${secondsTotal}s linear forwards`;

  const parseSeconds = useCallback(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft - minutes * 60;
    let minsToShow: string;
    let secToShow: string;
    if (minutes < 10) {
      minsToShow = `0${minutes}`;
    } else {
      minsToShow = `${minutes}`;
    }
    if (seconds < 10) {
      secToShow = `0${seconds}`;
    } else {
      secToShow = `${seconds}`;
    }

    setParsedTime(() => [minsToShow, secToShow]);
  }, [timeLeft]);

  useEffect(() => {
    if (timeLeft >= 0) {
      parseSeconds();
      setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    }
  }, [parseSeconds, timeLeft]);

  return (
    <div id="countdown">
      <div id="countdown-number">{parsedTime.join(':')}</div>
      <svg className="countdown-svg">
        <circle
          id="circle"
          r="35"
          cx="54"
          cy="54"
          style={{ animation: animationStyle }}
          className="countdown-svg-circle"
        />
      </svg>
    </div>
  );
};

export default Timer;
