import styled from "styled-components";
import { ReactComponent as IconMetronomeStop } from '../icons/metronome-tick.svg';
import { ReactComponent as IconMetronomeStart } from '../icons/metronome.svg';

const Button = styled.button`
  position: absolute;
  bottom: 200px;
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

const IconBox = styled.span`
  & svg {
    height: 36px;
    width: auto;
    transition: all .25s ease-in-out;
    fill: ${({theme}) => theme.color.icon};
  }
`;

function Metronome( {isPlaying, play, stop } ) {
  
  return (
    <>
      {!isPlaying &&
        <Button onClick={play}>
          <IconBox>
            <IconMetronomeStart/>
          </IconBox>
        </Button>    
      }
      {isPlaying && 
        <Button onClick={stop}>
          <IconBox>
            <IconMetronomeStop/>
          </IconBox>
        </Button>  
      }
    </>
  )
}

export default Metronome;