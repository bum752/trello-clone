import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BoardCardDiv = styled.div`
  width: 345px;
  height: auto;
  margin: 20px;
  color: #000;
  background-color: #fff;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  align-items: center;
  border-radius: 5.5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  font-weight: 900;
`;

class BoardCard extends React.Component {
  render() {
    return (
      <a>
        <Link to={this.props.name} style={{ textDecoration: 'none' }}>
          <BoardCardDiv>
            <h2>{this.props.name}</h2>
          </BoardCardDiv>
        </Link>
      </a>
    );
  }
}

export default BoardCard;
