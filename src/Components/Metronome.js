import React, {useState} from "react";
import styled from "styled-components";
import Sound from '../sounds/ping.wav';

const Button = styled.button`
  position: absolute;
  top: 320px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  background: ${({theme}) => theme.color.background};
  box-shadow:  -16px 16px 60px ${({theme}) => theme.color.grey},
                16px -16px 60px #ffffff;
  transition: all .25s ease-in-out;

  &:active {
    box-shadow:  -8px 8px 60px -4px ${({theme}) => theme.color.grey},
                  12px -12px 60px #ffffff;
  }
`;

function Metronome( {tempo} ) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundInterval, setSoundInteval] = useState(null);
  const audio = new Audio(Sound);

  function play() {
    const tempoInterval = (60 / tempo) * 1000;
    
    setSoundInteval(
      setInterval(() => {
        audio.play();
      }, tempoInterval)
    );

    setIsPlaying(true);
  }

  function stop() {
    clearInterval(soundInterval);
    setIsPlaying(false);
  }

  return (
    <>
      {!isPlaying &&
        <Button onClick={play}>
          Beep
        </Button>    
      }
      {isPlaying && 
        <Button onClick={stop}>
          Stop
        </Button>  
      }
    </>
  )

}

export default Metronome;