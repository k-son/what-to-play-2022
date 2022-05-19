import React from "react";
import styled from "styled-components";

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


function MetronomePageButton( {action} ) {
  return(
    <Button
      onClick={action}
    >
      M
    </Button>
  )
}

export default MetronomePageButton;