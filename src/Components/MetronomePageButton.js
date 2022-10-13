import React from "react";
import styled from "styled-components";
import { ReactComponent as IconMetronome } from '../icons/metronome-tick.svg';

const Button = styled.button`
  position: absolute;
  top: 12px;
  left: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  border: none;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  color: ${props => props.theme.color.icon};
  background: ${({theme}) => theme.color.background};
  box-shadow:  -8px 8px 35px -5px ${({theme}) => theme.color.buttonShadowDarker},
                10px -10px 50px -4px ${({theme}) => theme.color.buttonShadowLighter};
  transition: all .25s ease-in-out;
  
  &:active {
    box-shadow:  -4px 4px 40px -8px ${({theme}) => theme.color.buttonShadowDarker},
                 10px -10px 50px -4px ${({theme}) => theme.color.buttonShadowLighter};
  }
`;

const IconBox = styled.span`
  & svg {
    height: 24px;
    width: auto;
    transition: all .25s ease-in-out;
    fill: ${({theme}) => theme.color.icon};
  }
`;


function MetronomePageButton( {action} ) {
  return(
    <Button
      onClick={action}
    >
      <IconBox>
        <IconMetronome/>
      </IconBox>
    </Button>
  )
}

export default MetronomePageButton;