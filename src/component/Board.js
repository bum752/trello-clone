import React from 'react';
import styled from 'styled-components';
import BoardCreateCard from './BoardCreateCard';

const BoardDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 60px 35px;
`;

class Board extends React.Component {
  render() {
    return (
      <BoardDiv>
        <BoardCreateCard></BoardCreateCard>
      </BoardDiv>
    );
  }
}

export default Board;
