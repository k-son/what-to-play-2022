import React from "react";
import styled from "styled-components";

const Paragraph = styled.p`
  position: absolute;
  top: calc(25% - 64px);
  left: 50%;
  transform: translateX(-50%);
  width: fit-content;
  max-width: 80%;
  font-size: 20px;
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