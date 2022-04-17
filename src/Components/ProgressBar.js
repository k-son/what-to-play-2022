import React, {useState, useEffect} from 'react';
import styled from "styled-components";

const Bar = styled.div`
  position: relative;
  width: 68%;
  max-width: 400px;
  height: 12px;
  margin: 80px auto;
  padding: 0px;
  background-color: #1d1d1d;
  border: 1px solid #555;
  border-radius: 25px;

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
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  border-radius: 25px;
  transition: width .4s;
`;

const Percentage = styled.span`
  position: absolute;
  top: -28px;
  left: ${props => props.progress + '%'};
  font-size: 14px;
  color: ${props => {
    if (props.progress > 66) {
      return props.theme.color.yellow;
    } else if (props.progress > 33 && props.progress <= 66) {
      return props.theme.color.orange;
    } else {
      return props.theme.color.red;
    }
  }};
  transition: left .4s;
`;



function ProgressBar( {total, number} ) {
  const [progress, setProgress] = useState();

  useEffect(() => {
    function calculateProgress() {
      const percentage = Math.round((number / total) * 100);
      setProgress(percentage);
    }
    calculateProgress();
  }, [number]);

  return (
    <>
      <p>percentage: {progress}</p>
      <Bar>
        <ColorFill progress={progress} />
        <Percentage progress={progress}>
          {progress}%
        </Percentage>
      </Bar>
    </>
  );
}

export default ProgressBar;
