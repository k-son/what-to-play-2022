import React from "react";
import styled from 'styled-components';
import RotatingDice from './RotatingDice';

const Button = styled.button`
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 116px;
  border-radius: 30px;
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

const Text = styled.span`
  font-size: 24px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #bbb;
${'' /*   -webkit-text-fill-color: #ddd;
  -webkit-text-stroke-width: .4px;
  -webkit-text-stroke-color: #555; */}
  transition: all .15s ease-out;

${'' /*   ${Button}:active & {
    color: ${props => {
      if (props.progress > 66) {
        return props.theme.color.yellow;
      } else if (props.progress > 33 && props.progress <= 66) {
        return props.theme.color.orange;
      } else {
        return props.theme.color.red;
      }
    }}; */}
  }
`;


function DrawButton( {onClick, progress} ) {

  return(
    <Button
      onClick = {onClick}
    >
      <RotatingDice />
      <Text 
        progress = {progress}
      >
        Draw
      </Text>
    </Button>
  );
}

export default DrawButton;