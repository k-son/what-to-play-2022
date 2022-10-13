
import React from "react";
import styled from "styled-components";
import { ReactComponent as IconRefresh } from "../icons/refresh.svg";

const Button = styled.button`
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  background: ${({theme}) => theme.color.background};
  box-shadow:  -16px 16px 60px ${({theme}) => theme.color.grey},
                16px -16px 60px #ffffff;
  transition: all .25s ease-in-out;

  &:hover svg {
    fill: ${({theme}) => theme.color.iconHover};
  }
  
  &:active {
    box-shadow:  -8px 8px 60px -4px ${({theme}) => theme.color.grey},
                  12px -12px 60px #ffffff;
  }
`;

const IconBox = styled.span`
  & svg {
    width: 33%;
    height: auto;
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