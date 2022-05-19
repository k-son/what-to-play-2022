import React from "react";
import styled from "styled-components";

const Paragraph = styled.p`
  position: absolute;
  bottom: 400px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 16px;
  color: ${({theme}) => theme.color.icon};
`;

function SongTempo( {tempo} ) {
  return(
    <Paragraph>
      {tempo} bpm
    </Paragraph>
  )
}

export default SongTempo;