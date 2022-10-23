
import React from "react";
import styled from "styled-components";
import { ReactComponent as IconRefresh } from "../icons/refresh.svg";

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
  box-shadow:  -16px 16px 60px ${({theme}) => theme.color.buttonShadowDarker},
                16px -16px 60px ${({theme}) => theme.color.buttonShadowLighter};
  transition: all .25s ease-in-out;
  
  &:active {
    box-shadow:  -8px 8px 60px -4px ${({theme}) => theme.color.buttonShadowDarker},
                  12px -12px 60px ${({theme}) => theme.color.buttonShadowLighter};
  }
`;

const IconBox = styled.span`
  & svg {
    height: 64px;
    width: auto;
    transition: all .25s ease-in-out;
    fill: ${({theme}) => theme.color.icon};
  }
`;

function RefreshListButton( {onClick} ) {
  return(
    <Button 
      onClick={onClick}
    >
      <IconBox>
        <IconRefresh />
      </IconBox>
    </Button>
  )
}

export default RefreshListButton;