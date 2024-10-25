import './App.css';
import { Timer } from './components/Timer/Timer';
import { Buttons } from './components/Buttons/Buttons';
import { useState } from 'react';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(0);

  return (
    <>
      <Timer isPlaying={isPlaying} time={time} setTime={setTime} />
      <Buttons
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        setTime={setTime}
      />
    </>
  );
}

export default App;
