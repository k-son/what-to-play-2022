import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
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
  width: 100%;
  padding: 24px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  color: black;

  &:not(:last-of-type) {
    border-bottom: 1px solid black;
  }

  .choose {
    display: flex;
    align-items: center;
    border: none;
    cursor: pointer;
  }

  .choose__title-bullet {
    flex-shrink: 0;
    display: block;
    width: 20px;
    height: 20px;
    background: grey;
  }

  .choose__title {
    font-size: 20px;
    text-align: left;
    margin-left: 20px;
  }

  .delete {
    flex-shrink: 0;
    position: relative;
    display: block;
    width: 48px;
    height: 48px;
    border: none;
    border-radius: 50%;
    cursor: pointer;

    span {
      position: absolute;
      top: 50%;
      left: 50%;
      display: block;
      width: 32px;
      height: 2px;
      background: ${props => props.theme.color.red};
      border-radius: 4px;

      &:first-of-type {
        transform: translate(-50%,-50%) rotate(45deg);
      }

      &:last-of-type {
        transform: translate(-50%,-50%) rotate(-45deg);
      }
    }
  }
`;


function SongList( {songList, choose, deleteSong} ) {
  return(
    <Wrapper>
      <List>
        {songList.map(li => {
          return (
            <ListItem key={li.title}>
              <button 
                className="choose"
                onClick={() => choose(li.title)}
              >
                <span className="choose__title-bullet"></span>
                <span className="choose__title">{li.title}</span>
              </button>
              <button
                className="delete"
                onClick={() => deleteSong(li.title)}
              >
                <span></span>
                <span></span>
              </button>
            </ListItem>          
          )
        })}
      </List>
    </Wrapper>
  )
};

export default SongList;