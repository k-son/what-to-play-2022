import React, {useState} from "react";
import styled from "styled-components";
import CloseButton from "./CloseButton";
import ConfirmDelete  from "./ConfirmDelete";
import { ReactComponent as IconTrash } from '../icons/trash-can-outline.svg';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 99;
  background: ${props => props.theme.color.background};
  padding: 40px 20px;
  overflow: auto;
`;

const List = styled.ul`
  width: 100%;
  max-width: 500px;
  position: relative;
  margin: 64px auto;
  list-style-type: none;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
  padding: 0 0 0 16px;
  font-size: 20px;
  color: black;

  &:not(:last-of-type) {
    border-bottom: 1px solid ${({theme}) => theme.color.backgroundLight};
  }
`;

const SongButton = styled.button`
  display: flex;
  align-items: center;
  width: 80%;
  height: 80px;
  font-size: 20px;
  text-align: left;
  color: ${({theme}) => theme.color.text};
  background: transparent;
  border: none;
  cursor: pointer;

  @media (min-width: 400px) {
    font-size: 24px;
  }
`;

const RemoveButton = styled.button`
  flex-shrink: 0;
  display: block;
  width: 64px;
  height: 64px;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  cursor: pointer;

  & svg {
    height: 24px;
    width: auto;
    fill: ${({theme}) => theme.color.icon};
  }
`;

function SongList( {songList, choose, deleteSong, closeList} ) {

  const [isConfirmDelete, setConfirmDelete] = useState(false);
  const [confirmSong, setConfirmSong] = useState(null);

  function toggleConfirmVisibility() {
    if (isConfirmDelete) {
      setConfirmDelete(false);
    } else {
      setConfirmDelete(true);
    }
  }

  return(
    <Wrapper>
      <CloseButton 
        action={closeList}
      />
      <List>
        {songList.sort((a,b) => a.title > b.title ? 1 : -1)
        .map(li => {
          return (
            <ListItem key={li.title}>
              <SongButton
                onClick={() => choose(li.title)}
              >
                {li.title}
              </SongButton>
              <RemoveButton
                onClick={() => {
                  setConfirmSong(li.title);
                  toggleConfirmVisibility();}
                }
              >
                <IconTrash />
              </RemoveButton>
            </ListItem>          
          )
        })}
      </List>
      {isConfirmDelete &&
        <ConfirmDelete 
          song={confirmSong}
          closeConfirm={toggleConfirmVisibility}
          deleteSong={deleteSong}
        />
      }
    </Wrapper>
  )
};

export default SongList;