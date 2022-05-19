import React, {useState, useEffect} from 'react';
import styled from "styled-components";

const Bar = styled.div`
  position: absolute;
  top: 25%;
  left: 0;
  width: 100%;
  height: 20px;
  margin: 12px auto;
  padding: 0px;
`;

const ColorFill = styled.div`
  width: ${props => props.progress + '%'};
  height: 100%;
  background-color: ${props => {
    if (props.progress > 66) {
      return props.theme.color.yellow;
    } else if (props.progress > 33 && props.progress <= 66) {
      return props.theme.color.orange;
    } else {
      return props.theme.color.red;
    }
  }};
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  transition: width .4s;
`;

const Percentage = styled.span`
  position: absolute;
  top: -20px;
  left: ${props => props.progress + '%'};
  transform: translateX(-120%);
  font-size: 16px;
  color: ${props => {
    if (props.progress > 66) {
      return props.theme.color.yellow;
    } else if (props.progress > 33 && props.progress <= 66) {
      return props.theme.color.orange;
    } else {
      return props.theme.color.red;
    }
  }};
  color: ${props => props.theme.color.icon};
  transition: left .4s;
`;



function ProgressBar( {progress, songsLeft} ) {

  return (
    <>
      <Bar>
        <ColorFill progress={progress} />
        <Percentage progress={progress}>
          {songsLeft}
        </Percentage>
      </Bar>
    </>
  );
}

export default ProgressBar;
