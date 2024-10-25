import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import s from './Buttons.module.css';
import { TypeButtons } from './Buttons.type';
import { useMemo } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import PauseIcon from '@mui/icons-material/Pause';

export function Buttons({ isPlaying, setIsPlaying, setTime }: TypeButtons) {
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    if (isPlaying) {
      setIsPlaying(false);
      return;
    }
    document.title = 'Timer';
    setTime(0);
    setIsPlaying(false);
  };

  const ButtonClick = useMemo(() => {
    return styled(Button)({
      border: '2px solid black',
      color: 'black',
      width: '100px',
    });
  }, []);

  return (
    <div className={s.buttons}>
      <ButtonClick onClick={handlePlayPause}>
        {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
      </ButtonClick>
      <ButtonClick onClick={handleReset}>{<RestartAltIcon />}</ButtonClick>
    </div>
  );
}
