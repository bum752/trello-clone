import React from 'react';
import styled from 'styled-components';
import BoardCard from './BoardCard';

const BoardDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 60px 35px;
`;

class Board extends React.Component {
  render() {
    return (
      <BoardDiv>
        <BoardCard></BoardCard>
      </BoardDiv>
    );
  }
}

export default Board;
