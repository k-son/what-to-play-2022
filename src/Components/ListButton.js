import React from "react";
import styled from "styled-components";
import { ReactComponent as IconList } from '../icons/playlist-music.svg';

const Button = styled.button`
  position: absolute;
  bottom: 200px;
  right: 50%;
  transform: translateX(136px);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 20px;
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
    height: 40px;
    width: auto;
    transition: all .25s ease-in-out;
    fill: ${props => {
      if (props.list.length > 0) {
        return props.theme.color.icon;
      } else {
        return props.theme.color.background;
      }
    }};
  }
`;

function ListButton( {onClick, songList} ) {
  return(
    <Button onClick={onClick}>
      <IconBox list={songList}>
        <IconList />
      </IconBox>
    </Button>
  )
}

export default ListButton;