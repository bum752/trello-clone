import React from 'react';
import styled from 'styled-components';

const ListDiv = styled.div`
  display: flex;
`;

const AddListDiv = styled.div`
  display: flex;
  margin: 20px;
  padding: 10px 40px;
  background-color: #0a2c74;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  align-items: center;
  width: 200px;
  height: 100px;
  border-radius: 5px;
  color: white;
  font-weight: 900;
  cursor: pointer;
`;

const ClickedAddListDiv = styled.div`
  margin: 20px;
  padding: 10px 40px;
  width: 200px;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.45);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const AddListInput = styled.input`
  padding: 11px 15px;
  border-radius: 5px;
  border: 2.5px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.16), 0 3px 3px rgba(0, 0, 0, 0.23);
  width: 80%;
`;

class BoardListCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newList: false,
      newListName: ''
    };

    this.handleCreateNewListDivClick = this.handleCreateNewListDivClick.bind(this);
    this.handleNewListNameInputChange = this.handleNewListNameInputChange.bind(this);
  }

  handleCreateNewListDivClick() {
    this.setState({ newList: true });
  }

  handleNewListNameInputChange(event) {
    this.setState({ newListName: event.target.value });
  }

  render() {
    return (
      <ListDiv>
        {this.state.newList ? (
          <ClickedAddListDiv>
            <AddListInput
              type="text"
              placeholder="add a list"
              onChange={this.handleNewListNameInputChange}
              value={this.state.newListName}
            ></AddListInput>
            {this.state.newListName ? (
              <></>
            ) : (
              <p style={{ textShadow: '1px 1px 1px white', fontWeight: 400, fontSize: '12px', textAlign: 'center' }}>
                give me a name!
              </p>
            )}
          </ClickedAddListDiv>
        ) : (
          <AddListDiv onClick={this.handleCreateNewListDivClick}>
            <h4>Add a list...</h4>
          </AddListDiv>
        )}
      </ListDiv>
    );
  }
}

export default BoardListCard;
