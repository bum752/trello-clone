import React from 'react';
import styled from 'styled-components';
import BoardCreateCard from './BoardCreateCard';
import BoardCard from './BoardCard';

const BoardDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 60px 35px;
`;

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: Object.keys(localStorage)
    };

    this.appendBoard = this.appendBoard.bind(this);
  }

  appendBoard(newBoardName) {
    if (localStorage.getItem(newBoardName)) {
      alert('already exist board name.');
      return false;
    }

    this.setState({
      boards: [...this.state.boards, newBoardName]
    });
    localStorage.setItem(newBoardName, JSON.stringify([]));

    return true;
  }

  render() {
    return (
      <BoardDiv>
        <BoardCreateCard appendBoard={this.appendBoard} />
        {this.state.boards.map(boardName => {
          return <BoardCard key={boardName} name={boardName} />;
        })}
      </BoardDiv>
    );
  }
}

export default Board;
