import React from 'react';
import styled from 'styled-components';
import BoardListCard from './BoardListCard';

const BoardItemDiv = styled.div`
  padding: 60px 35px;
`;

const BoardTitleDiv = styled.div`
  width: 200px;
  height: auto;
  color: #fff;
  text-shadow: 0px 0px 3px #000;
  word-break: break-all;
  background-color: #9fe7a4;
  padding: 10px 60px;
  margin: 0 0 0 50px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

class BoardItem extends React.Component {
  render() {
    return (
      <>
        <BoardItemDiv>
          <BoardTitleDiv>
            <h1>{this.props.match.params.boardId}</h1>
          </BoardTitleDiv>
        </BoardItemDiv>
        <BoardListCard></BoardListCard>
      </>
    );
  }
}

export default BoardItem;
