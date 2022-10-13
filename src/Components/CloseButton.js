import React from "react";
import styled from "styled-components";
import { ReactComponent as IconClose } from '../icons/close-circle.svg';   

const Button = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  width: 48px;
  height: 48px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
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
    height: 28px;
    width: auto;
    transition: all .25s ease-in-out;
    fill: ${({theme}) => theme.color.icon};
  }
`;

function CloseButton( {action} ) {
  return(
    <Button
      onClick={action}
    >
      <IconBox>
        <IconClose/>
      </IconBox>
    </Button>
  )
}

export default CloseButton;