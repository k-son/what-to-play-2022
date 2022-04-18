import React from "react";
import styled from "styled-components";
import { ReactComponent as IconRefresh } from "../icons/refresh.svg";

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
    width: 33%;
    height: auto;
    transition: all .25s ease-in-out;
    fill: ${({theme}) => theme.color.grey};
  }
`;

function ReloadListButton( {onClick} ) {
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

export default ReloadListButton;