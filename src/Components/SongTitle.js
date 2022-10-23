import React from "react";
import styled from "styled-components";

const Paragraph = styled.p`
  position: absolute;
  top: calc(25% - 72px);
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  max-width: 600px;
  font-size: 24px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme}) => theme.color.text};
`;

function SongTitle( {song} ) {
  return(
    <Paragraph>
      {song}
    </Paragraph>
  )
}

export default SongTitle;