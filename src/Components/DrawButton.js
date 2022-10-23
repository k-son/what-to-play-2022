import React from "react";
import styled from 'styled-components';
import RotatingDice from './RotatingDice';

const Button = styled.button`
  position: absolute;
  bottom: 84px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 80px;
  border-radius: 24px;
  border: none;
  cursor: pointer;
  background: ${({theme}) => theme.color.background};
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
    box-shadow:  -10px 10px 50px -5px ${({theme}) => theme.color.buttonShadowDarker},
                   2px -2px 45px -3px ${({theme}) => theme.color.buttonShadowLighter};
    transition: all .25s ease-in-out;
  }

  &:active::before {
    box-shadow:  -6px 6px 50px -15px ${({theme}) => theme.color.buttonShadowDarker},
                  1px -1px 45px -10px ${({theme}) => theme.color.buttonShadowLighter};
  }
`;



function DrawButton( {onClick, progress} ) {

  return(
    <Button
      onClick = {onClick}
    >
      <RotatingDice />
    </Button>
  );
}

export default DrawButton;