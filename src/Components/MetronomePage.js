import React, {useState} from "react";
import styled from "styled-components";
import CloseButton from "./CloseButton";
import Metronome from "./Metronome";
import Sound from '../sounds/ping.wav';


const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 99;
  background: ${props => props.theme.color.background};
  padding: 40px 20px;
  overflow: auto;
`;

const Caption = styled.h1`
  font-size: 20px;
  text-transform: uppercase;
  color: ${props => props.theme.color.grey};
  margin-top: 12px;
`;

const Tempo = styled.p`
  font-size: 16px;
  color: ${props => props.theme.color.text};
  margin-top: 24px;
`;

const Slider = styled.input`
  width: 75%;
  max-width: 300px;
  margin: 12px auto;
  cursor: pointer;
`;


function MetronomePage( {bpm, close} ) {
  const [tempo, setTempo] = useState(bpm);
  const [isMetronomeOn, setIsMetronomeOn] = useState(false);
  const [metronomeInterval, setMetronomeInterval] = useState(null);
  const audio = new Audio(Sound);

  function playMetronome() {
    const tempoInterval = (60 / tempo) * 1000;
    
    setMetronomeInterval(
      setInterval(() => {
        audio.play();
      }, tempoInterval)
    );

    setIsMetronomeOn(true);
  }

  function stopMetronome() {
    clearInterval(metronomeInterval);
    setIsMetronomeOn(false);
  }

  function closePage() {
    close();
    stopMetronome();
  }

  return(
    <Wrapper>
      <CloseButton 
        action={closePage}
      />
      <Caption>Metronome</Caption>
      <Tempo>{tempo} bpm</Tempo>
      <Slider 
        type="range"
        min="40"
        max="200"
        step="1"
        value={tempo}
        onChange={(event) => {
          setTempo(event.target.value);
          stopMetronome();
        }}
      />
      <Metronome 
        isPlaying={isMetronomeOn}
        play={playMetronome}
        stop={stopMetronome}
      />
    </Wrapper>
  );
}

export default MetronomePage;