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
  border-radius: 5.5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  cursor: pointer;
  transition: 200ms ease-in-out;
  font-weight: 900;
  text-shadow: 0px 0px 3px #000;
`;

const NewBoardCardHeaderDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fff;
  text-shadow: 0px 0px 3px #000;
  width: 100%;
  border-bottom: solid 1px rgb(240, 240, 240);
  font-weight: bold;
`;

const NewBoardCardBodyDiv = styled.div`
  color: #fff;
  text-shadow: 0px 0px 3px #000;
  margin: 10px;
`;

const FloatRightDiv = styled.div`
  float: right;
`;

const BoardNameInput = styled.input`
  padding: 11px 15px;
  font-size: 16px;
  border-radius: 5px;
  border: 2.5px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.16), 0 3px 3px rgba(0, 0, 0, 0.23);
`;

const BoardNameErrorDiv = styled.div`
  color: #000;
  text-shadow: 1px 1px 1px #fff;
  font-weight: 400;
  margin: 10px 0 0 0;
  text-align: center;
  font-size: 12px;
`;

const ButtonsDiv = styled.div`
  display: flex;
  width: 150px;
  justify-content: space-between;
  margin-top: 15px;
`;

const CancelButton = styled.button`
  width: 70px;
  height: 43px;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  background: none;
  color: #fff;
  font-weight: 900;
  text-shadow: 0px 0px 3px #000;
`;

const CreateButton = styled.button`
  width: 70px;
  height: 43px;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  background: #fff;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.16), 0 3px 3px rgba(0, 0, 0, 0.23);
`;

class BoardCreateCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newBoard: false,
      newBoardName: ''
    };

    this.handleCreateNewBoardButton = this.handleCreateNewBoardButton.bind(this);
    this.handleCancelNewBoardButton = this.handleCancelNewBoardButton.bind(this);
    this.handleNewBoardNameInputChange = this.handleNewBoardNameInputChange.bind(this);
    this.createNewBoard = this.createNewBoard.bind(this);
  }

  handleCreateNewBoardButton() {
    this.setState({ newBoard: true });
  }

  handleCancelNewBoardButton() {
    this.setState({ newBoard: false });
  }

  handleNewBoardNameInputChange(event) {
    this.setState({ newBoardName: event.target.value });
  }

  createNewBoard() {
    const { newBoardName } = this.state;
    const { appendBoard } = this.props;

    const success = appendBoard(newBoardName);
    if (success) this.setState({ newBoard: false });
  }

  render() {
    return (
      <>
        {this.state.newBoard ? (
          <CardDiv>
            <NewBoardCardHeaderDiv>
              <h3>Creating a board</h3>
              <FloatRightDiv>
                <FontAwesomeIcon icon={faTimes} onClick={this.handleCancelNewBoardButton} />
              </FloatRightDiv>
            </NewBoardCardHeaderDiv>
            <NewBoardCardBodyDiv>
              <h5>What shall we call the board?</h5>
            </NewBoardCardBodyDiv>
            <BoardNameInput
              value={this.state.newBoardName}
              onChange={this.handleNewBoardNameInputChange}
            ></BoardNameInput>
            {!this.state.newBoardName ? (
              <BoardNameErrorDiv>Oops! Looks like you forgot the name!</BoardNameErrorDiv>
            ) : (
              <></>
            )}
            <ButtonsDiv>
              <CancelButton onClick={this.handleCancelNewBoardButton}>Cancel</CancelButton>
              <CreateButton onClick={this.createNewBoard} disabled={!this.state.newBoardName}>
                Create
              </CreateButton>
            </ButtonsDiv>
          </CardDiv>
        ) : (
          <CardDiv onClick={this.handleCreateNewBoardButton}>
            <NewBoardCardBodyDiv>
              <h3>Create a new board...</h3>
            </NewBoardCardBodyDiv>
          </CardDiv>
        )}
      </>
    );
  }
}

export default BoardCreateCard;
