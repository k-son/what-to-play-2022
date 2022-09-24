import React, {useEffect, useState} from "react";
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 100px;
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

const Button = styled.button`
  width: 44px;
  height: 44px;
  color: red;
`;

function MetronomeWebAudio() {
  var ac = new AudioContext();

  const [acState, setAcState] = useState(ac.state);
  const [tempo, setTempo] = useState(66);


  function clamp(v, min, max) {
    return Math.min(max, Math.max(min, v));
  }

  function clampTempo(t) {
    return clamp(t, 40, 200);
  }

  function getTempo() {
    return tempo;
  }


  function setup() {
    var buf = ac.createBuffer(1, ac.sampleRate * 2, ac.sampleRate);
    var channel = buf.getChannelData(0);
    var phase = 0;
    var amp = 1;
    var duration_frames = ac.sampleRate / 50;
    const f = 330;

    for (var i = 0; i < duration_frames; i++) {
      channel[i] = Math.sin(phase) * amp;
      phase += 2 * Math.PI * f / ac.sampleRate;
      if (phase > 2 * Math.PI) {
        phase -= 2 * Math.PI;
      }
      amp -= 1 / duration_frames;
    }

    var source = ac.createBufferSource();
    source.loop = true;
    source.loopEnd = 1 / (tempo / 60);
    source.connect(ac.destination);
    source.start(0);
  }




  return(
    <Wrapper>
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
        }}
      />
      {ac.state === 'running' && 
        <Button 
          onClick={() => {
            ac.suspend();
            console.log(ac.state);
            setAcState(ac.state);
          }}
        >
          Stop
        </Button>
      }
      {ac.state === 'suspended' &&
          <Button 
          onClick={() => {
            ac.resume();
            console.log(ac.state);
            setAcState(ac.state);
          }}
        >
          Start
        </Button>
      }
    </Wrapper>
  );
}

export default MetronomeWebAudio;