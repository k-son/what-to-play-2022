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
  z-index: 2;
  transition: all .25s ease-in-out;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    box-shadow:  -10px 10px 50px -3px ${({theme}) => theme.color.buttonShadowDarker},
                   2px -2px 35px -2px ${({theme}) => theme.color.buttonShadowLighter};
    transition: all .25s ease-in-out;
  }

  &:active::before{
    box-shadow:  -6px 6px 50px -12px ${({theme}) => theme.color.buttonShadowDarker},
                  1px -1px 30px -8px ${({theme}) => theme.color.buttonShadowLighter};
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