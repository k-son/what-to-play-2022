import React from "react";
import styled from 'styled-components';
import RotatingDice from './RotatingDice';

const Button = styled.button`
  position: absolute;
  bottom: 84px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 80px;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  background: ${({theme}) => theme.color.background};
  box-shadow:  -20px 20px 60px ${({theme}) => theme.color.grey},
                20px -20px 60px #ffffff;
  transition: all .25s ease-in-out;

  &:active {
    box-shadow:  -8px 8px 60px -10px ${({theme}) => theme.color.grey},
                  12px -12px 60px #ffffff;
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