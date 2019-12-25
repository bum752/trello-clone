import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const CardDiv = styled.div`
  width: 345px;
  height: auto;
  margin: 20px;
  background-color: #9fe7a4;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  align-items: center;
  board-radius: 5.5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  cursor: pointer;
  transition: 200ms ease-in-out;
  font-weight: 900;
  text-shadow: 0px 0px 3px #000;
`;

const NewBoardCardHeaderDiv = styled.div`
  color: white;
  text-shadow: 0px 0px 3px #000;
  width: 100%;
  border-bottom: solid 1px rgb(240, 240, 240);
`;

const NewBoardCardBodyDiv = styled.div`
  color: white;
  text-shadow: 0px 0px 3px #000;
  margin: 10px;
`;

const FloatRightDiv = styled.div`
  float: right;
`;

class BoardCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newBoard: false
    };

    this.createNewBoard = this.createNewBoard.bind(this);
    this.cancelNewBoard = this.cancelNewBoard.bind(this);
  }

  createNewBoard() {
    this.setState({ newBoard: true });
  }

  cancelNewBoard() {
    this.setState({ newBoard: false });
  }

  render() {
    return (
      <>
        {this.state.newBoard ? (
          <CardDiv>
            <NewBoardCardHeaderDiv>
              Creating a board
              <FloatRightDiv>
                <FontAwesomeIcon icon={faTimes} onClick={this.cancelNewBoard} />
              </FloatRightDiv>
            </NewBoardCardHeaderDiv>
            <NewBoardCardBodyDiv>
              What shall we call the board?
            </NewBoardCardBodyDiv>
          </CardDiv>
        ) : (
          <CardDiv onClick={this.createNewBoard}>Create a new board...</CardDiv>
        )}
      </>
    );
  }
}

export default BoardCard;
