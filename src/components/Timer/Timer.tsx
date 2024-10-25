import { useCallback, useEffect } from 'react';
import s from './Timer.module.css';
import { TypeTimer } from './Timer.type';

export function Timer({ isPlaying, time, setTime }: TypeTimer) {
  const format = useCallback((time: number) => {
    const hours = Math.floor((time / 60 / 60) % 24);
    const minutes = Math.floor((time / 60) % 60);
    const seconds = Math.floor(time % 60);

    const hoursString = hours < 10 ? '0' + hours : hours;
    const minutesString = minutes < 10 ? '0' + minutes : minutes;
    const secondsString = seconds < 10 ? '0' + seconds : seconds;

    return hoursString + ':' + minutesString + ':' + secondsString;
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setTime((time) => time + 1);
      document.title = String(format(time));
    }, 10);
    return () => clearInterval(interval);
  }, [isPlaying, time, setTime]);

  return <div className={s.timer}>{format(time)}</div>;
}
