import React from "react";
import styled from 'styled-components';
import { ReactComponent as IconBackArrow } from '../icons/back-arrow.svg';

const Button = styled.button`
  position: absolute;
  bottom: 240px;
  left: 25%;
  transform: translateX(-50%);
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
    box-shadow:  -8px 8px 60px -10px ${({theme}) => theme.color.grey},
                  12px -12px 60px #ffffff;
  }
`;

const IconBox = styled.span`
  & svg {
    width: 33%;
    height: auto;
    transition: all .25s ease-in-out;
    fill: ${props => {
      if (props.song !== null) {
        return props.theme.color.grey;
      } else {
        return props.theme.color.background;
      }
    }};
  }
`;

function PutBackButton( {onClick, currentSong} ) {

  return(
    <Button
      onClick = {onClick}
    >
      <IconBox song={currentSong}>
        <IconBackArrow />
      </IconBox>
    </Button>
  );
}

export default PutBackButton;