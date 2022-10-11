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