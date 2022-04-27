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

const Slider = styled.input`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
  cursor: pointer;
`;


function MetronomePage( {bpm} ) {
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

  return(
    <Wrapper>
      <h1>Metronome Page</h1>
      <p>{tempo} bpm</p>
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